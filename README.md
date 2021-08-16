# forcast-js-custom
気象庁の気象情報画面の提供に利用されるAPIを利用した気象情報表示
開発者の居住地の宮城県の情報を表示しています。

## 閲覧用リンク
[github.io](https://poolbooyer.github.io/forcast-js-custom/)

## ページ構成
1. index.html

気象庁から提供される宮城県の気象情報を表示
`https://www.jma.go.jp/bosai/forecast/data/forecast/040000.json`  
上記のURLにGETでリクエストして情報を取得  
`040000`の箇所を都道府県の天気予報ページのURLの`area_code`に書き換えると好きな都道府県の気象情報を書き換え可能  
`https://www.jma.go.jp/bosai/forecast/#area_type=offices&area_code=040000`

2. nowcast.html
`https://www.jma.go.jp/bosai/amedas/data/map/YYYYMMDD0000.json`  
上記のURLにGETでリクエストして情報を取得  
全国のアメダス情報が一括で取得できるため、プログラムで表示したい地点を抽出して表示可能
