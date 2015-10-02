var Big = require('big.js'); // 誤差のない小数点計算のためのライブラリ

// 基本料金計算
var Calc = function () {
};
Calc.prototype.calc = [];

// 1.単価型
Calc.prototype.calc[1] = function(ampere,plan,eu) {
    var basic = new Big(ampere).times(plan.basicunit).div(10);
    return new Big(basic).round(2,0).toPrecision(); // 小数点3桁以下切り捨て
};

// 2.三段階型
Calc.prototype.calc[2] = function(ampere,plan,eu) {
    var basic = 0;
    if(ampere < plan.basic1_2_kva*10) {
	basic = plan.basic1;
    } else if (ampere >= plan.basic1_2_kva*10 && ampere < plan.basic2_3_kva*10) {
	basic = plan.basic2;
    } else {
	basic = new Big(plan.basic3unit).times(ampere-plan.basic2_3_kva*10).div(10).plus(plan.basic2);
    }
    return new Big(basic).round(2,0).toPrecision(); // 小数点3桁以下切り捨て
};

// 3.二段階型
Calc.prototype.calc[3] = function(ampere,plan,eu) {
    var basic = 0;
    if(ampere < plan.basic1_2_kva*10) {
	basic = plan.basic1;
    } else {
	basic = new Big(plan.basic2).times(ampere-plan.basic1_2_kva*10).div(10).plus(plan.basic1);
    }
    return new Big(basic).round(2,0).toPrecision(); // 小数点3桁以下切り捨て
};

// 4.最低料金型
Calc.prototype.calc[4] = function(ampere,plan,eu) {
    var basic = plan.minimumfee;
    return new Big(basic).round(2,0).toPrecision(); // 小数点3桁以下切り捨て
};

// 5.一段階型
Calc.prototype.calc[5] = function(ampere,plan,eu) {
    var basic = plan.basic1;
    return new Big(basic).round(2,0).toPrecision(); // 小数点3桁以下切り捨て
};

module.exports = new Calc();
