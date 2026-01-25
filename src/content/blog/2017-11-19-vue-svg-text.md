---
title: "Vue.js + SVG練習7: 文字がにょろっと出てくるやつ"
description: ''
pubDate: 'Nov 19 2017'
---

<p>動いてるところは下記ツイートから見れる（gifがでかくなりすぎてはてなにアップロードできなかった）</p>

<p><blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">文字をアニメーションさせて遊ぶやつができた <a href="https://t.co/mTYNrkBLxi">https://t.co/mTYNrkBLxi</a> <a href="https://t.co/UT4inhu0My">pic.twitter.com/UT4inhu0My</a></p>&mdash; はっしゅろっく (@hashedrock) <a href="https://twitter.com/hashedrock/status/931940765936132096?ref_src=twsrc%5Etfw">2017年11月18日</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>

<p>デモサイトは下記。文字を入力したり、文字サイズや太さを変えて遊べる。</p>

<p><a href="https://hashrock.github.io/canvas-lff/">https://hashrock.github.io/canvas-lff/</a></p>

<p>ソースは下記。</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Fhashrock%2Fcanvas-lff" title="hashrock/canvas-lff" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://github.com/hashrock/canvas-lff">github.com</a></cite></p>

<h1>リポジトリについて</h1>

<ul>
<li>もともとは昔に作ったリポジトリで、LFFというラインフォントフォーマットの存在を知って作ったやつ</li>
<li>canvas上に描くようにして、光らせたりアニメーションさせたりはしていた</li>
<li>今回はVue + SVGに移植した</li>
<li>ついでにES5 -> ES2015 -> TypeScriptに段階移行した

<ul>
<li>まず<a href="https://lebab.io/">lebab</a>でarrowやletを変換し、その後にSFC + 外部tsファイルのリンクの形にしてVSCodeの支援を得ながら移植し、最後にtsをSFCにがっちゃんこした。結構大変だった。</li>
</ul>
</li>
</ul>


<h1>フォントについて</h1>

<ul>
<li>LFFはCAD用のフォーマットらしく、プロッターとかで描画したり、物理的に掘ったりしてたんじゃないかなぁと思う。</li>
<li><a href="http://domisan.sakura.ne.jp/article/cadfont/cadfont.html">ここ</a>にあるKST32Bというフォントがレトロでかっこよかったので使わせて頂いた。GPL2。</li>
<li>内容としては、0-10までの範囲の点列をテキストで記述しているだけ</li>
<li>なので、JSでゴリゴリパースした</li>
</ul>


<h1>SVG周りについて</h1>

<ul>
<li>もともとcanvas向けに処理を書いていたので、楽をするために<a href="https://github.com/d3/d3-path">d3-path</a>を利用した</li>
<li>d3-pathを使うと、canvas互換のAPIで引いた線をpath要素にシリアライズすることが出来る</li>
<li>（なんかy軸反転してたり、座標が細かい小数点になっている気がする。自分のバグかもしれんが）</li>
</ul>


<h1>アニメーションについて</h1>

<ul>
<li><a href="http://animejs.com/">animejs</a>を利用</li>
<li>animejsとmo.jsは２大Exampleかっこいいけど全く使いこなせないライブラリと勝手にみなしている</li>
<li>よくあるパスアニメーションを利用。点線ハックするやつ。SVGの仕様決めた人こういう使われ方想定してなかっただろうな</li>
<li>文字を重ねて３色で描き、それぞれずらしながら線を描画していけば色がついてかっこよくなる（mo.jsのexampleにあったテクニック）</li>
</ul>


<h1>Vueについて</h1>

<ul>
<li>今回は１行と１文字、それぞれをSFCにしてある</li>
<li>最初はフォントデータの検索が遅く、データ構造変えたりキャッシュを期待してcomputedにもたせてみたり、設計をがちゃがちゃ変えた</li>
<li>文字の太さ変更については、CSSプロパティとinput: rangeを紐付ける必要があったので、下記の知見を使った（CSS VariablesはJSから変更したときに再評価される）</li>
</ul>


<p><blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">CSS variable、JSから変更するとcalcの再評価走る！！！リアクティブ！！！ <a href="https://t.co/ILcjch7OHH">https://t.co/ILcjch7OHH</a> <a href="https://t.co/OMLcCOVKul">pic.twitter.com/OMLcCOVKul</a></p>&mdash; はっしゅろっく (@hashedrock) <a href="https://twitter.com/hashedrock/status/880081193848365060?ref_src=twsrc%5Etfw">2017年6月28日</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>

<h1>思い</h1>

<ul>
<li>これが何なのかはわからないけど、今までの中では結構遊んでて楽しいやつができた。</li>
<li>すっごいアクセシビリティの荒廃したサイト作れそう</li>
</ul>


-----
