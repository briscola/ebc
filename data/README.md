## 電力料金計算関連のデータセット

ここでは電力料金を計算する際に必要な各電力会社が公開しているデータセットをまとめています。

電力料金 = 基本料金 + (電力量料金単価 + 燃料費調整単価 + 再生可能エネルギー発電促進賦課金単価) x 電力量 - 口座振替割引額

### 料金タリフ(tariff.xls, tariff.csv, tariff.json)

電力会社ごとの料金プランのリストと説明、計算に必要な単価等のデータです。

Excelで編集したものをCSVで保存し、csv2json.shを実行してJSONファイルに変換します。

各電力会社のホームページから情報を取得しています。

* [東京電力](http://www.tepco.co.jp/e-rates/individual/menu/home/index-j.html) 実施日は[電気料金メニュー紹介PDF](http://www.tepco.co.jp/e-rates/individual/menu/home/pdf/menu201510721.pdf)の表紙に記載されている。
* [北海道電力](http://www.hepco.co.jp/userate/price/ratemenu/menu_regular/menu_regular.html) 実施日は各電気料金メニュー紹介PDF([例](http://www.hepco.co.jp/userate/price/ratemenu/menu_regular/pdf/jyuuryou_b_c_dream8.pdf))に記載されている。
* [東北電力](https://www.tohoku-epco.co.jp/dprivate/rule/account.html) 実施日は左のリンク先ホームページに記載されている。
* [北陸電力](http://www.rikuden.co.jp/ryokin/minsei.html) 実施日は左のリンク先ホームページに記載されている。
* [中部電力](http://www.chuden.co.jp/home/home_menu) 前回の値上げ実施日の発表は[記者会見](http://www.chuden.co.jp/resource/ryokin/ko_shiryou2_01_2.pdf)によって行われた。
* [関西電力](http://www.kepco.co.jp/home/ryoukin/menu/index.html) リンク先の料金単価に表示されているように2015/6/1-9/30まで軽減期間として値下げが行われている。
* [中国電力](http://www.energia.co.jp/elec/h_menu/list.html) 実施日はプレスリリースで報告される[最新はこちら](http://www.energia.co.jp/press/13/p140115-1.html)。
* [四国電力](http://www.yonden.co.jp/ryoukin/menu) [消費税増税に伴う電気料金見直し](http://www.yonden.co.jp/press/re1401/1186589_2031.html)と[2015年4月からの新電気料金メニュー追加](http://www.yonden.co.jp/press/re1502/1187087_2066.html)が行われた。
* [九州電力](http://www.kyuden.co.jp/menu_gaiyou.html) [2013年5月から電気料金値上げ](http://www.kyuden.co.jp/press_h130402b-1.html)が行われた。
* [沖縄電力](http://www.okiden.co.jp/service/individual) [供給約款と選択約款](http://www.okiden.co.jp/service/covenant/)に実施日が記載されている。

### 燃料費調整単価(fuelregcosts.json)

火力燃料の価格変動に応じて各電力会社が毎月電気料金を調整しており、その変動分の単価です。

各電力会社のホームページから情報を取得しています。

* [東京電力](http://www.tepco.co.jp/e-rates/individual/fuel/adjust/index-j.html)
* [北海道電力](http://www.hepco.co.jp/userate/price/system/system04.html)
* [東北電力](https://www.tohoku-epco.co.jp/dprivate/adjust/adjust_value.html)
* [北陸電力](http://www.rikuden.co.jp/nencho/index.html#tanka)
* [中部電力](http://www.chuden.co.jp/home/shikumi/nencho/nen_price/index.html?cid=ul_me)
* [関西電力](http://www.kepco.co.jp/home/ryoukin/seido/index.html)
* [中国電力](http://www.energia.co.jp/elec/seido/nencho/index.html)
* [四国電力](http://www.yonden.co.jp/ryoukin/calcul_pay/nencho_tanka)
* [九州電力](http://www.kyuden.co.jp/rate_adj_past.html)
* [沖縄電力](http://www.okiden.co.jp/service/charge/old/index.html)

### 再生可能エネルギー発電促進賦課金単価(greenpower.json)

再生可能エネルギーによる発電を促進するために、再生可能エネルギーで発電した電気を電力会社が一定価格で買い取る費用を電気の利用者から賦課金として集めており、定期的に見直しをかけながら単価が決定されています。

* [平成27年度の再生可能エネルギー発電促進賦課金について](http://www.meti.go.jp/press/2014/03/20150319002/20150319002.html)

### 口座振替割引額(banktransdiscount.json)

銀行口座振替で電気料金を支払う場合、電気料金が割引される場合があります。

割引額は各電力会社のホームページから情報を取得しています。

* [東京電力](http://www.tepco.co.jp/e-rates/individual/basic/payment/payment03-j.html)
* [北海道電力](http://www.hepco.co.jp/userate/contract_change/cc04.html) (割引なし)
* [東北電力](https://www.tohoku-epco.co.jp/dprivate/pay/pay.html) (割引なし)
* [北陸電力](http://www.rikuden.co.jp/tetsuzuki/oshiharai.html#kouzafurikae)
* [中部電力](http://www.chuden.co.jp/home/shikumi/shi_keiyaku/pay/hoho)
* [関西電力](http://www.kepco.co.jp/home/ryoukin/menu/kofuri.html#anchor9992113)
* [中国電力](http://www.energia.co.jp/elec/proc/pay/discount1.html)
* [四国電力](http://www.yonden.co.jp/ryoukin/tanka/tanka/index.html)
* [九州電力](http://www.kyuden.co.jp/user_payment_transfer.html)
* [沖縄電力](https://www.okiden.co.jp/service/defrayal/defrayal_about.html) (割引なし)
