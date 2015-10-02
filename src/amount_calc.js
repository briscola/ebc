var Big = require('big.js'); // 誤差のない小数点計算のためのライブラリ

var holidays = require('../data/holidays.json');

// 電気量料金計算
var Calc = function () {
};
Calc.prototype.calc = [];

// 1.従量電灯三段階型
Calc.prototype.calc[1] = function(plan,eu) {
    // 料金計算
    var amountfee = 0;
    if(eu.amountkwh<=plan.amountunit1_2_kwh) {
	amountfee = new Big(eu.amountkwh).times(plan.amountunit1);
    } else if(eu.amountkwh>plan.amountunit1_2_kwh && eu.amountkwh<=plan.amountunit2_3_kwh) {
	amountfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(eu.amountkwh-plan.amountunit1_2_kwh).times(plan.amountunit2));
    } else if(eu.amountkwh>plan.amountunit2_3_kwh) {
	amountfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(plan.amountunit2_3_kwh-plan.amountunit1_2_kwh).times(plan.amountunit2)).
	    plus(new Big(eu.amountkwh-plan.amountunit2_3_kwh).times(plan.amountunit3));
    }
    amountfee = parseFloat(amountfee.round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee
    };
};

// 2.昼三段階型
Calc.prototype.calc[2] = function(plan,eu) {
    var nightwh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	for(var j=0; j<24*2; j++) {
	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(plan.nightstarttime*2<=j && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		}
	    } else {
		if(plan.nightstarttime*2<=j || j<plan.nightendtime*2){ //夜中の24時をまたぐ場合
		    nightwh = nightwh + eu.daily[i].wh[j];
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = eu.amountkwh - nightkwh;

    // 料金計算
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var dayfee = 0;
    if(daykwh<=plan.amountunit1_2_kwh) {
	dayfee = new Big(daykwh).times(plan.amountunit1);
    } else if(daykwh>plan.amountunit1_2_kwh && daykwh<=plan.amountunit2_3_kwh) {
	dayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(daykwh-plan.amountunit1_2_kwh).times(plan.amountunit2));
    } else if(daykwh>plan.amountunit2_3_kwh) {
	dayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(plan.amountunit2_3_kwh).times(plan.amountunit2)).
	    plus(new Big(daykwh-plan.amountunit2_3_kwh).times(plan.amountunit3));
    }
    dayfee = parseFloat(dayfee.round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(new Big(dayfee).plus(nightfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee
    };
};

// 3.平日三段階型
Calc.prototype.calc[3] = function(plan,eu) {
    var weekendwh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	// 土日の消費電力量計算
	if(eu.daily[i].day==0||eu.daily[i].day==1){
	    weekendwh = weekendwh + eu.daily[i].totalwh;
	}
    }
    var weekendkwh = parseInt(new Big(weekendwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var weekdaykwh = eu.amountkwh - weekendkwh;

    // 料金計算
    var weekendfee = parseFloat(new Big(plan.weekendunit).times(weekendkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var weekdayfee = 0;
    if(weekdaykwh<=plan.amountunit1_2_kwh) {
	weekdayfee = new Big(weekdaykwh).times(plan.amountunit1);
    } else if(weekdaykwh>plan.amountunit1_2_kwh && weekdaykwh<=plan.amountunit2_3_kwh) {
	weekdayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(weekdaykwh-plan.amountunit1_2_kwh).times(plan.amountunit2));
    } else if(weekdaykwh>plan.amountunit2_3_kwh) {
	weekdayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(plan.amountunit2_3_kwh-plan.amountunit1_2_kwh).times(plan.amountunit2)).
	    plus(new Big(weekdaykwh-plan.amountunit2_3_kwh).times(plan.amountunit3));
    }
    weekdayfee = parseFloat(weekdayfee.round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(new Big(weekdayfee).plus(weekendfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"weekdaykwh": weekdaykwh,
	"weekdayfee": weekdayfee,
	"weekendkwh": weekendkwh,
	"weekendfee": weekendfee
    };
};

// 4.夏季ピーク朝夕昼夜型
Calc.prototype.calc[4] = function(plan,eu) {
    // 夏季ピーク日の開始終了月日を設定
    var summerstart = plan.summerstartdate.split('/');
    var summerstartnum = Number(summerstart[0])*100+Number(summerstart[1]); // 夏季ピーク開始日をmmddの形式で数字に変換(例:7/1は701)
    var summerend = plan.summerenddate.split('/');
    var summerendnum = Number(summerend[0])*100+Number(summerend[1]); // 夏季ピーク終了日をmmddの形式で数字に変換(例:9/30は930)
    
    var nightwh = 0;
    var daywh = 0;
    var summerdaywh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	var daynum = eu.month*100+i+1; // 日付をmmddの形式で数字に変換
	for(var j=0; j<24*2; j++) {
	    // 夏季ピーク時間の消費電力量計算
	    if(summerstartnum<=daynum && daynum<=summerendnum) {
		if(j>=plan.summerstarttime*2 && j<plan.summerendtime*2){
		    summerdaywh = summerdaywh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	    // 昼間の消費電力量計算
	    if(j>=plan.amountstarttime*2 && j<plan.amountendtime*2){
		daywh = daywh + eu.daily[i].wh[j];
		continue;
	    }
	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(j>=plan.nightstarttime*2 && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    } else {
		if(j>=plan.nightstarttime*2 || j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = parseInt(new Big(daywh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var summerkwh = parseInt(new Big(summerdaywh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var morningeveningkwh = eu.amountkwh - nightkwh - daykwh - summerkwh;

    // 料金計算
    var dayfee = parseFloat(new Big(plan.amountunit1).times(daykwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var morningeveningfee = parseFloat(
	new Big(plan.morningeveningunit).times(morningeveningkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var summerfee = parseFloat(new Big(plan.summerunit).times(summerkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(
	new Big(dayfee).plus(nightfee).plus(morningeveningfee).plus(summerfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee,
	"morningeveningkwh": morningeveningkwh,
	"morningeveningfee": morningeveningfee,
	"summerkwh": summerkwh,
	"summerfee": summerfee
    };
};

// 5.夏季ピーク型
Calc.prototype.calc[5] = function(plan,eu) {
    // 夏季ピーク日の開始終了月日を設定
    var summerstart = plan.summerstartdate.split('/');
    var summerstartnum = Number(summerstart[0])*100+Number(summerstart[1]); // 夏季ピーク開始日をmmddの形式で数字に変換(例:7/1は701)
    var summerend = plan.summerenddate.split('/');
    var summerendnum = Number(summerend[0])*100+Number(summerend[1]); // 夏季ピーク終了日をmmddの形式で数字に変換(例:9/30は930)
    
    var nightwh = 0;
    var summerwh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	var daynum = eu.month*100+i+1; // 日付をmmddの形式で数字に変換
	for(var j=0; j<24*2; j++) {
	    // 夏季ピーク時間の消費電力量計算
	    if(summerstartnum<=daynum && daynum<=summerendnum) {
		if(j>=plan.summerstarttime*2 && j<plan.summerendtime*2){
		    summerwh = summerwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(j>=plan.nightstarttime*2 && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    } else {
		if(j>=plan.nightstarttime*2 || j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var summerkwh = parseInt(new Big(summerwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = eu.amountkwh - nightkwh - summerkwh;

    // 料金計算
    var dayfee = parseFloat(new Big(plan.amountunit1).times(daykwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var summerfee = parseFloat(new Big(plan.summerunit).times(summerkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(new Big(dayfee).plus(nightfee).plus(summerfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee,
	"summerkwh": summerkwh,
	"summerfee": summerfee
    };
};

// 6.冬季ピーク型
Calc.prototype.calc[6] = function(plan,eu) {
    // 冬季ピーク日の開始終了月日を設定
    var winterstart = plan.winterstartdate.split('/');
    var winterstartnum = Number(winterstart[0])*100+Number(winterstart[1]); // 冬季ピーク開始日をmmddの形式で数字に変換(例:11/1は1101)
    var winterend = plan.winterenddate.split('/');
    var winterendnum = Number(winterend[0])*100+Number(winterend[1]); // 冬季ピーク終了日をmmddの形式で数字に変換(例:3/31は331)
    
    var nightwh = 0;
    var winterdaywh = 0;
    var winterpeakwh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	var daynum = eu.month*100+i+1; // 日付をmmddの形式で数字に変換
	for(var j=0; j<24*2; j++) {
	    if(((winterstartnum < winterendnum) && (winterstartnum<=daynum && daynum<=winterendnum)) ||
	       (winterstartnum >= winterendnum) && (winterstartnum<=daynum || daynum<=winterendnum)) {
		// 冬季ピーク時間の消費電力量計算
		if(j>=plan.winterpeakstarttime*2 && j<plan.winterpeakendtime*2){
		    winterpeakwh = winterpeakwh + eu.daily[i].wh[j];
		    continue;
		}
		// 冬季昼時間の消費電力量計算
		if(plan.nightstarttime < plan.nightendtime) {
		    if(j<plan.nightstarttime*2 || j>=plan.nightendtime*2){
			winterdaywh = winterdaywh + eu.daily[i].wh[j];
			continue;
		    }
		} else {
		    if(j<plan.nightstarttime*2 && j<=plan.nightendtime*2){
			winterdaywh = winterdaywh + eu.daily[i].wh[j];
			continue;
		    }
		}
	    }

	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(j>=plan.nightstarttime*2 && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    } else {
		if(j>=plan.nightstarttime*2 || j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var winterdaykwh = parseInt(new Big(winterdaywh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var winterpeakkwh = parseInt(new Big(winterpeakwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = eu.amountkwh - nightkwh - winterdaykwh - winterpeakkwh;

    // 料金計算
    var dayfee = 0;
    if(daykwh<=plan.amountunit1_2_kwh) {
	dayfee = new Big(daykwh).times(plan.amountunit1);
    } else if(daykwh>plan.amountunit1_2_kwh && daykwh<=plan.amountunit2_3_kwh) {
	dayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(daykwh-plan.amountunit1_2_kwh).times(plan.amountunit2));
    } else if(daykwh>plan.amountunit2_3_kwh) {
	dayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(plan.amountunit2_3_kwh-plan.amountunit1_2_kwh).times(plan.amountunit2)).
	    plus(new Big(daykwh-plan.amountunit2_3_kwh).times(plan.amountunit3));
    }
    dayfee = parseFloat(dayfee.round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var winterdayfee = 0;
    if(winterdaykwh<=plan.winterunit1_2_kwh) {
	winterdayfee = new Big(winterdaykwh).times(plan.winterunit1);
    } else if(winterdaykwh>plan.winterunit1_2_kwh && winterdaykwh<=plan.winterunit2_3_kwh) {
	winterdayfee = new Big(plan.winterunit1_2_kwh).times(plan.winterunit1).
	    plus(new Big(winterdaykwh-plan.winterunit1_2_kwh).times(plan.winterunit2));
    } else if(winterdaykwh>plan.winterunit2_3_kwh) {
	winterdayfee = new Big(plan.winterunit1_2_kwh).times(plan.winterunit1).
	    plus(new Big(plan.winterunit2_3_kwh-plan.winterunit1_2_kwh).times(plan.winterunit2)).
	    plus(new Big(winterdaykwh-plan.winterunit2_3_kwh).times(plan.winterunit3));
    }
    winterdayfee = parseFloat(winterdayfee.round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var winterpeakfee = parseFloat(
	new Big(plan.winterpeakunit).times(winterpeakkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(
	new Big(dayfee).plus(nightfee).plus(winterdayfee).plus(winterpeakfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee,
	"winterdaykwh": winterdaykwh,
	"winterdayfee": winterdayfee,
	"winterpeakkwh": winterpeakkwh,
	"winterpeakfee": winterpeakfee
    };
};

// 7.朝夕昼夜型
Calc.prototype.calc[7] = function(plan,eu) {
    var nightwh = 0;
    var daywh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	for(var j=0; j<24*2; j++) {
	    // 昼間の消費電力量計算
	    if(j>=plan.amountstarttime*2 && j<plan.amountendtime*2){
		daywh = daywh + eu.daily[i].wh[j];
		continue;
	    }
	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(j>=plan.nightstarttime*2 && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    } else {
		if(j>=plan.nightstarttime*2 || j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = parseInt(new Big(daywh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var morningeveningkwh = eu.amountkwh - nightkwh - daykwh;

    // 料金計算
    var dayfee = parseFloat(new Big(plan.amountunit1).times(daykwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var morningeveningfee = parseFloat(
	new Big(plan.morningeveningunit).times(morningeveningkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(
	new Big(dayfee).plus(nightfee).plus(morningeveningfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee,
	"morningeveningkwh": morningeveningkwh,
	"morningeveningfee": morningeveningfee
    };
};

// 8.昼二段階型
Calc.prototype.calc[8] = function(plan,eu) {
    var nightwh = 0.0;
    for(var i=0; i<eu.daynumber; i++) {
	for(var j=0; j<24*2; j++) {
	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(plan.nightstarttime*2<=j && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		}
	    } else {
		if(plan.nightstarttime*2<=j || j<plan.nightendtime*2){ //夜中の24時をまたぐ場合
		    nightwh = nightwh + eu.daily[i].wh[j];
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = eu.amountkwh - nightkwh;

    // 料金計算
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var dayfee = 0;
    if(daykwh<=plan.amountunit1_2_kwh) {
	dayfee = new Big(daykwh).times(plan.amountunit1);
    } else if(daykwh>plan.amountunit1_2_kwh) {
	dayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(daykwh-plan.amountunit1_2_kwh).times(plan.amountunit2));
    }
    dayfee = parseFloat(dayfee.round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(new Big(dayfee).plus(nightfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee
    };
};

// 9.夏季ピーク昼三段階型
Calc.prototype.calc[9] = function(plan,eu) {
    // 夏季ピーク日の開始終了月日を設定
    var summerstart = plan.summerstartdate.split('/');
    var summerstartnum = Number(summerstart[0])*100+Number(summerstart[1]); // 夏季ピーク開始日をmmddの形式で数字に変換(例:7/1は701)
    var summerend = plan.summerenddate.split('/');
    var summerendnum = Number(summerend[0])*100+Number(summerend[1]); // 夏季ピーク終了日をmmddの形式で数字に変換(例:9/30は930)
    
    var nightwh = 0;
    var summerwh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	var daynum = eu.month*100+i+1; // 日付をmmddの形式で数字に変換
	for(var j=0; j<24*2; j++) {
	    // 夏季ピーク時間の消費電力量計算
	    if(summerstartnum<=daynum && daynum<=summerendnum) {
		if(j>=plan.summerstarttime*2 && j<plan.summerendtime*2){
		    summerwh = summerwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(j>=plan.nightstarttime*2 && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    } else {
		if(j>=plan.nightstarttime*2 || j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var summerkwh = parseInt(new Big(summerwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = eu.amountkwh - nightkwh - summerkwh;

    // 料金計算
    var dayfee = 0;
    if(daykwh<=plan.amountunit1_2_kwh) {
	dayfee = new Big(daykwh).times(plan.amountunit1);
    } else if(daykwh>plan.amountunit1_2_kwh && daykwh<=plan.amountunit2_3_kwh) {
	dayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(daykwh-plan.amountunit1_2_kwh).times(plan.amountunit2));
    } else if(daykwh>plan.amountunit2_3_kwh) {
	dayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(plan.amountunit2_3_kwh-plan.amountunit1_2_kwh).times(plan.amountunit2)).
	    plus(new Big(daykwh-plan.amountunit2_3_kwh).times(plan.amountunit3));
    }
    dayfee = parseFloat(dayfee.round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var summerfee = parseFloat(new Big(plan.summerunit).times(summerkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(new Big(dayfee).plus(nightfee).plus(summerfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee,
	"summerkwh": summerkwh,
	"summerfee": summerfee
    };
};

// 10.夏季ピーク平日朝夕昼夜型
Calc.prototype.calc[10] = function(plan,eu) {
    // 夏季ピーク日の開始終了月日を設定
    var summerstart = plan.summerstartdate.split('/');
    var summerstartnum = Number(summerstart[0])*100+Number(summerstart[1]); // 夏季ピーク開始日をmmddの形式で数字に変換(例:7/1は701)
    var summerend = plan.summerenddate.split('/');
    var summerendnum = Number(summerend[0])*100+Number(summerend[1]); // 夏季ピーク終了日をmmddの形式で数字に変換(例:9/30は930)
    
    var nightwh = 0;
    var daywh = 0;
    var summerdaywh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	var daynum = eu.month*100+i+1; // 日付をmmddの形式で数字に変換
	
	// 平日か否かのチェック(日曜日と祝日以外が平日)
	var holiday = false;
	for(var j=0; j<holidays[eu.year.toString()].length; j++) {
	    if(daynum == holidays[eu.year.toString()][j] || eu.daily[i].day == 0) {
		holiday = true;
		continue;
	    }
	}

	for(var j=0; j<24*2; j++) {
	    // 夏季ピーク時間の消費電力量計算
	    if(summerstartnum<=daynum && daynum<=summerendnum) {
		if(holiday == false && (j>=plan.summerstarttime*2 && j<plan.summerendtime*2)){
		    summerdaywh = summerdaywh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	    // 平日の昼間の消費電力量計算
	    if(holiday == false && (j>=plan.amountstarttime*2 && j<plan.amountendtime*2)){
		daywh = daywh + eu.daily[i].wh[j];
		continue;
	    }
	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(j>=plan.nightstarttime*2 && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    } else {
		if(j>=plan.nightstarttime*2 || j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = parseInt(new Big(daywh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var summerkwh = parseInt(new Big(summerdaywh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var morningeveningkwh = eu.amountkwh - nightkwh - daykwh - summerkwh;

    // 料金計算
    var dayfee = parseFloat(new Big(plan.amountunit1).times(daykwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var morningeveningfee = parseFloat(
	new Big(plan.morningeveningunit).times(morningeveningkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var summerfee = parseFloat(new Big(plan.summerunit).times(summerkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(
	new Big(dayfee).plus(nightfee).plus(morningeveningfee).plus(summerfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee,
	"morningeveningkwh": morningeveningkwh,
	"morningeveningfee": morningeveningfee,
	"summerkwh": summerkwh,
	"summerfee": summerfee
    };
};

// 11.平日朝夕昼夜型
Calc.prototype.calc[11] = function(plan,eu) {
    var nightwh = 0;
    var daywh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	var daynum = eu.month*100+i+1; // 日付をmmddの形式で数字に変換
	
	// 平日か否かのチェック(土日と祝日以外が平日)
	var holiday = false;
	for(var j=0; j<holidays[eu.year.toString()].length; j++) {
	    if(daynum == holidays[eu.year.toString()][j] || eu.daily[i].day == 0 || eu.daily[i].day == 6) {
		holiday = true;
		continue;
	    }
	}
	for(var j=0; j<24*2; j++) {
	    // 平日昼間の消費電力量計算
	    if(holiday == false && (j>=plan.amountstarttime*2 && j<plan.amountendtime*2)){
		daywh = daywh + eu.daily[i].wh[j];
		continue;
	    }
	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(j>=plan.nightstarttime*2 && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    } else {
		if(j>=plan.nightstarttime*2 || j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = parseInt(new Big(daywh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var morningeveningkwh = eu.amountkwh - nightkwh - daykwh;

    // 料金計算
    var dayfee = parseFloat(new Big(plan.amountunit1).times(daykwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var morningeveningfee = parseFloat(
	new Big(plan.morningeveningunit).times(morningeveningkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(
	new Big(dayfee).plus(nightfee).plus(morningeveningfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee,
	"morningeveningkwh": morningeveningkwh,
	"morningeveningfee": morningeveningfee
    };
};

// 12.夏季ピーク平日昼三段階型
Calc.prototype.calc[12] = function(plan,eu) {
    // 夏季ピーク日の開始終了月日を設定
    var summerstart = plan.summerstartdate.split('/');
    var summerstartnum = Number(summerstart[0])*100+Number(summerstart[1]); // 夏季ピーク開始日をmmddの形式で数字に変換(例:7/1は701)
    var summerend = plan.summerenddate.split('/');
    var summerendnum = Number(summerend[0])*100+Number(summerend[1]); // 夏季ピーク終了日をmmddの形式で数字に変換(例:9/30は930)
    
    var nightwh = 0;
    var summerwh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	var daynum = eu.month*100+i+1; // 日付をmmddの形式で数字に変換
	
	// 平日か否かのチェック(土日と祝日以外が平日)
	var holiday = false;
	for(var j=0; j<holidays[eu.year.toString()].length; j++) {
	    if(daynum == holidays[eu.year.toString()][j] || eu.daily[i].day == 0 || eu.daily[i].day == 6) {
		holiday = true;
		continue;
	    }
	}
	for(var j=0; j<24*2; j++) {
	    // 夏季平日のピーク時間の消費電力量計算
	    if(holiday == false && (summerstartnum<=daynum && daynum<=summerendnum)) {
		if(j>=plan.summerstarttime*2 && j<plan.summerendtime*2){
		    summerwh = summerwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(j>=plan.nightstarttime*2 && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    } else {
		if(j>=plan.nightstarttime*2 || j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var summerkwh = parseInt(new Big(summerwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = eu.amountkwh - nightkwh - summerkwh;

    // 料金計算
    var dayfee = 0;
    if(daykwh<=plan.amountunit1_2_kwh) {
	dayfee = new Big(daykwh).times(plan.amountunit1);
    } else if(daykwh>plan.amountunit1_2_kwh && daykwh<=plan.amountunit2_3_kwh) {
	dayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(daykwh-plan.amountunit1_2_kwh).times(plan.amountunit2));
    } else if(daykwh>plan.amountunit2_3_kwh) {
	dayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(plan.amountunit2_3_kwh-plan.amountunit1_2_kwh).times(plan.amountunit2)).
	    plus(new Big(daykwh-plan.amountunit2_3_kwh).times(plan.amountunit3));
    }
    dayfee = parseFloat(dayfee.round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var summerfee = parseFloat(
	new Big(plan.summerunit).times(summerkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(
	new Big(dayfee).plus(nightfee).plus(summerfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee,
	"summerkwh": summerkwh,
	"summerfee": summerfee
    };
};

// 13.従量電灯A三段階型
Calc.prototype.calc[13] = function(plan,eu) {
    // 料金計算
    var amountkwh = parseFloat(new Big(eu.amountkwh).minus(plan.minimumkwh));
    var amountfee = 0;
    if(amountkwh>0 && eu.amountkwh<=plan.amountunit1_2_kwh) {
	amountfee = new Big(amountkwh).times(plan.amountunit1);
    } else if(eu.amountkwh>plan.amountunit1_2_kwh && eu.amountkwh<=plan.amountunit2_3_kwh) {
	amountfee = new Big(plan.amountunit1_2_kwh-plan.minimumkwh).times(plan.amountunit1).
	    plus(new Big(eu.amountkwh-plan.amountunit1_2_kwh).times(plan.amountunit2));
    } else if(eu.amountkwh>plan.amountunit2_3_kwh) {
	amountfee = new Big(plan.amountunit1_2_kwh-plan.minimumkwh).times(plan.amountunit1).
	    plus(new Big(plan.amountunit2_3_kwh-plan.amountunit1_2_kwh).times(plan.amountunit2)).
	    plus(new Big(eu.amountkwh-plan.amountunit2_3_kwh).times(plan.amountunit3));
    }
    amountfee = parseFloat(amountfee.round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee
    };
};

// 14.朝夕昼三段階夜型
Calc.prototype.calc[14] = function(plan,eu) {
    var nightwh = 0;
    var daywh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	for(var j=0; j<24*2; j++) {
	    // 昼間の消費電力量計算
	    if(j>=plan.amountstarttime*2 && j<plan.amountendtime*2){
		daywh = daywh + eu.daily[i].wh[j];
		continue;
	    }
	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(j>=plan.nightstarttime*2 && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    } else {
		if(j>=plan.nightstarttime*2 || j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = parseInt(new Big(daywh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var morningeveningkwh = eu.amountkwh - nightkwh - daykwh;

    // 料金計算
    var dayfee = 0;
    if(daykwh<=plan.amountunit1_2_kwh) {
	dayfee = new Big(daykwh).times(plan.amountunit1);
    } else if(daykwh>plan.amountunit1_2_kwh && daykwh<=plan.amountunit2_3_kwh) {
	dayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(daykwh-plan.amountunit1_2_kwh).times(plan.amountunit2));
    } else if(daykwh>plan.amountunit2_3_kwh) {
	dayfee = new Big(plan.amountunit1_2_kwh).times(plan.amountunit1).
	    plus(new Big(plan.amountunit2_3_kwh-plan.amountunit1_2_kwh).times(plan.amountunit2)).
	    plus(new Big(daykwh-plan.amountunit2_3_kwh).times(plan.amountunit3));
    }
    dayfee = parseFloat(dayfee.round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var morningeveningfee = parseFloat(
	new Big(plan.morningeveningunit).times(morningeveningkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(
	new Big(dayfee).plus(nightfee).plus(morningeveningfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee,
	"morningeveningkwh": morningeveningkwh,
	"morningeveningfee": morningeveningfee
    };
};

// 15.夏季ピーク朝夕昼夜休日昼型
Calc.prototype.calc[15] = function(plan,eu) {
    // 夏季ピーク日の開始終了月日を設定
    var summerstart = plan.summerstartdate.split('/');
    var summerstartnum = Number(summerstart[0])*100+Number(summerstart[1]); // 夏季ピーク開始日をmmddの形式で数字に変換(例:7/1は701)
    var summerend = plan.summerenddate.split('/');
    var summerendnum = Number(summerend[0])*100+Number(summerend[1]); // 夏季ピーク終了日をmmddの形式で数字に変換(例:9/30は930)
    
    var nightwh = 0;
    var daywh = 0;
    var weekenddaywh = 0;
    var summerdaywh = 0;
    for(var i=0; i<eu.daynumber; i++) {
	var daynum = eu.month*100+i+1; // 日付をmmddの形式で数字に変換
	
	// 平日か否かのチェック(日曜日と祝日以外が平日)
	var holiday = false;
	for(var j=0; j<holidays[eu.year.toString()].length; j++) {
	    if(daynum == holidays[eu.year.toString()][j] || eu.daily[i].day == 0) {
		holiday = true;
		continue;
	    }
	}
	for(var j=0; j<24*2; j++) {
	    // 夏季ピーク時間の消費電力量計算
	    if(summerstartnum<=daynum && daynum<=summerendnum) {
		if(holiday == false && (j>=plan.summerstarttime*2 && j<plan.summerendtime*2)){
		    summerdaywh = summerdaywh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	    // 平日の昼間の消費電力量計算
	    if(holiday == false && (j>=plan.amountstarttime*2 && j<plan.amountendtime*2)){
		daywh = daywh + eu.daily[i].wh[j];
		continue;
	    }
	    // 休日の昼間（夜以外のこと）の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(j<plan.nightstarttime*2 || j>=plan.nightendtime*2){
		    weekenddaywh = weekenddaywh + eu.daily[i].wh[j];
		    continue;
		}
	    } else {
		if(j<plan.nightstarttime*2 && j>=plan.nightendtime*2){
		    weekenddaywh = weekenddaywh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	    // 夜間の消費電力量計算
	    if(plan.nightstarttime < plan.nightendtime) {
		if(j>=plan.nightstarttime*2 && j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    } else {
		if(j>=plan.nightstarttime*2 || j<plan.nightendtime*2){
		    nightwh = nightwh + eu.daily[i].wh[j];
		    continue;
		}
	    }
	}
    }
    var nightkwh = parseInt(new Big(nightwh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var daykwh = parseInt(new Big(daywh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var weekenddaykwh = parseInt(new Big(weekenddaywh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var summerkwh = parseInt(new Big(summerdaywh).div(1000).round(0,1).toPrecision()); // 小数点以下四捨五入で整数化
    var morningeveningkwh = eu.amountkwh - nightkwh - daykwh - weekenddaykwh - summerkwh;

    // 料金計算
    var dayfee = parseFloat(new Big(plan.amountunit1).times(daykwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var nightfee = parseFloat(new Big(plan.nightunit).times(nightkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var weekenddayfee = parseFloat(new Big(plan.weekendunit).times(weekenddaykwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var morningeveningfee = parseFloat(
	new Big(plan.morningeveningunit).times(morningeveningkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var summerfee = parseFloat(new Big(plan.summerunit).times(summerkwh).round(2,0).toPrecision()); // 小数点3桁以下切り捨て
    var amountfee = parseFloat(
	new Big(dayfee).plus(nightfee).plus(weekenddayfee).plus(morningeveningfee).plus(summerfee).round(2,0).toPrecision()); // 小数点3桁以下切り捨て

    // 料金明細オブジェクトを返す
    return {
	"amountkwh": eu.amountkwh,
	"amountfee": amountfee,
	"daykwh": daykwh,
	"dayfee": dayfee,
	"nightkwh": nightkwh,
	"nightfee": nightfee,
	"weekenddaykwh": weekenddaykwh,
	"weekenddayfee": weekenddayfee,
	"morningeveningkwh": morningeveningkwh,
	"morningeveningfee": morningeveningfee,
	"summerkwh": summerkwh,
	"summerfee": summerfee
    };
};

module.exports = new Calc();
