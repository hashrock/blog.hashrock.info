---
title: "Vue.js + SVG練習3 : こっそり戻ろうとするスライダー"
description: ''
pubDate: 'Nov 08 2017'
heroImage: 'https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171108/20171108000803.gif'
---

<p>３作目。こっそり戻るスライダーを実装しよう。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171108/20171108000803.gif" alt="f:id:hashrock:20171108000803g:plain" title="f:id:hashrock:20171108000803g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>素のSVG手書きするのちょっと辛すぎたんでInkscapeを使うことにした。
Inkscapeも辛くないということはまったくないけど…、うーん。Sketchの方が楽かな。Mac版は持ってるんだけど。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171107/20171107223623.png" alt="f:id:hashrock:20171107223623p:plain" title="f:id:hashrock:20171107223623p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>こんな感じ。</p>

<p>で、動かしたい単位でグループ化し、地道に名前を付けていく。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171107/20171107223852.png" alt="f:id:hashrock:20171107223852p:plain" title="f:id:hashrock:20171107223852p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>groupの移動はx, yではなくtranslateでやることになる（めんどくさい！）ので、
この時、translateの値は、変位する値でメモしておく。</p>

<pre class="code" data-lang="" data-unlink>始点：translate(-0.28348214,0.09449405)
終点：translate(89.296875,0.09449405)</pre>


<p>なるほど、この範囲を動かせばいいわけだ。</p>

<p>inkscapeの安定版はいつでもこんな感じ。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171107/20171107224243.png" alt="f:id:hashrock:20171107224243p:plain" title="f:id:hashrock:20171107224243p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>まぁ使えるのでいいとする。
で、そのままSVGで出力すると、inkscape独自属性とかが山盛りで出力されてしまうので、プレーンSVGというので出す。
最適化SVGというのもあったけど、エラーになって出せなかった（そんなもんだ）</p>

<p>使う部分だけ切り出す。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171107/20171107224546.png" alt="f:id:hashrock:20171107224546p:plain" title="f:id:hashrock:20171107224546p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>metadataとかは不要かな。defもいらない。xml定義周りもいいや。
svg要素以下を.vueファイルにペーストするとこんな感じに。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171107/20171107225033.png" alt="f:id:hashrock:20171107225033p:plain" title="f:id:hashrock:20171107225033p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>こーいうところを</p>

<pre class="code" data-lang="" data-unlink>&lt;g
  transform=&#34;translate(-0.28348214,0.09449405)&#34;
  id=&#34;chara&#34;&gt;</pre>


<p>こうする。</p>

<pre class="code" data-lang="" data-unlink>&lt;g
  :transform=&#34;charaPosition&#34;
  id=&#34;chara&#34;&gt;</pre>




<pre class="code" data-lang="" data-unlink>  computed:{
    charaPosition(){
      const x = -0.28348214 + 89.296875 * this.val / 100
      return `translate(${x},0.09449405)`
    }
  }</pre>


<p>これで、this.valが0-100の間を取ったときに動くようになる。</p>

<p>（追記）あとあと見てみると、ここの計算は間違っている。最終的にはここ消したんだけど</p>

<p>あとはドラッグ。面倒なものに着手してしまったことをだんだん後悔してきたぞ。</p>

<p>で、ここまでやったんですけど、yak shavingに遭遇したので、説明を放棄します。</p>

<ol>
<li>layer全体にtranslateがかかっていて、e.offsetX, e.offsetYの値がズレる</li>
<li>上記を解決しても、viewBoxの値が謎の値になっていて、e.offsetX, e.offsetYの値がズレる</li>
<li>上記を修正するために、viewBoxとsvgのwidth, heightの値をあわせ、オブジェクトをリサイズした所、移動にtranslateではなくmatrixが使われてしまう。リサイズしたらそうなるのか…座標計算で考えることが増えそう…という感じでどんどん不安になる</li>
</ol>


<p>感想としては、見た目の辻褄があっていればOK、という感じのSVGが作られている。パーツ個々はともかく、UI全体をInkscapeから吐いたSVGで作るのはつらそう。</p>

<p>何かの機能を使わないように気をつけて作るとか、あるいは何らかの手段でSVGをclean up出来る、などの対処方法は存在するのかもしれない。Inkscapeマスター誰か…</p>

<p>完成品。</p>

<p>Slider.vue</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Fhashrock-sandbox%2Fstudy-vue-svg-ui%2Fblob%2Fmaster%2Fcomponents%2FSlider.vue" title="hashrock-sandbox/study-vue-svg-ui" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/Slider.vue">github.com</a></cite></p>

<h1>ポイント</h1>

<ul>
<li>自分でこの手のドラッグものを作るときは、下記のものを実装している。

<ul>
<li>startDrag, onDrag, stopDragの３種のイベント。onDragはグラブする要素に。startDragとstopDragはラッパー要素に付ける。</li>
<li>offsetとdragの２つの状態。offsetは「グラブ要素の掴んだ位置」で、今回はx座標のみにして手抜きしてるけど、通常x, y座標を持たせる。dragも今回は2値だけど、リサイズとかある場合には複数の状態を取れるようにする。</li>
<li>もはやtouch eventに付き合ってられないなと思うので躊躇なくpointer eventを使う。メジャーなライブラリは大抵touch eventとmouse eventの変換処理を地道にやってるのでこういう仕事の人はがんばるしかない</li>
</ul>
</li>
<li>scaleとinvertの２種類の変換関数

<ul>
<li>今回は雑に書いたけど、算数が苦手な自分のようなプログラマーはd3-scaleを利用するのが良いと思う。</li>
</ul>
</li>
</ul>


<p>疲れた、次はもっと簡単なやつにしよう。</p>

-----
