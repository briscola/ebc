var Big = require('big.js'); // 誤差のない小数点計算のためのライブラリ
var tariff = require('../data/tariff.json');
var fuelregcosts = require('../data/fuelregcosts.json');
var greenpower = require('../data/greenpower.json');
var banktransdiscount = require('../data/banktransdiscount.json');
var basic_calc = require('./basic_calc.js');
var amount_calc = require('./amount_calc.js');
var errors = require('./errors.json');

module.exports = {
    // 電力会社をセット
    init: function(company) {
	this.company = company;
	this.companyname = tariff[this.company].companyname;
	return this;
    },
    
    // 電力使用量をセット
    setEU: function(eu) {
	this.eu = eu;
    },

    // 電力使用量を取得
    getEU: function(eu) {
	return this.eu;
    },

    // プランID、月額料金、契約アンペア数、昼間の時間帯と使用率、口座振替有無をセットし、日々の電力使用量を初期化
    setCurrentPlan: function(planid,monthlyfee,ampere,daytimestart,daytimeend,daytimerate,banktrans) {
	// 口座振替有無はデフォルト有(true)
	var bank = banktrans === undefined ? true : banktrans;
	
	// planidに該当するプランをセット
	var defaultplan = null;
	for(var i=0; i<tariff[this.company].plans.length; i++) {
	    if(planid == tariff[this.company].plans[i].planid) {
		defaultplan = tariff[this.company].plans[i];
	    }
	}
	// planidに該当するプランがない場合エラー
	if(defaultplan == null) {
	    throw new Error(errors.invalid_planid);
	}
	
	// アンペア数が10, 15, 20, 30...(10の倍数)以外の値を取る場合エラー
	if(ampere<=0 || (ampere!=15 && ampere%10!=0)) {
	    throw new Error(errors.invalid_ampere);
	}

	// 電力料金から使用量を求める。
	var basicfee = 0;
	var amountfee = 0;
	var amountkwh = 0;
	var month = this.eu.month.toString();
	var YYYYMM = this.eu.year.toString() + (month[1]?month:"0"+month[0]);

	if(defaultplan.basicid==1 && defaultplan.amountid==1) { // 従量電灯BCのケース
	    basicfee = new Big(defaultplan.basicunit).times(ampere).div(10);
	    amountfee = new Big(monthlyfee).minus(basicfee).plus(bank==true?banktransdiscount[this.company]:0);
	    var unit1 = new Big(defaultplan.amountunit1).plus(fuelregcosts[this.company][YYYYMM]).plus(greenpower[YYYYMM]);
	    var kwh1 = defaultplan.amountunit1_2_kwh;
	    var unit2 = new Big(defaultplan.amountunit2).plus(fuelregcosts[this.company][YYYYMM]).plus(greenpower[YYYYMM]);
	    var kwh2 = defaultplan.amountunit2_3_kwh;
	    var unit3 = new Big(defaultplan.amountunit3).plus(fuelregcosts[this.company][YYYYMM]).plus(greenpower[YYYYMM]);
	    var amount1 = unit1.times(kwh1);
	    var amount2 = unit2.times(kwh2-kwh1).plus(amount1);
	    amountkwh = amountfee.lt(amount1)?amountfee.div(unit1):
		(amountfee.lt(amount2)?amountfee.minus(amount1).div(unit2).plus(kwh1):amountfee.minus(amount2).div(unit3).plus(kwh2));
	} else { // 従量電灯Aのケース
	    basicfee = new Big(defaultplan.minimumfee);
	    var fuelmincost = new Big(fuelregcosts[this.company][YYYYMM]).times(defaultplan.minimumkwh); // 再エネ賦課金の最低額
	    var greenmincost = new Big(greenpower[YYYYMM]).times(defaultplan.minimumkwh); // 燃料費調整の最低額
	    amountfee = new Big(monthlyfee).minus(basicfee).minus(fuelmincost).minus(greenmincost).plus(bank==true?banktransdiscount[this.company]:0);
	    var unit1 = new Big(defaultplan.amountunit1).plus(fuelregcosts[this.company][YYYYMM]).plus(greenpower[YYYYMM]);
	    var kwh1 = defaultplan.amountunit1_2_kwh;
	    var unit2 = new Big(defaultplan.amountunit2).plus(fuelregcosts[this.company][YYYYMM]).plus(greenpower[YYYYMM]);
	    var kwh2 = defaultplan.amountunit2_3_kwh;
	    var unit3 = new Big(defaultplan.amountunit3).plus(fuelregcosts[this.company][YYYYMM]).plus(greenpower[YYYYMM]);
	    var amount1 = unit1.times(kwh1-defaultplan.minimumkwh);
	    var amount2 = unit2.times(kwh2-kwh1).plus(amount1);
	    amountkwh = amountfee.lt(amount1)?amountfee.div(unit1).plus(defaultplan.minimumkwh):
		(amountfee.lt(amount2)?amountfee.minus(amount1).div(unit2).plus(kwh1):amountfee.minus(amount2).div(unit3).plus(kwh2));
	}
	
	// 電力量料金がマイナスの場合エラー
	if(amountfee.lt(0)) {
	    throw new Error(errors.invalid_input_fee);
	}

	// 一ヶ月の電力使用量(kwh)と昼夜の利用割合から30分ごとの電力使用量(wh)を求める
	var dailywh = amountkwh.div(this.eu.daynumber).times(1000);
	for(var i=0; i<this.eu.daynumber; i++) {
	    var daywh = Math.floor(dailywh.times(daytimerate).div(new Big(daytimeend).minus(daytimestart).times(2)));
	    var nightwh = Math.floor(
		dailywh.times(new Big(1.0).minus(daytimerate)).div(new Big(24).minus(daytimeend).plus(daytimestart).times(2))
	    );
	    var _dailywh = 0;
	    for(var j=0; j<24*2; j++) {
		if(j<daytimestart*2 || j>=daytimeend*2) {
		    this.eu.daily[i].wh[j] = nightwh; // 夜間の電力使用量
		    _dailywh = _dailywh + nightwh;
		} else {
		    this.eu.daily[i].wh[j] = daywh; // 昼間の電力使用量
		    _dailywh = _dailywh + daywh;
		}
	    }
	    this.eu.daily[i].totalwh = _dailywh;
	}
	this.eu.amountkwh = Math.floor(amountkwh); // 電力使用量(kwh)
	this.eu.fuelregcost = new Big(fuelregcosts[this.company][YYYYMM]).times(amountkwh).round(2,0).toPrecision(); // 燃料費調整額
	this.eu.greenpower = new Big(greenpower[YYYYMM]).times(amountkwh).round(2,0).toPrecision(); // 再エネ発電賦課金
	
	this.monthlyfee = monthlyfee; // オリジナル月額料金
	this.ampere = ampere; // アンペア数
    },

    // 電気料金を計算し、節約料金プランを返します
    getSavedPlans: function(saved,banktrans) {
	// 節約プランのみかすべてか(デフォルトは節約プランのみ)
	var savedfee = saved === undefined ? true : saved;
	// 口座振替有無はデフォルト有(true)
	var bank = banktrans === undefined ? true : banktrans;
	
	var plans = tariff[this.company].plans;
	this.savedplans = [];
	var bankdiscount = bank==true?banktransdiscount[this.company]:0;

	for(var i=0; i<plans.length; i++) {
	    // 基本料金の計算
	    plans[i].basicfee = basic_calc.calc[plans[i].basicid](this.ampere,plans[i],this.eu);
	    
	    // 電気使用量料金の計算
	    plans[i].amountinfo = amount_calc.calc[plans[i].amountid](plans[i],this.eu);
	    plans[i].amountkwh = plans[i].amountinfo.amountkwh;
	    plans[i].amountfee = plans[i].amountinfo.amountfee;

	    // 月額料金、オリジナル額、削減額、燃料調整費、再エネ賦課額をセット
	    plans[i].monthlyfee = Math.floor(
		new Big(plans[i].basicfee).plus(plans[i].amountfee).plus(this.eu.fuelregcost).plus(this.eu.greenpower).minus(bankdiscount)
	    );
	    plans[i].originalfee = this.monthlyfee;
	    plans[i].savedfee = this.monthlyfee - plans[i].monthlyfee;
	    plans[i].fuelregcost = this.eu.fuelregcost;
	    plans[i].greenpower = this.eu.greenpower;

	    if(savedfee == true) {
		// プランID 1を除き、削減額がプラスの場合のみ返す
		if(plans[i].savedfee>0 && plans[i].planid!=1) {
		    this.savedplans.push(plans[i]);
		}
	    } else {
		// すべて返す
		this.savedplans.push(plans[i]);
	    }
	}
	
	// 昇順で返す
	this.savedplans.sort(function(a,b){
	    if(a.monthlyfee < b.monthlyfee) return -1;
	    if(a.monthlyfee > b.monthlyfee) return 1;
	    return 0;
	});
	return this.savedplans;
    }
};
