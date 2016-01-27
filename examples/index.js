var companies = {
    "tepco": "東京電力",
    "hepco": "北海道電力",
    "tohoku": "東北電力",
    "rikuden": "北陸電力",
    "chuden": "中部電力",
    "kepco": "関西電力",
    "energia": "中国電力",
    "yonden": "四国電力",
    "kyuden": "九州電力",
    "okiden": "沖縄電力"
};

var tableheader = [
    { title: "プラン名" },
    { title: "削減額" },
    { title: "月額料金" },
    { title: "基本料金" },
    { title: "電力量料金" },
    { title: "燃料費調整費" },
    { title: "再エネ還付額" },
    { title: "総量(kwh)" }
/**    { title: "昼料金" },
    { title: "昼間量(kWh)" },
    { title: "夜料金" },
    { title: "夜間量(kWh)" },
    { title: "朝夕料金" },
    { title: "朝夕量(kWh)" },
    { title: "夏季料金" },
    { title: "夏季量(kWh)" },
    { title: "月金料金" },
    { title: "月金量(kWh)" },
    { title: "土日料金" },
    { title: "土日量(kWh)" },
    { title: "休日昼料金" },
    { title: "休日昼間量(kWh)" }**/
];

var ebc = EBC.init("tepco");
var cal = function(company,monthlyfee,ampere,daystarttime,dayendtime,daytimerate) {
    ebc = EBC.init(company);
    var eu = new EU();
    ebc.setEU(eu);
    ebc.setCurrentPlan(1,monthlyfee,ampere,daystarttime,dayendtime,daytimerate);
    var savedPlans = ebc.getSavedPlans(false); // プランをすべて返す。
    //var savedPlans = ebc.getSavedPlans();    // 削減プランのみ返す。

    var ebtable = [];
    for(var i=0; i<savedPlans.length; i++) {
	// 料金の行
	var ebrow = [
	    savedPlans[i].planname,
	    savedPlans[i].savedfee,
	    savedPlans[i].monthlyfee,
	    savedPlans[i].basicfee,
	    savedPlans[i].amountfee,
	    savedPlans[i].fuelregcost,
	    savedPlans[i].greenpower,
	    savedPlans[i].amountkwh
/**	    savedPlans[i].amountinfo.dayfee==undefined?0:savedPlans[i].amountinfo.dayfee,
	    savedPlans[i].amountinfo.daykwh==undefined?0:savedPlans[i].amountinfo.daykwh,
	    savedPlans[i].amountinfo.nightfee==undefined?0:savedPlans[i].amountinfo.nightfee,
	    savedPlans[i].amountinfo.nightkwh==undefined?0:savedPlans[i].amountinfo.nightkwh,
	    savedPlans[i].amountinfo.morningeveningfee==undefined?0:savedPlans[i].amountinfo.morningeveningfee,
	    savedPlans[i].amountinfo.morningeveningkwh==undefined?0:savedPlans[i].amountinfo.morningeveningkwh,
	    savedPlans[i].amountinfo.summerfee==undefined?0:savedPlans[i].amountinfo.summerfee,
	    savedPlans[i].amountinfo.summerkwh==undefined?0:savedPlans[i].amountinfo.summerkwh,
	    savedPlans[i].amountinfo.weekdayfee==undefined?0:savedPlans[i].amountinfo.weekdayfee,
	    savedPlans[i].amountinfo.weekdaykwh==undefined?0:savedPlans[i].amountinfo.weekdaykwh,
	    savedPlans[i].amountinfo.weekendfee==undefined?0:savedPlans[i].amountinfo.weekendfee,
	    savedPlans[i].amountinfo.weekendkwh==undefined?0:savedPlans[i].amountinfo.weekendkwh,
	    savedPlans[i].amountinfo.weekenddayfee==undefined?0:savedPlans[i].amountinfo.weekenddayfee,
	    savedPlans[i].amountinfo.weekenddaykwh==undefined?0:savedPlans[i].amountinfo.weekenddaykwh**/
	]
	ebtable.push(ebrow);
    }
    
    console.log(ebc);
    console.log(eu);
    console.log(savedPlans);

    return ebtable;
};

