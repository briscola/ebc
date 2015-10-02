### 初期設定とコンパイル方法

1. git及びnode.jsのインストール

 ```
 $ brew install git
 $ brew install node
 ```

1. Gitリポジトリをクローン

 ```
 $ git clone https://github.com/briscola/ebc.git
 ```

1. package.jsonに記述されたライブラリをインストール

 ```
 $ cd electricity-bill-calculator
 $ npm install
 ```

1. Gruntを実行しソースコードをコンパイル,distにコピー

 ```
 $ grunt
 ```

### 各ファイルの説明

- ebc.js ... 料金計算ライブラリのメイン(EBCとEUを設定)

- ebc_funcs.js ... EBCオブジェクトの関数を定義

- eu.js ... EUクラスの定義

- basic_calc.js ... ebc_funcs.jsが呼び出す基本料金計算関数の定義(関数名の配列は基本料金タイプIDに対応)

- amount_calc.js ... ebc_funcs.jsが呼び出す電力量料金計算関数の定義(関数名の配列は電力量料金タイプIDに対応)

- errors.json ... エラーメッセージの定義
