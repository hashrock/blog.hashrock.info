---
title: "Vue.js + SVG練習7: 文字がにょろっと出てくるやつ"
description: ''
pubDate: 'Nov 19 2017'
---

動いてるところは下記ツイートから見れる（gifがでかくなりすぎてはてなにアップロードできなかった）


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/931940765936132096"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


デモサイトは下記。文字を入力したり、文字サイズや太さを変えて遊べる。

[https://hashrock.github.io/canvas-lff/](https://hashrock.github.io/canvas-lff/)

ソースは下記。

[https://github.com/hashrock/canvas-lff](https://github.com/hashrock/canvas-lff)

# リポジトリについて

- もともとは昔に作ったリポジトリで、LFFというラインフォントフォーマットの存在を知って作ったやつ
- canvas上に描くようにして、光らせたりアニメーションさせたりはしていた
- 今回はVue + SVGに移植した
- ついでにES5 -> ES2015 -> TypeScriptに段階移行した
  - まず[lebab](https://lebab.io/)でarrowやletを変換し、その後にSFC + 外部tsファイルのリンクの形にしてVSCodeの支援を得ながら移植し、最後にtsをSFCにがっちゃんこした。結構大変だった。

# フォントについて

- LFFはCAD用のフォーマットらしく、プロッターとかで描画したり、物理的に掘ったりしてたんじゃないかなぁと思う。
- [ここ](http://domisan.sakura.ne.jp/article/cadfont/cadfont.html)にあるKST32Bというフォントがレトロでかっこよかったので使わせて頂いた。GPL2。
- 内容としては、0-10までの範囲の点列をテキストで記述しているだけ
- なので、JSでゴリゴリパースした

# SVG周りについて

- もともとcanvas向けに処理を書いていたので、楽をするために[d3-path](https://github.com/d3/d3-path)を利用した
- d3-pathを使うと、canvas互換のAPIで引いた線をpath要素にシリアライズすることが出来る
- （なんかy軸反転してたり、座標が細かい小数点になっている気がする。自分のバグかもしれんが）

# アニメーションについて

- [animejs](http://animejs.com/)を利用
- animejsとmo.jsは２大Exampleかっこいいけど全く使いこなせないライブラリと勝手にみなしている
- よくあるパスアニメーションを利用。点線ハックするやつ。SVGの仕様決めた人こういう使われ方想定してなかっただろうな
- 文字を重ねて３色で描き、それぞれずらしながら線を描画していけば色がついてかっこよくなる（mo.jsのexampleにあったテクニック）

# Vueについて

- 今回は１行と１文字、それぞれをSFCにしてある
- 最初はフォントデータの検索が遅く、データ構造変えたりキャッシュを期待してcomputedにもたせてみたり、設計をがちゃがちゃ変えた
- 文字の太さ変更については、CSSプロパティとinput: rangeを紐付ける必要があったので、下記の知見を使った（CSS VariablesはJSから変更したときに再評価される）


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/880081193848365060"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


# 思い

- これが何なのかはわからないけど、今までの中では結構遊んでて楽しいやつができた。
- すっごいアクセシビリティの荒廃したサイト作れそう

