## 電力会社ごとの料金プランと料金タリフを管理し、月額電気料金を計算するJavaScriptライブラリ

本サイトは2016年4月1日の電力自由化をみすえ、一般電気事業者（10電力会社）のほか特定規模電気事業者（PPS事業者）の電力プラン情報をコミュニティーベースで収集し、公開することを目指します。

また電力利用者が自らのライフスタイルにあわせて最適な電力プランを選択できるよう、時間帯ごとや季節ごと、平日休日ごとの電力消費率をセットすると自動的に料金計算を行う軽量なJavaScriptライブラリを提供します。

### 料金プランと料金タリフ

各事業者の料金プランと料金タリフをExcel形式で管理し、CSVとJSONの形式で公開します。

また一般電気事業者の料金計算に必要な「燃料費調整単価」と「再生可能エネルギー発電促進賦課金単価」についてもJSONファイルの形式で管理を行います。

詳細は[こちら](https://github.com/briscola/ebc/blob/master/data/README.md)を参照してください。

### JSライブラリの使い方

HTMLのヘッダーでebc.min.js(もしくはebc.js)を読み込みます。

````
<script src="//briscola.github.io/ebc/dist/ebc.min.js"></script>
````

JavaScriptにて下記のように計算を実行します。

```
// 一ヶ月分の電力利用量(30分単位のWh値など)を初期化.
// 引数に年月を設定できる(例:2015年9月の場合EU(2015,9)).
// ブランクの場合は実行日の前月が指定される.
var eu = new EU();

// 電力会社を指定して電力料金計算オブジェクトを初期化.
var ebc = EBC.init('tepco');

ebc.setEU(eu); // 電力利用量をセット.

// デフォルトのプランID(1),月額料金,契約アンペア数,昼開始時間,終了時間,昼の電力使用率を設定.
ebc.setCurrentPlan(1,10000,50,7,23,0.2);

// 料金計算実施
var allPlans = ebc.getSavedPlans(false); // プランをすべて返す.
// var savedPlans = ebc.getSavedPlans();    // 削減プランのみ返す.
```

### サンプルアプリケーション

[サンプル](http://briscola.github.io/ebc/examples)

### ソースコードについて

本アプリはnode.jsの要領でプログラミングした複数JSファイルをbrowserifyを使って1つのJSライブラリにまとめています。

詳細は[こちら](https://github.com/briscola/ebc/blob/master/src/README.md)を参照してください。

### 利用しているライブラリ

小数点の正しい計算のために[big.js](https://github.com/MikeMcl/big.js)を利用しています。

big.jsはbrowserifyを使って本ライブラリ(ebc.js)に同梱していますので別途読み込む必要はありません。
