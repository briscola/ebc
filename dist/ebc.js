(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
    "tepco": 54,
    "hepco": 0,
    "tohoku": 0,
    "rikuden": 54,
    "chuden": 54,
    "kepco": 54,
    "energia": 54,
    "yonden": 54,
    "kyuden": 54,
    "okiden": 0
}

},{}],2:[function(require,module,exports){
module.exports={
    "tepco": {
	"201501": 2.33,
	"201502": 2.55,
	"201503": 2.83,
	"201504": 2.62,
	"201505": 1.85,
	"201506": 0.89,
	"201507": -0.16,
	"201508": -0.89,
	"201509": -1.62,
	"201510": -1.73
    },
    "hepco": {
	"201501": 0.66,
	"201502": 0.46,
	"201503": 0.14,
	"201504": -0.46,
	"201505": -1.24,
	"201506": -1.81,
	"201507": -1.99,
	"201508": -1.78,
	"201509": -1.56,
	"201510": -1.35
    },
    "tohoku": {
	"201501": 1.58,
	"201502": 1.74,
	"201503": 1.93,
	"201504": 1.84,
	"201505": 1.39,
	"201506": 0.80,
	"201507": 0.20,
	"201508": -0.24,
	"201509": -0.67,
	"201510": -0.78
    },
    "rikuden": {
	"201501": 0.87,
	"201502": 0.81,
	"201503": 0.71,
	"201504": 0.47,
	"201505": 0.16,
	"201506": -0.09,
	"201507": -0.17,
	"201508": -0.08,
	"201509": -0.02,
	"201510": 0.05
    },
    "chuden": {
	"201501": 0.34,
	"201502": 0.69,
	"201503": 1.17,
	"201504": 1.24,
	"201505": 0.76,
	"201506": -0.05,
	"201507": -1.10,
	"201508": -1.99,
	"201509": -2.89,
	"201510": -3.14
    },
    "kepco": {
	"201501": 1.53,
	"201502": 1.62,
	"201503": 1.71,
	"201504": 1.49,
	"201505": 0.89,
	"201506": 0.08,
	"201507": -0.61,
	"201508": -0.97,
	"201509": -1.31,
	"201510": -1.29
    },
    "energia": {
	"201501": 1.40,
	"201502": 1.45,
	"201503": 1.49,
	"201504": 1.30,
	"201505": 0.84,
	"201506": 0.36,
	"201507": -0.02,
	"201508": -0.19,
	"201509": -0.39,
	"201510": -0.41
    },
    "yonden": {
	"201501": 0.73,
	"201502": 0.69,
	"201503": 0.63,
	"201504": 0.38,
	"201505": -0.02,
	"201506": -0.35,
	"201507": -0.54,
	"201508": -0.52,
	"201509": -0.54,
	"201510": -0.50
    },
    "kyuden": {
	"201501": 1.09,
	"201502": 1.20,
	"201503": 1.30,
	"201504": 1.20,
	"201505": 0.77,
	"201506": 0.30,
	"201507": -0.19,
	"201508": -0.49,
	"201509": -0.83,
	"201510": -0.88
    },
    "okiden": {
	"201501": 0.90,
	"201502": 0.78,
	"201503": 0.56,
	"201504": 0.06,
	"201505": -0.59,
	"201506": -1.09,
	"201507": -1.24,
	"201508": -1.05,
	"201509": -0.93,
	"201510": -0.81
    }
}

},{}],3:[function(require,module,exports){
module.exports={
    "201501": 0.75,
    "201502": 0.75,
    "201503": 0.75,
    "201504": 0.75,
    "201505": 1.58,
    "201506": 1.58,
    "201507": 1.58,
    "201508": 1.58,
    "201509": 1.58,
    "201510": 1.58,
    "201511": 1.58,
    "201512": 1.58,
    "201601": 1.58,
    "201602": 1.58,
    "201603": 1.58,
    "201604": 1.58
}

},{}],4:[function(require,module,exports){
module.exports={
    "2015": [
	101,
	102,
	103,
	112,
	211,
	321,
	429,
	430,
	501,
	502,
	503,
	504,
	505,
	720,
	921,
	923,
	1012,
	1103,
	1123,
	1223,
	1230,
	1231
    ]
}

},{}],5:[function(require,module,exports){
module.exports={
  "tepco": {
    "companyname": "東京電力",
    "plans": [
      {
        "planid": "1",
        "planname": "従量電灯BC",
        "plandisc": "昼間の在宅が多い家庭や時間帯や曜日を気にせずに電気を使いたい方におススメのスタンダードなメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.tepco.co.jp/info/custom/center",
        "startdate": "2014/3/1",
        "basicid": 1,
        "basicname": "単価型",
        "basicunit": 280.8,
        "minimumfee": 230.86,
        "amountid": 1,
        "amountname": "従量電灯三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 19.43,
        "amountunit2": 25.91,
        "amountunit3": 29.93
      },
      {
        "planid": "2",
        "planname": "朝得プラン",
        "plandisc": "深夜1時から朝9時までの時間帯がおトクになる料金設定です。朝からアクティブに過ごす方におススメのメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.tepco.co.jp/info/custom/center",
        "startdate": "2014/3/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1296.0,
        "basic2": 2160.0,
        "basic3unit": 280.8,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 23.93,
        "amountunit2": 31.9,
        "amountunit3": 36.85,
        "nightunit": 12.19,
        "nightstarttime": 1.0,
        "nightendtime": 9.0
      },
      {
        "planid": "3",
        "planname": "夜得プラン",
        "plandisc": "夜9時から朝5時までの時間帯がおトクになる料金設定です。夜は、家でゆっくりと趣味の時間を過ごしたい、夜型生活の方におススメのメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.tepco.co.jp/info/custom/center",
        "startdate": "2014/3/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1296.0,
        "basic2": 2160.0,
        "basic3unit": 280.8,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 24.03,
        "amountunit2": 32.03,
        "amountunit3": 37.0,
        "nightunit": 12.48,
        "nightstarttime": 21.0,
        "nightendtime": 5.0
      },
      {
        "planid": "4",
        "planname": "半日お得プラン",
        "plandisc": "夜9時から朝9時までの時間帯がおトクになる料金設定です。朝に家事をかたづけて、夜は家でくつろいで過ごす方などにおススメのメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.tepco.co.jp/info/custom/center",
        "startdate": "2014/3/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1296.0,
        "basic2": 2160.0,
        "basic3unit": 280.8,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 70,
        "amountunit2_3_kwh": 170,
        "amountunit1": 28.38,
        "amountunit2": 37.84,
        "amountunit3": 43.71,
        "nightunit": 12.59,
        "nightstarttime": 21.0,
        "nightendtime": 9.0
      },
      {
        "planid": "5",
        "planname": "土日お得プラン",
        "plandisc": "土日が一日中おトクになる料金設定です。土日に在宅していることが多い方、土日にまとめて家事をされる方などにおススメのメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.tepco.co.jp/info/custom/center",
        "startdate": "2014/3/1",
        "basicid": 1,
        "basicname": "単価型",
        "basicunit": 280.8,
        "minimumfee": 230.86,
        "amountid": 3,
        "amountname": "平日三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 20.97,
        "amountunit2": 27.97,
        "amountunit3": 32.3,
        "weekendunit": 20.69
      },
      {
        "planid": "6",
        "planname": "電化上手",
        "plandisc": "給湯もキッチンも電気のお宅、オール電化住宅にお住まいの方などにおススメのメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.tepco.co.jp/info/custom/center",
        "startdate": "2014/3/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1296.0,
        "basic2": 2160.0,
        "basic3unit": 280.8,
        "minimumfee": 323.74,
        "amountid": 4,
        "amountname": "夏季ピーク朝夕昼夜型",
        "amountunit1": 31.64,
        "amountstarttime": 10.0,
        "amountendtime": 17.0,
        "nightunit": 12.16,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "morningeveningunit": 25.92,
        "summerunit": 38.63,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 10.0,
        "summerendtime": 17.0
      },
      {
        "planid": "7",
        "planname": "おトクなナイト8",
        "plandisc": "お得な夜間時間を８時間にしたプランです。エコキュートや電気温水器を設置しているなど、夜間のご使用量が多い方におススメのメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.tepco.co.jp/info/custom/center",
        "startdate": "2014/3/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1296.0,
        "basic2": 2160.0,
        "basic3unit": 280.8,
        "minimumfee": 323.74,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 23.81,
        "amountunit2": 31.75,
        "amountunit3": 36.68,
        "nightunit": 12.16,
        "nightstarttime": 23.0,
        "nightendtime": 7.0
      },
      {
        "planid": "8",
        "planname": "おトクなナイト10",
        "plandisc": "お得な夜間時間を１０時間にしたプランです。エコキュートや電気温水器を設置しているなど、夜間のご使用量が多い方におススメのメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.tepco.co.jp/info/custom/center",
        "startdate": "2014/3/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1296.0,
        "basic2": 2160.0,
        "basic3unit": 280.8,
        "minimumfee": 323.74,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 80,
        "amountunit2_3_kwh": 200,
        "amountunit1": 25.92,
        "amountunit2": 34.56,
        "amountunit3": 39.92,
        "nightunit": 12.41,
        "nightstarttime": 22.0,
        "nightendtime": 8.0
      },
      {
        "planid": "9",
        "planname": "ピークシフトプラン",
        "plandisc": "電気の使用量が多く、夏のピーク時間（午後1時から4時）の電気のご使用を他の時間帯にシフトできる方におススメのメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.tepco.co.jp/info/custom/center",
        "startdate": "2014/3/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1296.0,
        "basic2": 2160.0,
        "basic3unit": 280.8,
        "amountid": 5,
        "amountname": "夏季ピーク型",
        "amountunit1": 28.99,
        "nightunit": 12.16,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "summerunit": 54.68,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 13.0,
        "summerendtime": 16.0
      }
    ]
  },
  "hepco": {
    "companyname": "北海道電力",
    "plans": [
      {
        "planid": "1",
        "planname": "従量電灯BC",
        "plandisc": "昼間の在宅が多い家庭や時間帯や曜日を気にせずに電気を使いたい方におススメのスタンダードなメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.hepco.co.jp/cgi-bin/branch/adrs_list.cgi",
        "startdate": "2014/11/1",
        "basicid": 1,
        "basicname": "単価型",
        "basicunit": 334.8,
        "minimumfee": 246.24,
        "amountid": 1,
        "amountname": "従量電灯三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 280,
        "amountunit1": 23.54,
        "amountunit2": 29.72,
        "amountunit3": 33.37
      },
      {
        "planid": "2",
        "planname": "時間帯別電灯（ドリーム8）",
        "plandisc": "1日を昼間時間と夜間時間に分け、夜間の料金単価を昼間の料金単価より割安に設定した料金メニューです。夜間の割安な料金単価が適用となる時間帯に電気をご使用いただけるお客さまにおすすめです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.hepco.co.jp/cgi-bin/branch/adrs_list.cgi",
        "startdate": "2014/11/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1404.0,
        "basic2": 2268.0,
        "basic3unit": 334.8,
        "minimumfee": 334.8,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 210,
        "amountunit1": 28.08,
        "amountunit2": 35.66,
        "amountunit3": 40.1,
        "nightunit": 14.13,
        "nightstarttime": 23.0,
        "nightendtime": 7.0
      },
      {
        "planid": "3",
        "planname": "ピーク抑制型時間帯別電灯（ドリーム8エコ）",
        "plandisc": "時間帯別電灯をベースに冬期間の夕方にピーク時間帯を設定したメニューです。電気の使用を昼間から夜間へ移行し、冬期ピーク時間帯の電気使用を少なくするほど、電気料金の負担を軽減できます。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.hepco.co.jp/cgi-bin/branch/adrs_list.cgi",
        "startdate": "2014/11/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1404.0,
        "basic2": 2268.0,
        "basic3unit": 334.8,
        "minimumfee": 334.8,
        "amountid": 6,
        "amountname": "冬季ピーク型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 210,
        "amountunit1": 28.08,
        "amountunit2": 35.66,
        "amountunit3": 40.1,
        "nightunit": 14.13,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "winterstartdate": "11/1",
        "winterenddate": "3/31",
        "winterunit1": 25.07,
        "winterunit1_2_kwh": 90,
        "winterunit2": 31.71,
        "winterunit2_3_kwh": 210,
        "winterunit3": 35.63,
        "winterpeakunit": 60.02,
        "winterpeakstarttime": 16.0,
        "winterpeakendtime": 18.0
      },
      {
        "planid": "4",
        "planname": "3時間帯別電灯（eタイム3）",
        "plandisc": "1日を3つの時間帯に分けて料金設定したメニューです。電気の使用を割安な時間帯（夜間時間・朝晩時間）に移行するほど、電気料金の負担を軽減できます。ヒートポンプ暖房システムを使っている方に最適なメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.hepco.co.jp/cgi-bin/branch/adrs_list.cgi",
        "startdate": "2014/11/1",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 3175.2,
        "basic2": 464.4,
        "minimumfee": 334.8,
        "amountid": 7,
        "amountname": "朝夕昼夜型",
        "amountunit1": 39.94,
        "amountstarttime": 13.0,
        "amountendtime": 18.0,
        "nightunit": 14.37,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "morningeveningunit": 30.35
      }
    ]
  },
  "tohoku": {
    "companyname": "東北電力",
    "plans": [
      {
        "planid": "1",
        "planname": "従量電灯BC",
        "plandisc": "昼間の在宅が多い家庭や時間帯や曜日を気にせずに電気を使いたい方におススメのスタンダードなメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "https://www.tohoku-epco.co.jp/callcenter/",
        "startdate": "2015/6/1",
        "basicid": 1,
        "basicname": "単価型",
        "basicunit": 324.0,
        "minimumfee": 257.04,
        "amountid": 1,
        "amountname": "従量電灯三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 18.24,
        "amountunit2": 24.87,
        "amountunit3": 28.75
      },
      {
        "planid": "2",
        "planname": "時間帯別電灯A（やりくりナイト8）",
        "plandisc": "夜間時間に電気のご使用量が多い方向けのメニューです。電気機器のタイマー機能などを活用し、昼間時間から夜間時間に電気の利用時間を移行することで、電気料金の節約が可能です。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "https://www.tohoku-epco.co.jp/callcenter/",
        "startdate": "2015/6/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1404.0,
        "basic2": 1944.0,
        "basic3unit": 324.0,
        "minimumfee": 330.48,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 21.69,
        "amountunit2": 29.58,
        "amountunit3": 34.19,
        "nightunit": 10.92,
        "nightstarttime": 23.0,
        "nightendtime": 7.0
      },
      {
        "planid": "3",
        "planname": "時間帯別電灯B（やりくりナイト10）",
        "plandisc": "時間帯別電灯Aの夜間時間(8時間)を前後1時間ずつ拡大し、夜間時間を10時間としたメニューです。時間帯別電灯Aと同様に昼間時間から夜間時間に電気の利用時間を移行することで、電気料金の節約が可能です。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "https://www.tohoku-epco.co.jp/callcenter/",
        "startdate": "2015/6/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1404.0,
        "basic2": 1944.0,
        "basic3unit": 324.0,
        "minimumfee": 330.48,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 80,
        "amountunit2_3_kwh": 200,
        "amountunit1": 23.57,
        "amountunit2": 32.15,
        "amountunit3": 37.16,
        "nightunit": 11.22,
        "nightstarttime": 22.0,
        "nightendtime": 8.0
      },
      {
        "planid": "4",
        "planname": "時間帯別電灯S（やりくりナイトS）",
        "plandisc": "昼間時間に電気使用量が比較的少ない方向けのメニューです。基本使用料金で昼間時間の200kWhまで使用できます。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "https://www.tohoku-epco.co.jp/callcenter/",
        "startdate": "2015/6/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 6264.0,
        "basic2": 6804.0,
        "basic3unit": 324.0,
        "amountid": 8,
        "amountname": "昼二段階型",
        "amountunit1_2_kwh": 200,
        "amountunit1": 0.0,
        "amountunit2": 39.29,
        "nightunit": 11.22,
        "nightstarttime": 22.0,
        "nightendtime": 8.0
      },
      {
        "planid": "5",
        "planname": "ピークシフト季節別時間帯別電灯",
        "plandisc": "夏季の電力需要のピーク時(毎日午後1時〜午後4時)に対応する「ピーク時間」と、それ以外の「昼間時間」「夜間時間」ごとに料金単価を設定しております。「ピーク時間」の電気の使用量を減らすことや「昼間時間」から「夜間時間」、または「ピーク時間」から「昼間時間」および「夜間時間」へ電気の使用量を移行することで、電気料金を節約できる料金メニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "https://www.tohoku-epco.co.jp/callcenter/",
        "startdate": "2015/6/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1404.0,
        "basic2": 1944.0,
        "basic3unit": 324.0,
        "amountid": 9,
        "amountname": "夏季ピーク昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 19.73,
        "amountunit2": 26.91,
        "amountunit3": 36.71,
        "nightunit": 10.92,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "summerunit": 53.83,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 13.0,
        "summerendtime": 16.0
      }
    ]
  },
  "rikuden": {
    "companyname": "北陸電力",
    "plans": [
      {
        "planid": "1",
        "planname": "従量電灯BC",
        "plandisc": "昼間の在宅が多い家庭や時間帯や曜日を気にせずに電気を使いたい方におススメのスタンダードなメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.rikuden.co.jp/tetsuzuki/index.html",
        "startdate": "2014/6/1",
        "basicid": 1,
        "basicname": "単価型",
        "basicunit": 237.6,
        "minimumfee": 177.76,
        "amountid": 1,
        "amountname": "従量電灯三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 17.48,
        "amountunit2": 21.29,
        "amountunit3": 22.98
      },
      {
        "planid": "2",
        "planname": "季節別時間帯別電灯I（エルフナイト１０）",
        "plandisc": "電気料金が3分の1になる夜間の電力をうまく使った電化住宅にぴったりのメニューです。 電気使用量が多い家庭向きのメニューで、1kVA以上の夜間蓄熱式機器を利用していることが加入条件です。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.rikuden.co.jp/tetsuzuki/index.html",
        "startdate": "2014/6/1",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 3024.0,
        "basic2": 302.4,
        "amountid": 5,
        "amountname": "夏季ピーク型",
        "amountunit1": 21.78,
        "nightunit": 7.73,
        "nightstarttime": 22.0,
        "nightendtime": 8.0,
        "summerunit": 23.91,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 8.0,
        "summerendtime": 22.0
      },
      {
        "planid": "3",
        "planname": "季節別時間帯別電灯II（エルフナイト１０プラス）",
        "plandisc": "電気料金が3分の1になる夜間の電力をうまく使った電化住宅にぴったりのメニューです。昼間の電気使用量が比較的少ない家庭向きのメニューで、1kVA以上の夜間蓄熱式機器を利用していることが加入条件です。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.rikuden.co.jp/tetsuzuki/index.html",
        "startdate": "2014/6/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 1620.0,
        "basic3unit": 237.6,
        "amountid": 10,
        "amountname": "夏季ピーク平日朝夕昼夜型",
        "amountunit1": 30.28,
        "amountstarttime": 10.0,
        "amountendtime": 17.0,
        "nightunit": 7.73,
        "nightstarttime": 22.0,
        "nightendtime": 8.0,
        "morningeveningunit": 21.11,
        "summerunit": 33.26,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 10.0,
        "summerendtime": 17.0
      },
      {
        "planid": "4",
        "planname": "時間帯別電灯（エルフナイト８）",
        "plandisc": "電気料金が3分の1になる夜間の電力をうまく使った電化住宅にぴったりのメニューです。夜間の電気使用量が多い家庭向きです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.rikuden.co.jp/tetsuzuki/index.html",
        "startdate": "2014/6/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 1620.0,
        "basic3unit": 237.6,
        "minimumfee": 270.64,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 21.42,
        "amountunit2": 26.55,
        "amountunit3": 28.68,
        "nightunit": 7.6,
        "nightstarttime": 23.0,
        "nightendtime": 7.0
      }
    ]
  },
  "chuden": {
    "companyname": "中部電力",
    "plans": [
      {
        "planid": "1",
        "planname": "従量電灯BC",
        "plandisc": "昼間の在宅が多い家庭や時間帯や曜日を気にせずに電気を使いたい方におススメのスタンダードなメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.chuden.co.jp/home/tetsuduki/contact/index.html",
        "startdate": "2014/5/1",
        "basicid": 1,
        "basicname": "単価型",
        "basicunit": 280.8,
        "minimumfee": 253.8,
        "amountid": 1,
        "amountname": "従量電灯三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 20.68,
        "amountunit2": 25.08,
        "amountunit3": 27.97
      },
      {
        "planid": "2",
        "planname": "Eライフプラン（3時間帯別電灯）",
        "plandisc": "お得な夜間時間だけでなく、朝と夕方にもお得な時間帯を設けたメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.chuden.co.jp/home/tetsuduki/contact/index.html",
        "startdate": "2014/5/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1512.0,
        "basic2": 2160.0,
        "basic3unit": 280.8,
        "minimumfee": 348.84,
        "amountid": 11,
        "amountname": "平日朝夕昼夜型",
        "amountunit1": 35.61,
        "amountstarttime": 9.0,
        "amountendtime": 17.0,
        "nightunit": 13.45,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "morningeveningunit": 25.43
      },
      {
        "planid": "3",
        "planname": "タイムプラン（時間帯別電灯）",
        "plandisc": "夜間時間に電気のご使用量が多い方向けのメニューです。昼間時間から夜間時間に電気の利用時間を移行することで、電気料金の節約が可能です。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.chuden.co.jp/home/tetsuduki/contact/index.html",
        "startdate": "2014/5/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1296.0,
        "basic2": 1944.0,
        "basic3unit": 280.8,
        "minimumfee": 348.84,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 24.16,
        "amountunit2": 29.32,
        "amountunit3": 32.4,
        "nightunit": 13.45,
        "nightstarttime": 23.0,
        "nightendtime": 7.0
      },
      {
        "planid": "4",
        "planname": "ピークシフト電灯",
        "plandisc": "1年を夏季とその他季に分け、さらに夏季の平日の1日をピークタイム、デイタイム、ナイトタイムの3つの時間帯に分けて、ピークタイム以外の時間帯の料金を割安に設定したメニューです。ピークタイムの電気利用を他の時間帯にシフトすることで電気料金を安く抑えることができます。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.chuden.co.jp/home/tetsuduki/contact/index.html",
        "startdate": "2014/5/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1296.0,
        "basic2": 1944.0,
        "basic3unit": 280.8,
        "minimumfee": 348.84,
        "amountid": 12,
        "amountname": "夏季ピーク平日昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 23.67,
        "amountunit2": 28.73,
        "amountunit3": 31.74,
        "nightunit": 13.45,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "summerunit": 54.46,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 13.0,
        "summerendtime": 16.0
      }
    ]
  },
  "kepco": {
    "companyname": "関西電力",
    "plans": [
      {
        "planid": "1",
        "planname": "従量電灯A",
        "plandisc": "家庭等で最も多く利用されているメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.kepco.co.jp/corporate/info/community/",
        "startdate": "2015/6/1",
        "enddate": "2015/9/30",
        "basicid": 4,
        "basicname": "最低料金型",
        "minimumfee": 360.12,
        "minimumkwh": 15,
        "amountid": 13,
        "amountname": "従量電灯A三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 21.92,
        "amountunit2": 28.35,
        "amountunit3": 32.41
      },
      {
        "planid": "2",
        "planname": "従量電灯B",
        "plandisc": "商店、事務所、飲食店、家庭等で電灯、小型機器を多く使っている方におすすめなメニューです。契約容量が6kVA以上の方が対象です。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.kepco.co.jp/corporate/info/community/",
        "startdate": "2015/6/1",
        "enddate": "2015/9/30",
        "basicid": 1,
        "basicname": "単価型",
        "basicunit": 388.8,
        "amountid": 1,
        "amountname": "従量電灯三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 19.56,
        "amountunit2": 23.84,
        "amountunit3": 27.42
      },
      {
        "planid": "3",
        "planname": "はぴeタイム",
        "plandisc": "季節や時間帯によって電力量料金単価が異なるメニューです。割安な時間帯に電気の利用をシフトすることで、電気料金を削減することができます。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.kepco.co.jp/corporate/info/community/",
        "startdate": "2015/6/1",
        "enddate": "2015/9/30",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 2160.0,
        "basic2": 388.8,
        "amountid": 4,
        "amountname": "夏季ピーク朝夕昼夜型",
        "amountunit1": 26.41,
        "amountstarttime": 10.0,
        "amountendtime": 17.0,
        "nightunit": 12.19,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "morningeveningunit": 34.63,
        "summerunit": 37.98,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 10.0,
        "summerendtime": 17.0
      },
      {
        "planid": "4",
        "planname": "時間帯別電灯",
        "plandisc": "時間帯別に設定された料金によって、より電力需要の少ない時間帯への負荷移行を促進し、電力設備の効率的な使用等を目的としたメニューです。料金単価は通常より夜間は割安に、昼間は割高になります。そのため、夜間のご使用量の割合が高いほど、電気料金は安くなります。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.kepco.co.jp/corporate/info/community/",
        "startdate": "2015/6/1",
        "enddate": "2015/9/30",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 388.8,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 23.8,
        "amountunit2": 30.75,
        "amountunit3": 35.23,
        "nightunit": 12.19,
        "nightstarttime": 23.0,
        "nightendtime": 7.0
      },
      {
        "planid": "5",
        "planname": "季時別電灯PS",
        "plandisc": "夏のピーク時に対応するピーク時間と、それ以外のオフピーク時間、夜間時間に時間帯を区分し、ピーク時間からオフピーク時間および夜間時間へ電力使用を移行することで、電気料金を削減できるメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.kepco.co.jp/corporate/info/community/",
        "startdate": "2015/6/1",
        "enddate": "2015/9/30",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 388.8,
        "amountid": 12,
        "amountname": "夏季ピーク平日昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 23.0,
        "amountunit2": 29.7,
        "amountunit3": 34.09,
        "nightunit": 12.19,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "summerunit": 59.79,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 13.0,
        "summerendtime": 16.0
      }
    ]
  },
  "energia": {
    "companyname": "中国電力",
    "plans": [
      {
        "planid": "1",
        "planname": "従量電灯A",
        "plandisc": "「昼間は家にいることが多く，昼間に電気を使うことが多い」，「時間を気にせず電気を使いたい」という方におすすめです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.energia.co.jp/office/index.html",
        "startdate": "2014/4/1",
        "basicid": 4,
        "basicname": "最低料金型",
        "minimumfee": 330.26,
        "minimumkwh": 15,
        "amountid": 13,
        "amountname": "従量電灯A三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 20.34,
        "amountunit2": 26.9,
        "amountunit3": 28.98
      },
      {
        "planid": "2",
        "planname": "従量電灯B",
        "plandisc": "商店、事務所、飲食店、家庭等で電灯、小型機器を多く使っている方におすすめなメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.energia.co.jp/office/index.html",
        "startdate": "2014/4/1",
        "basicid": 1,
        "basicname": "単価型",
        "basicunit": 399.6,
        "amountid": 1,
        "amountname": "従量電灯三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 17.7,
        "amountunit2": 23.68,
        "amountunit3": 25.52
      },
      {
        "planid": "3",
        "planname": "エコノミーナイト【時間帯別電灯】",
        "plandisc": "「昼間は不在が多く夜間に電気を使うことが多い」 「電気の使用方法を工夫して電気料金を安くしたい」という方におすすめのメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.energia.co.jp/office/index.html",
        "startdate": "2014/4/1",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 399.6,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 220,
        "amountunit1": 21.81,
        "amountunit2": 28.85,
        "amountunit3": 31.09,
        "nightunit": 10.02,
        "nightstarttime": 23.0,
        "nightendtime": 8.0
      },
      {
        "planid": "4",
        "planname": "ファミリータイム〔プランI〕",
        "plandisc": "電化住宅にお住まいの方におすすめのメニューです。プランIIより基本料金は割高に、電力量料金は割安になっているので電気をたくさん利用する方におすすめです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.energia.co.jp/office/index.html",
        "startdate": "2014/4/1",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 2160.0,
        "basic2": 399.6,
        "amountid": 4,
        "amountname": "夏季ピーク朝夕昼夜型",
        "amountunit1": 24.33,
        "amountstarttime": 10.0,
        "amountendtime": 17.0,
        "nightunit": 10.02,
        "nightstarttime": 23.0,
        "nightendtime": 8.0,
        "morningeveningunit": 29.14,
        "summerunit": 33.86,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 10.0,
        "summerendtime": 17.0
      },
      {
        "planid": "5",
        "planname": "ファミリータイム〔プランII〕",
        "plandisc": "電化住宅にお住まいの方におすすめのメニューです。プランIより基本料金は割安に、電力量料金は割高になっているので電気使用量が少なめの方におすすめです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.energia.co.jp/office/index.html",
        "startdate": "2014/4/1",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 399.6,
        "amountid": 4,
        "amountname": "夏季ピーク朝夕昼夜型",
        "amountunit1": 26.76,
        "amountstarttime": 10.0,
        "amountendtime": 17.0,
        "nightunit": 10.02,
        "nightstarttime": 23.0,
        "nightendtime": 8.0,
        "morningeveningunit": 32.1,
        "summerunit": 37.14,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 10.0,
        "summerendtime": 17.0
      },
      {
        "planid": "6",
        "planname": "電灯ピークシフトプラン",
        "plandisc": "夏季の節電（特にピーク時間帯）を積極的に行う方におすすめなメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.energia.co.jp/office/index.html",
        "startdate": "2014/4/1",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 399.6,
        "amountid": 9,
        "amountname": "夏季ピーク昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 220,
        "amountunit1": 21.02,
        "amountunit2": 27.83,
        "amountunit3": 30.0,
        "nightunit": 10.02,
        "nightstarttime": 23.0,
        "nightendtime": 8.0,
        "summerunit": 55.59,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 13.0,
        "summerendtime": 16.0
      }
    ]
  },
  "yonden": {
    "companyname": "四国電力",
    "plans": [
      {
        "planid": "1",
        "planname": "従量電灯A",
        "plandisc": "電灯または小型機器を使用し、最大需要容量が6kVA未満の方を対象としたメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.yonden.co.jp/corporate/b_esta/index.html",
        "startdate": "2014/4/1",
        "basicid": 4,
        "basicname": "最低料金型",
        "minimumfee": 403.92,
        "minimumkwh": 11,
        "amountid": 13,
        "amountname": "従量電灯A三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 20.0,
        "amountunit2": 26.5,
        "amountunit3": 29.95
      },
      {
        "planid": "2",
        "planname": "従量電灯B",
        "plandisc": "電灯または小型機器を使用し、契約容量が6kVA以上であり、かつ原則として50kVA未満の方を対象とするメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.yonden.co.jp/corporate/b_esta/index.html",
        "startdate": "2014/4/1",
        "basicid": 1,
        "basicname": "単価型",
        "basicunit": 367.2,
        "amountid": 1,
        "amountname": "従量電灯三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 16.66,
        "amountunit2": 22.09,
        "amountunit3": 24.96
      },
      {
        "planid": "3",
        "planname": "時間帯別電灯(得トクナイト)",
        "plandisc": "電気温水器をご使用の方や夜型ライフスタイルの方におすすめのメニューです。電気の使い方を工夫し、割安な夜間のご使用割合を高めていただくほど電気料金がおトクになります。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.yonden.co.jp/corporate/b_esta/index.html",
        "startdate": "2014/4/1",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 367.2,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 21.98,
        "amountunit2": 29.13,
        "amountunit3": 32.92,
        "nightunit": 11.04,
        "nightstarttime": 23.0,
        "nightendtime": 7.0
      },
      {
        "planid": "4",
        "planname": "ピークシフト型時間帯別電灯",
        "plandisc": "夏季のピーク時間帯の料金単価を割高に、夜間の料金単価を割安に設定した料金メニューです。電気のご使用を、夏季のピーク時間帯から昼間や夜間に上手にシフトするなど、日々の電気の使い方を工夫することで、ピーク時の節電や電気料金の節約ができます。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.yonden.co.jp/corporate/b_esta/index.html",
        "startdate": "2014/4/1",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 367.2,
        "amountid": 9,
        "amountname": "夏季ピーク昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 21.06,
        "amountunit2": 27.91,
        "amountunit3": 31.54,
        "nightunit": 11.04,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "summerunit": 55.81,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 13.0,
        "summerendtime": 16.0
      },
      {
        "planid": "5",
        "planname": "スマートｅプラン［タイプL］",
        "plandisc": "1日を3つの時間帯（夜間・朝夕・昼間）に分けて料金単価を設定したメニューです。昼間時間と比べて、夜間時間と朝夕時間の料金単価がお得です。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.yonden.co.jp/corporate/b_esta/index.html",
        "startdate": "2015/4/1",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 367.2,
        "amountid": 14,
        "amountname": "朝夕昼三段階夜型",
        "amountunit1_2_kwh": 40,
        "amountunit2_3_kwh": 90,
        "amountunit1": 20.67,
        "amountunit2": 27.4,
        "amountunit3": 41.1,
        "amountstarttime": 9.0,
        "amountendtime": 17.0,
        "nightunit": 11.04,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "morningeveningunit": 27.26
      },
      {
        "planid": "6",
        "planname": "スマートeプラン[タイプH]",
        "plandisc": "平日は3つの時間帯（夜間・朝夕・昼間）、休日は2つの時間帯（夜間・昼間）に分けて料金単価を設定したメニューです。平日の昼間に比べて夜間はかなりお得、休日の昼間と平日の朝夕の料金単価もお得です。 ",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.yonden.co.jp/corporate/b_esta/index.html",
        "startdate": "2015/4/1",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 367.2,
        "amountid": 15,
        "amountname": "夏季ピーク朝夕昼夜休日昼型",
        "amountunit1": 30.9,
        "amountstarttime": 9.0,
        "amountendtime": 17.0,
        "nightunit": 11.04,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "weekendunit": 24.15,
        "morningeveningunit": 26.7,
        "summerunit": 37.08,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 9.0,
        "summerendtime": 17.0
      },
      {
        "planid": "7",
        "planname": "季節別時間帯別電灯(電化Ｄｅナイト)",
        "plandisc": "電気料金を季節ごと時間帯ごとに設定したメニューです。昼間の電気料金は若干割高になりますが、夜間はおトクな料金です。電気の使い方を工夫し、割安な夜間の使用割合を高めるほど電気料金がおトクになります。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.yonden.co.jp/corporate/b_esta/index.html",
        "startdate": "2014/4/1",
        "enddate": "2015/3/31",
        "basicid": 3,
        "basicname": "二段階型",
        "basic1_2_kva": 10.0,
        "basic1": 1620.0,
        "basic2": 496.8,
        "amountid": 5,
        "amountname": "夏季ピーク型",
        "amountunit1": 26.64,
        "nightunit": 11.04,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "summerunit": 31.97,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 7.0,
        "summerendtime": 23.0
      }
    ]
  },
  "kyuden": {
    "companyname": "九州電力",
    "plans": [
      {
        "planid": "1",
        "planname": "従量電灯BC",
        "plandisc": "昼間の在宅が多い家庭や時間帯や曜日を気にせずに電気を使いたい方におススメのスタンダードなメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.kyuden.co.jp/rate_reception_phone.html",
        "startdate": "2013/5/1",
        "basicid": 1,
        "basicname": "単価型",
        "basicunit": 291.6,
        "amountid": 1,
        "amountname": "従量電灯三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 17.13,
        "amountunit2": 22.63,
        "amountunit3": 25.57
      },
      {
        "planid": "2",
        "planname": "季時別電灯",
        "plandisc": "電気料金単価が日中や夏季は割高、夜間は割安に設定されているため、電気の使用を日中から夜間に移すことにより電気料金が割安になるメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.kyuden.co.jp/rate_reception_phone.html",
        "startdate": "2013/5/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 1620.0,
        "basic3unit": 291.6,
        "amountid": 4,
        "amountname": "夏季ピーク朝夕昼夜型",
        "amountunit1": 30.35,
        "amountstarttime": 10.0,
        "amountendtime": 17.0,
        "nightunit": 10.29,
        "nightstarttime": 22.0,
        "nightendtime": 8.0,
        "morningeveningunit": 22.81,
        "summerunit": 36.1,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 10.0,
        "summerendtime": 17.0
      },
      {
        "planid": "3",
        "planname": "時間帯別電灯",
        "plandisc": "昼間の料金単価を割高に、夜間を割安に設定したメニューです。電気の使用を昼間から夜間に移すことで、電気料金が割安になるメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.kyuden.co.jp/rate_reception_phone.html",
        "startdate": "2013/5/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 1620.0,
        "basic3unit": 291.6,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 80,
        "amountunit2_3_kwh": 200,
        "amountunit1": 22.5,
        "amountunit2": 29.72,
        "amountunit3": 33.59,
        "nightunit": 10.29,
        "nightstarttime": 22.0,
        "nightendtime": 8.0
      },
      {
        "planid": "4",
        "planname": "ピークシフト電灯",
        "plandisc": "夏季・昼間の料金単価を割高にし夜間を割安に設定したメニューです。ピークの節電や電気の使用を夜間に移すことにより電気料金が割安になるメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "http://www.kyuden.co.jp/rate_reception_phone.html",
        "startdate": "2013/5/1",
        "basicid": 2,
        "basicname": "三段階型",
        "basic1_2_kva": 6.0,
        "basic2_3_kva": 10.0,
        "basic1": 1188.0,
        "basic2": 1620.0,
        "basic3unit": 291.6,
        "amountid": 9,
        "amountname": "夏季ピーク昼三段階型",
        "amountunit1_2_kwh": 80,
        "amountunit2_3_kwh": 200,
        "amountunit1": 21.55,
        "amountunit2": 28.46,
        "amountunit3": 32.16,
        "nightunit": 10.29,
        "nightstarttime": 22.0,
        "nightendtime": 8.0,
        "summerunit": 54.0,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 13.0,
        "summerendtime": 16.0
      }
    ]
  },
  "okiden": {
    "companyname": "沖縄電力",
    "plans": [
      {
        "planid": "1",
        "planname": "従量電灯",
        "plandisc": "一般の方が最も多く利用している標準的なメニューです。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "https://www.okiden.co.jp/service/defrayal/inquiry.html",
        "startdate": "2015/4/1",
        "basicid": 4,
        "basicname": "最低料金型",
        "minimumfee": 394.65,
        "minimumkwh": 10,
        "amountid": 13,
        "amountname": "従量電灯A三段階型",
        "amountunit1_2_kwh": 120,
        "amountunit2_3_kwh": 300,
        "amountunit1": 22.49,
        "amountunit2": 27.93,
        "amountunit3": 29.87
      },
      {
        "planid": "2",
        "planname": "Ｅｅらいふ",
        "plandisc": "エコキュートや電気温水器を使っている方が利用できるメニューです。朝夕、休日の電気料金が安くなっています。 ",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "https://www.okiden.co.jp/service/defrayal/inquiry.html",
        "startdate": "2015/4/1",
        "basicid": 5,
        "basicname": "一段階型",
        "basic1": 1620.0,
        "amountid": 10,
        "amountname": "夏季ピーク平日朝夕昼夜型",
        "amountunit1": 36.04,
        "amountstarttime": 10.0,
        "amountendtime": 17.0,
        "nightunit": 11.78,
        "nightstarttime": 23.0,
        "nightendtime": 7.0,
        "morningeveningunit": 26.97,
        "summerunit": 39.46,
        "summerstartdate": "7/1",
        "summerenddate": "9/30",
        "summerstarttime": 10.0,
        "summerendtime": 17.0
      },
      {
        "planid": "3",
        "planname": "時間帯別電灯",
        "plandisc": "エコキュートや電気温水器を使っている方など、夜間の使用率が高い方におすすめのメニューです。食器洗い機や電気炊飯器等の家電製品を、タイマーを活用して夜間時間に使用することにより、割安な料金で電気を使用することができます。",
        "planchange": "ほかのメニューに変更するには電力会社に申請する必要があります。以下のリンク先から最寄りの営業所を選び、電話等で料金プランの変更を依頼ください。",
        "url": "https://www.okiden.co.jp/service/defrayal/inquiry.html",
        "startdate": "2015/4/1",
        "basicid": 5,
        "basicname": "一段階型",
        "basic1": 842.4,
        "amountid": 2,
        "amountname": "昼三段階型",
        "amountunit1_2_kwh": 90,
        "amountunit2_3_kwh": 230,
        "amountunit1": 26.06,
        "amountunit2": 32.38,
        "amountunit3": 34.62,
        "nightunit": 11.78,
        "nightstarttime": 23.0,
        "nightendtime": 7.0
      }
    ]
  }
}
},{}],6:[function(require,module,exports){
/* big.js v3.1.3 https://github.com/MikeMcl/big.js/LICENCE */
;(function (global) {
    'use strict';

/*
  big.js v3.1.3
  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
  https://github.com/MikeMcl/big.js/
  Copyright (c) 2014 Michael Mclaughlin <M8ch88l@gmail.com>
  MIT Expat Licence
*/

/***************************** EDITABLE DEFAULTS ******************************/

    // The default values below must be integers within the stated ranges.

    /*
     * The maximum number of decimal places of the results of operations
     * involving division: div and sqrt, and pow with negative exponents.
     */
    var DP = 20,                           // 0 to MAX_DP

        /*
         * The rounding mode used when rounding to the above decimal places.
         *
         * 0 Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
         * 1 To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
         * 2 To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
         * 3 Away from zero.                                  (ROUND_UP)
         */
        RM = 1,                            // 0, 1, 2 or 3

        // The maximum value of DP and Big.DP.
        MAX_DP = 1E6,                      // 0 to 1000000

        // The maximum magnitude of the exponent argument to the pow method.
        MAX_POWER = 1E6,                   // 1 to 1000000

        /*
         * The exponent value at and beneath which toString returns exponential
         * notation.
         * JavaScript's Number type: -7
         * -1000000 is the minimum recommended exponent value of a Big.
         */
        E_NEG = -7,                   // 0 to -1000000

        /*
         * The exponent value at and above which toString returns exponential
         * notation.
         * JavaScript's Number type: 21
         * 1000000 is the maximum recommended exponent value of a Big.
         * (This limit is not enforced or checked.)
         */
        E_POS = 21,                   // 0 to 1000000

/******************************************************************************/

        // The shared prototype object.
        P = {},
        isValid = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        Big;


    /*
     * Create and return a Big constructor.
     *
     */
    function bigFactory() {

        /*
         * The Big constructor and exported function.
         * Create and return a new instance of a Big number object.
         *
         * n {number|string|Big} A numeric value.
         */
        function Big(n) {
            var x = this;

            // Enable constructor usage without new.
            if (!(x instanceof Big)) {
                return n === void 0 ? bigFactory() : new Big(n);
            }

            // Duplicate.
            if (n instanceof Big) {
                x.s = n.s;
                x.e = n.e;
                x.c = n.c.slice();
            } else {
                parse(x, n);
            }

            /*
             * Retain a reference to this Big constructor, and shadow
             * Big.prototype.constructor which points to Object.
             */
            x.constructor = Big;
        }

        Big.prototype = P;
        Big.DP = DP;
        Big.RM = RM;
        Big.E_NEG = E_NEG;
        Big.E_POS = E_POS;

        return Big;
    }


    // Private functions


    /*
     * Return a string representing the value of Big x in normal or exponential
     * notation to dp fixed decimal places or significant digits.
     *
     * x {Big} The Big to format.
     * dp {number} Integer, 0 to MAX_DP inclusive.
     * toE {number} 1 (toExponential), 2 (toPrecision) or undefined (toFixed).
     */
    function format(x, dp, toE) {
        var Big = x.constructor,

            // The index (normal notation) of the digit that may be rounded up.
            i = dp - (x = new Big(x)).e,
            c = x.c;

        // Round?
        if (c.length > ++dp) {
            rnd(x, i, Big.RM);
        }

        if (!c[0]) {
            ++i;
        } else if (toE) {
            i = dp;

        // toFixed
        } else {
            c = x.c;

            // Recalculate i as x.e may have changed if value rounded up.
            i = x.e + i + 1;
        }

        // Append zeros?
        for (; c.length < i; c.push(0)) {
        }
        i = x.e;

        /*
         * toPrecision returns exponential notation if the number of
         * significant digits specified is less than the number of digits
         * necessary to represent the integer part of the value in normal
         * notation.
         */
        return toE === 1 || toE && (dp <= i || i <= Big.E_NEG) ?

          // Exponential notation.
          (x.s < 0 && c[0] ? '-' : '') +
            (c.length > 1 ? c[0] + '.' + c.join('').slice(1) : c[0]) +
              (i < 0 ? 'e' : 'e+') + i

          // Normal notation.
          : x.toString();
    }


    /*
     * Parse the number or string value passed to a Big constructor.
     *
     * x {Big} A Big number instance.
     * n {number|string} A numeric value.
     */
    function parse(x, n) {
        var e, i, nL;

        // Minus zero?
        if (n === 0 && 1 / n < 0) {
            n = '-0';

        // Ensure n is string and check validity.
        } else if (!isValid.test(n += '')) {
            throwErr(NaN);
        }

        // Determine sign.
        x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

        // Decimal point?
        if ((e = n.indexOf('.')) > -1) {
            n = n.replace('.', '');
        }

        // Exponential form?
        if ((i = n.search(/e/i)) > 0) {

            // Determine exponent.
            if (e < 0) {
                e = i;
            }
            e += +n.slice(i + 1);
            n = n.substring(0, i);

        } else if (e < 0) {

            // Integer.
            e = n.length;
        }

        // Determine leading zeros.
        for (i = 0; n.charAt(i) == '0'; i++) {
        }

        if (i == (nL = n.length)) {

            // Zero.
            x.c = [ x.e = 0 ];
        } else {

            // Determine trailing zeros.
            for (; n.charAt(--nL) == '0';) {
            }

            x.e = e - i - 1;
            x.c = [];

            // Convert string to array of digits without leading/trailing zeros.
            for (e = 0; i <= nL; x.c[e++] = +n.charAt(i++)) {
            }
        }

        return x;
    }


    /*
     * Round Big x to a maximum of dp decimal places using rounding mode rm.
     * Called by div, sqrt and round.
     *
     * x {Big} The Big to round.
     * dp {number} Integer, 0 to MAX_DP inclusive.
     * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
     * [more] {boolean} Whether the result of division was truncated.
     */
    function rnd(x, dp, rm, more) {
        var u,
            xc = x.c,
            i = x.e + dp + 1;

        if (rm === 1) {

            // xc[i] is the digit after the digit that may be rounded up.
            more = xc[i] >= 5;
        } else if (rm === 2) {
            more = xc[i] > 5 || xc[i] == 5 &&
              (more || i < 0 || xc[i + 1] !== u || xc[i - 1] & 1);
        } else if (rm === 3) {
            more = more || xc[i] !== u || i < 0;
        } else {
            more = false;

            if (rm !== 0) {
                throwErr('!Big.RM!');
            }
        }

        if (i < 1 || !xc[0]) {

            if (more) {

                // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                x.e = -dp;
                x.c = [1];
            } else {

                // Zero.
                x.c = [x.e = 0];
            }
        } else {

            // Remove any digits after the required decimal places.
            xc.length = i--;

            // Round up?
            if (more) {

                // Rounding up may mean the previous digit has to be rounded up.
                for (; ++xc[i] > 9;) {
                    xc[i] = 0;

                    if (!i--) {
                        ++x.e;
                        xc.unshift(1);
                    }
                }
            }

            // Remove trailing zeros.
            for (i = xc.length; !xc[--i]; xc.pop()) {
            }
        }

        return x;
    }


    /*
     * Throw a BigError.
     *
     * message {string} The error message.
     */
    function throwErr(message) {
        var err = new Error(message);
        err.name = 'BigError';

        throw err;
    }


    // Prototype/instance methods


    /*
     * Return a new Big whose value is the absolute value of this Big.
     */
    P.abs = function () {
        var x = new this.constructor(this);
        x.s = 1;

        return x;
    };


    /*
     * Return
     * 1 if the value of this Big is greater than the value of Big y,
     * -1 if the value of this Big is less than the value of Big y, or
     * 0 if they have the same value.
    */
    P.cmp = function (y) {
        var xNeg,
            x = this,
            xc = x.c,
            yc = (y = new x.constructor(y)).c,
            i = x.s,
            j = y.s,
            k = x.e,
            l = y.e;

        // Either zero?
        if (!xc[0] || !yc[0]) {
            return !xc[0] ? !yc[0] ? 0 : -j : i;
        }

        // Signs differ?
        if (i != j) {
            return i;
        }
        xNeg = i < 0;

        // Compare exponents.
        if (k != l) {
            return k > l ^ xNeg ? 1 : -1;
        }

        i = -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;

        // Compare digit by digit.
        for (; ++i < j;) {

            if (xc[i] != yc[i]) {
                return xc[i] > yc[i] ^ xNeg ? 1 : -1;
            }
        }

        // Compare lengths.
        return k == l ? 0 : k > l ^ xNeg ? 1 : -1;
    };


    /*
     * Return a new Big whose value is the value of this Big divided by the
     * value of Big y, rounded, if necessary, to a maximum of Big.DP decimal
     * places using rounding mode Big.RM.
     */
    P.div = function (y) {
        var x = this,
            Big = x.constructor,
            // dividend
            dvd = x.c,
            //divisor
            dvs = (y = new Big(y)).c,
            s = x.s == y.s ? 1 : -1,
            dp = Big.DP;

        if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throwErr('!Big.DP!');
        }

        // Either 0?
        if (!dvd[0] || !dvs[0]) {

            // If both are 0, throw NaN
            if (dvd[0] == dvs[0]) {
                throwErr(NaN);
            }

            // If dvs is 0, throw +-Infinity.
            if (!dvs[0]) {
                throwErr(s / 0);
            }

            // dvd is 0, return +-0.
            return new Big(s * 0);
        }

        var dvsL, dvsT, next, cmp, remI, u,
            dvsZ = dvs.slice(),
            dvdI = dvsL = dvs.length,
            dvdL = dvd.length,
            // remainder
            rem = dvd.slice(0, dvsL),
            remL = rem.length,
            // quotient
            q = y,
            qc = q.c = [],
            qi = 0,
            digits = dp + (q.e = x.e - y.e) + 1;

        q.s = s;
        s = digits < 0 ? 0 : digits;

        // Create version of divisor with leading zero.
        dvsZ.unshift(0);

        // Add zeros to make remainder as long as divisor.
        for (; remL++ < dvsL; rem.push(0)) {
        }

        do {

            // 'next' is how many times the divisor goes into current remainder.
            for (next = 0; next < 10; next++) {

                // Compare divisor and remainder.
                if (dvsL != (remL = rem.length)) {
                    cmp = dvsL > remL ? 1 : -1;
                } else {

                    for (remI = -1, cmp = 0; ++remI < dvsL;) {

                        if (dvs[remI] != rem[remI]) {
                            cmp = dvs[remI] > rem[remI] ? 1 : -1;
                            break;
                        }
                    }
                }

                // If divisor < remainder, subtract divisor from remainder.
                if (cmp < 0) {

                    // Remainder can't be more than 1 digit longer than divisor.
                    // Equalise lengths using divisor with extra leading zero?
                    for (dvsT = remL == dvsL ? dvs : dvsZ; remL;) {

                        if (rem[--remL] < dvsT[remL]) {
                            remI = remL;

                            for (; remI && !rem[--remI]; rem[remI] = 9) {
                            }
                            --rem[remI];
                            rem[remL] += 10;
                        }
                        rem[remL] -= dvsT[remL];
                    }
                    for (; !rem[0]; rem.shift()) {
                    }
                } else {
                    break;
                }
            }

            // Add the 'next' digit to the result array.
            qc[qi++] = cmp ? next : ++next;

            // Update the remainder.
            if (rem[0] && cmp) {
                rem[remL] = dvd[dvdI] || 0;
            } else {
                rem = [ dvd[dvdI] ];
            }

        } while ((dvdI++ < dvdL || rem[0] !== u) && s--);

        // Leading zero? Do not remove if result is simply zero (qi == 1).
        if (!qc[0] && qi != 1) {

            // There can't be more than one zero.
            qc.shift();
            q.e--;
        }

        // Round?
        if (qi > digits) {
            rnd(q, dp, Big.RM, rem[0] !== u);
        }

        return q;
    };


    /*
     * Return true if the value of this Big is equal to the value of Big y,
     * otherwise returns false.
     */
    P.eq = function (y) {
        return !this.cmp(y);
    };


    /*
     * Return true if the value of this Big is greater than the value of Big y,
     * otherwise returns false.
     */
    P.gt = function (y) {
        return this.cmp(y) > 0;
    };


    /*
     * Return true if the value of this Big is greater than or equal to the
     * value of Big y, otherwise returns false.
     */
    P.gte = function (y) {
        return this.cmp(y) > -1;
    };


    /*
     * Return true if the value of this Big is less than the value of Big y,
     * otherwise returns false.
     */
    P.lt = function (y) {
        return this.cmp(y) < 0;
    };


    /*
     * Return true if the value of this Big is less than or equal to the value
     * of Big y, otherwise returns false.
     */
    P.lte = function (y) {
         return this.cmp(y) < 1;
    };


    /*
     * Return a new Big whose value is the value of this Big minus the value
     * of Big y.
     */
    P.sub = P.minus = function (y) {
        var i, j, t, xLTy,
            x = this,
            Big = x.constructor,
            a = x.s,
            b = (y = new Big(y)).s;

        // Signs differ?
        if (a != b) {
            y.s = -b;
            return x.plus(y);
        }

        var xc = x.c.slice(),
            xe = x.e,
            yc = y.c,
            ye = y.e;

        // Either zero?
        if (!xc[0] || !yc[0]) {

            // y is non-zero? x is non-zero? Or both are zero.
            return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
        }

        // Determine which is the bigger number.
        // Prepend zeros to equalise exponents.
        if (a = xe - ye) {

            if (xLTy = a < 0) {
                a = -a;
                t = xc;
            } else {
                ye = xe;
                t = yc;
            }

            t.reverse();
            for (b = a; b--; t.push(0)) {
            }
            t.reverse();
        } else {

            // Exponents equal. Check digit by digit.
            j = ((xLTy = xc.length < yc.length) ? xc : yc).length;

            for (a = b = 0; b < j; b++) {

                if (xc[b] != yc[b]) {
                    xLTy = xc[b] < yc[b];
                    break;
                }
            }
        }

        // x < y? Point xc to the array of the bigger number.
        if (xLTy) {
            t = xc;
            xc = yc;
            yc = t;
            y.s = -y.s;
        }

        /*
         * Append zeros to xc if shorter. No need to add zeros to yc if shorter
         * as subtraction only needs to start at yc.length.
         */
        if (( b = (j = yc.length) - (i = xc.length) ) > 0) {

            for (; b--; xc[i++] = 0) {
            }
        }

        // Subtract yc from xc.
        for (b = i; j > a;){

            if (xc[--j] < yc[j]) {

                for (i = j; i && !xc[--i]; xc[i] = 9) {
                }
                --xc[i];
                xc[j] += 10;
            }
            xc[j] -= yc[j];
        }

        // Remove trailing zeros.
        for (; xc[--b] === 0; xc.pop()) {
        }

        // Remove leading zeros and adjust exponent accordingly.
        for (; xc[0] === 0;) {
            xc.shift();
            --ye;
        }

        if (!xc[0]) {

            // n - n = +0
            y.s = 1;

            // Result must be zero.
            xc = [ye = 0];
        }

        y.c = xc;
        y.e = ye;

        return y;
    };


    /*
     * Return a new Big whose value is the value of this Big modulo the
     * value of Big y.
     */
    P.mod = function (y) {
        var yGTx,
            x = this,
            Big = x.constructor,
            a = x.s,
            b = (y = new Big(y)).s;

        if (!y.c[0]) {
            throwErr(NaN);
        }

        x.s = y.s = 1;
        yGTx = y.cmp(x) == 1;
        x.s = a;
        y.s = b;

        if (yGTx) {
            return new Big(x);
        }

        a = Big.DP;
        b = Big.RM;
        Big.DP = Big.RM = 0;
        x = x.div(y);
        Big.DP = a;
        Big.RM = b;

        return this.minus( x.times(y) );
    };


    /*
     * Return a new Big whose value is the value of this Big plus the value
     * of Big y.
     */
    P.add = P.plus = function (y) {
        var t,
            x = this,
            Big = x.constructor,
            a = x.s,
            b = (y = new Big(y)).s;

        // Signs differ?
        if (a != b) {
            y.s = -b;
            return x.minus(y);
        }

        var xe = x.e,
            xc = x.c,
            ye = y.e,
            yc = y.c;

        // Either zero?
        if (!xc[0] || !yc[0]) {

            // y is non-zero? x is non-zero? Or both are zero.
            return yc[0] ? y : new Big(xc[0] ? x : a * 0);
        }
        xc = xc.slice();

        // Prepend zeros to equalise exponents.
        // Note: Faster to use reverse then do unshifts.
        if (a = xe - ye) {

            if (a > 0) {
                ye = xe;
                t = yc;
            } else {
                a = -a;
                t = xc;
            }

            t.reverse();
            for (; a--; t.push(0)) {
            }
            t.reverse();
        }

        // Point xc to the longer array.
        if (xc.length - yc.length < 0) {
            t = yc;
            yc = xc;
            xc = t;
        }
        a = yc.length;

        /*
         * Only start adding at yc.length - 1 as the further digits of xc can be
         * left as they are.
         */
        for (b = 0; a;) {
            b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;
            xc[a] %= 10;
        }

        // No need to check for zero, as +x + +y != 0 && -x + -y != 0

        if (b) {
            xc.unshift(b);
            ++ye;
        }

         // Remove trailing zeros.
        for (a = xc.length; xc[--a] === 0; xc.pop()) {
        }

        y.c = xc;
        y.e = ye;

        return y;
    };


    /*
     * Return a Big whose value is the value of this Big raised to the power n.
     * If n is negative, round, if necessary, to a maximum of Big.DP decimal
     * places using rounding mode Big.RM.
     *
     * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
     */
    P.pow = function (n) {
        var x = this,
            one = new x.constructor(1),
            y = one,
            isNeg = n < 0;

        if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
            throwErr('!pow!');
        }

        n = isNeg ? -n : n;

        for (;;) {

            if (n & 1) {
                y = y.times(x);
            }
            n >>= 1;

            if (!n) {
                break;
            }
            x = x.times(x);
        }

        return isNeg ? one.div(y) : y;
    };


    /*
     * Return a new Big whose value is the value of this Big rounded to a
     * maximum of dp decimal places using rounding mode rm.
     * If dp is not specified, round to 0 decimal places.
     * If rm is not specified, use Big.RM.
     *
     * [dp] {number} Integer, 0 to MAX_DP inclusive.
     * [rm] 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
     */
    P.round = function (dp, rm) {
        var x = this,
            Big = x.constructor;

        if (dp == null) {
            dp = 0;
        } else if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throwErr('!round!');
        }
        rnd(x = new Big(x), dp, rm == null ? Big.RM : rm);

        return x;
    };


    /*
     * Return a new Big whose value is the square root of the value of this Big,
     * rounded, if necessary, to a maximum of Big.DP decimal places using
     * rounding mode Big.RM.
     */
    P.sqrt = function () {
        var estimate, r, approx,
            x = this,
            Big = x.constructor,
            xc = x.c,
            i = x.s,
            e = x.e,
            half = new Big('0.5');

        // Zero?
        if (!xc[0]) {
            return new Big(x);
        }

        // If negative, throw NaN.
        if (i < 0) {
            throwErr(NaN);
        }

        // Estimate.
        i = Math.sqrt(x.toString());

        // Math.sqrt underflow/overflow?
        // Pass x to Math.sqrt as integer, then adjust the result exponent.
        if (i === 0 || i === 1 / 0) {
            estimate = xc.join('');

            if (!(estimate.length + e & 1)) {
                estimate += '0';
            }

            r = new Big( Math.sqrt(estimate).toString() );
            r.e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
        } else {
            r = new Big(i.toString());
        }

        i = r.e + (Big.DP += 4);

        // Newton-Raphson iteration.
        do {
            approx = r;
            r = half.times( approx.plus( x.div(approx) ) );
        } while ( approx.c.slice(0, i).join('') !==
                       r.c.slice(0, i).join('') );

        rnd(r, Big.DP -= 4, Big.RM);

        return r;
    };


    /*
     * Return a new Big whose value is the value of this Big times the value of
     * Big y.
     */
    P.mul = P.times = function (y) {
        var c,
            x = this,
            Big = x.constructor,
            xc = x.c,
            yc = (y = new Big(y)).c,
            a = xc.length,
            b = yc.length,
            i = x.e,
            j = y.e;

        // Determine sign of result.
        y.s = x.s == y.s ? 1 : -1;

        // Return signed 0 if either 0.
        if (!xc[0] || !yc[0]) {
            return new Big(y.s * 0);
        }

        // Initialise exponent of result as x.e + y.e.
        y.e = i + j;

        // If array xc has fewer digits than yc, swap xc and yc, and lengths.
        if (a < b) {
            c = xc;
            xc = yc;
            yc = c;
            j = a;
            a = b;
            b = j;
        }

        // Initialise coefficient array of result with zeros.
        for (c = new Array(j = a + b); j--; c[j] = 0) {
        }

        // Multiply.

        // i is initially xc.length.
        for (i = b; i--;) {
            b = 0;

            // a is yc.length.
            for (j = a + i; j > i;) {

                // Current sum of products at this digit position, plus carry.
                b = c[j] + yc[i] * xc[j - i - 1] + b;
                c[j--] = b % 10;

                // carry
                b = b / 10 | 0;
            }
            c[j] = (c[j] + b) % 10;
        }

        // Increment result exponent if there is a final carry.
        if (b) {
            ++y.e;
        }

        // Remove any leading zero.
        if (!c[0]) {
            c.shift();
        }

        // Remove trailing zeros.
        for (i = c.length; !c[--i]; c.pop()) {
        }
        y.c = c;

        return y;
    };


    /*
     * Return a string representing the value of this Big.
     * Return exponential notation if this Big has a positive exponent equal to
     * or greater than Big.E_POS, or a negative exponent equal to or less than
     * Big.E_NEG.
     */
    P.toString = P.valueOf = P.toJSON = function () {
        var x = this,
            Big = x.constructor,
            e = x.e,
            str = x.c.join(''),
            strL = str.length;

        // Exponential notation?
        if (e <= Big.E_NEG || e >= Big.E_POS) {
            str = str.charAt(0) + (strL > 1 ? '.' + str.slice(1) : '') +
              (e < 0 ? 'e' : 'e+') + e;

        // Negative exponent?
        } else if (e < 0) {

            // Prepend zeros.
            for (; ++e; str = '0' + str) {
            }
            str = '0.' + str;

        // Positive exponent?
        } else if (e > 0) {

            if (++e > strL) {

                // Append zeros.
                for (e -= strL; e-- ; str += '0') {
                }
            } else if (e < strL) {
                str = str.slice(0, e) + '.' + str.slice(e);
            }

        // Exponent zero.
        } else if (strL > 1) {
            str = str.charAt(0) + '.' + str.slice(1);
        }

        // Avoid '-0'
        return x.s < 0 && x.c[0] ? '-' + str : str;
    };


    /*
     ***************************************************************************
     * If toExponential, toFixed, toPrecision and format are not required they
     * can safely be commented-out or deleted. No redundant code will be left.
     * format is used only by toExponential, toFixed and toPrecision.
     ***************************************************************************
     */


    /*
     * Return a string representing the value of this Big in exponential
     * notation to dp fixed decimal places and rounded, if necessary, using
     * Big.RM.
     *
     * [dp] {number} Integer, 0 to MAX_DP inclusive.
     */
    P.toExponential = function (dp) {

        if (dp == null) {
            dp = this.c.length - 1;
        } else if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throwErr('!toExp!');
        }

        return format(this, dp, 1);
    };


    /*
     * Return a string representing the value of this Big in normal notation
     * to dp fixed decimal places and rounded, if necessary, using Big.RM.
     *
     * [dp] {number} Integer, 0 to MAX_DP inclusive.
     */
    P.toFixed = function (dp) {
        var str,
            x = this,
            Big = x.constructor,
            neg = Big.E_NEG,
            pos = Big.E_POS;

        // Prevent the possibility of exponential notation.
        Big.E_NEG = -(Big.E_POS = 1 / 0);

        if (dp == null) {
            str = x.toString();
        } else if (dp === ~~dp && dp >= 0 && dp <= MAX_DP) {
            str = format(x, x.e + dp);

            // (-0).toFixed() is '0', but (-0.1).toFixed() is '-0'.
            // (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
            if (x.s < 0 && x.c[0] && str.indexOf('-') < 0) {
        //E.g. -0.5 if rounded to -0 will cause toString to omit the minus sign.
                str = '-' + str;
            }
        }
        Big.E_NEG = neg;
        Big.E_POS = pos;

        if (!str) {
            throwErr('!toFix!');
        }

        return str;
    };


    /*
     * Return a string representing the value of this Big rounded to sd
     * significant digits using Big.RM. Use exponential notation if sd is less
     * than the number of digits necessary to represent the integer part of the
     * value in normal notation.
     *
     * sd {number} Integer, 1 to MAX_DP inclusive.
     */
    P.toPrecision = function (sd) {

        if (sd == null) {
            return this.toString();
        } else if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
            throwErr('!toPre!');
        }

        return format(this, sd - 1, 2);
    };


    // Export


    Big = bigFactory();

    //AMD.
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return Big;
        });

    // Node and other CommonJS-like environments that support module.exports.
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Big;

    //Browser.
    } else {
        global.Big = Big;
    }
})(this);

},{}],7:[function(require,module,exports){
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

},{"../data/holidays.json":4,"big.js":6}],8:[function(require,module,exports){
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

},{"big.js":6}],9:[function(require,module,exports){
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

},{"./ebc_funcs.js":10,"./eu.js":12}],10:[function(require,module,exports){
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

},{"../data/banktransdiscount.json":1,"../data/fuelregcosts.json":2,"../data/greenpower.json":3,"../data/tariff.json":5,"./amount_calc.js":7,"./basic_calc.js":8,"./errors.json":11,"big.js":6}],11:[function(require,module,exports){
module.exports={
    "invalid_input_fee": "月額料金が基本料金より少額です。適切な月額料金を入力してください。",
    "invalid_ampere": "アンペア数が不正です。適切なアンペア数を入力してください。"
}

},{}],12:[function(require,module,exports){
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

},{}]},{},[9]);
