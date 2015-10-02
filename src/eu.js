// 電気使用量をセットするオブジェクト
// パラメータはyear,month,daynumber,daily,amountkwh
var EU = function(year, month) {
    var today = new Date();
    today.setMonth(today.getMonth()-1); // 1ヶ月前の年月を取得
    
    this.year = (year!=undefined)?year:today.getFullYear(); // 年
    this.month = (month!=undefined)?month:today.getMonth()+1; // 月

    var lastDate = new Date(this.year, this.month, 0);
    this.daynumber = lastDate.getDate(); // 指定月の全日数
    this.daily = []; // 日毎の情報(曜日と電力量(wh))
    
    for(i=0; i<this.daynumber; i++) {
	var dayOfWeek = new Date(this.year, this.month-1, i+1).getDay();
	var wh = [];
	for(j=0; j<24*2; j++) { // 30分値をwhで保存
	    wh[j] = 0;
	}
	this.daily[i] = {
	    day: dayOfWeek,
	    totalwh: 0,
	    wh: wh
	};
    }
    this.amountkwh = 0; // 指定月の電力使用量(kwh)
};

module.exports = EU;
