(function() {
    'use strict';

    // 料金計算
    var EBC = require('./ebc_funcs.js');
    if (typeof module === 'object' && typeof module.exports === 'object') {
	module.exports = EBC;
    } else if (typeof define === 'function' && define.amd) {
	define(EBC);
    }
    if (typeof window !== 'undefined') {
	var oldEBC = window.EBC;
	EBC.noConflict = function () {
	    window.EBC = oldEBC;
	    return this;
	};
	window.EBC = EBC;
    }

    // 1ヶ月の電気使用量
    var EU = require('./eu.js');
    if (typeof module === 'object' && typeof module.exports === 'object') {
	module.exports = EU;
    } else if (typeof define === 'function' && define.amd) {
	define(EU);
    }
    if (typeof window !== 'undefined') {
	var oldEU = window.EU;
	EU.noConflict = function () {
	    window.EU = oldEU;
	    return this;
	};
	window.EU = EU;
    }
})();
