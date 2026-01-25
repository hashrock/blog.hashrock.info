---
title: "Vue.js + SVG練習6: ズーム＆パンできる折れ線グラフを書く"
description: ''
pubDate: 'Nov 16 2017'
heroImage: 'https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171116/20171116025148.gif'
---

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171116/20171116025148.gif" alt="f:id:hashrock:20171116025148g:plain" title="f:id:hashrock:20171116025148g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>ズーム＆パンできる折れ線グラフを書いた。グリッドライン付き。</p>

<p>こういったグラフや、ズーム・パンはd3の得意技なのだけれど、あえてSVGを組み上げる部分をd3でやらずVueのテンプレート側でやっている。
スケーリングや、グリッドラインの位置決めなんかは、d3のコア部分の「d3-scale」というライブラリを利用した。</p>

<p>実際描画部分は全く苦労していなくて、グリッドラインも含めてたったのこれだけ。</p>

<pre class="code" data-lang="" data-unlink>&lt;template&gt;
  &lt;svg :width=&#34;w&#34; :height=&#34;h&#34; @wheel=&#34;wheel&#34; @pointerdown=&#34;startDrag&#34; @pointermove=&#34;onDrag&#34; @pointerup=&#34;stopDrag&#34;&gt;
    &lt;polyline fill=&#34;none&#34; stroke=&#34;#793&#34; :points=&#34;points&#34;&gt;&lt;/polyline&gt;
    &lt;line class=&#34;grid&#34; v-for=&#34;(tick, index) in ticks&#34; :key=&#34;index&#34; :x1=&#34;scaleTick(tick)&#34; :y1=&#34;0&#34; :x2=&#34;scaleTick(tick)&#34; :y2=&#34;h&#34;&gt;&lt;/line&gt;
  &lt;/svg&gt;
&lt;/template&gt;</pre>


<p>マウスホイールとか、ドラッグの挙動なんかはmixinとかで切り出せないかな、とかは思っている。
コードは以下。</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Fhashrock-sandbox%2Fstudy-vue-svg-ui%2Fblob%2Fmaster%2Fcomponents%2FLineChart.vue" title="hashrock-sandbox/study-vue-svg-ui" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/LineChart.vue">github.com</a></cite></p>

<p><a href="https://hashrock-sandbox.github.io/study-vue-svg-ui/">DEMO</a></p>

<h1>ポイント</h1>

<ul>
<li>d3-scaleはめちゃくちゃ便利で、<code>scale.scaleLinear().domain([min, max]).range([distmin, distmax])</code>とかやると、domain範囲の値をrange範囲にマッピングしてくれる。</li>
<li>さらに、上記から取れるfunctionにtickというメソッドが生えていて、これは何かというとdistminからdistmaxまでの範囲で、ここに縦線引いたらいい感じになるよ、という座標の配列を返してくれる。</li>
<li>ので、これをそのままグリッドラインに変換してしまえば終わり。</li>
<li>折れ線グラフを塗りつぶすには、pathの端っこを一旦y座標0に落としてから閉じてあげる必要がある。</li>
<li>マウスホイールの挙動はd3-zoomからパクった。d3は参考になる箇所が無限にある</li>
<li>マウスドラッグの挙動は、この前作ったスライダーからの流用。</li>
<li>あといい機会なので全部TypeScriptに移行した。d3使うときは型があると涙がでるほどありがたい。</li>
<li>算数むずかし～～～ってなったときは、computedに切り出して変換後の変数をVue devtoolで見れるようにしてしまうと、どういう変化をするのかが分かりやすい。とにかくVueでロジックを簡単にするにはcomputedを使いこなすこと。</li>
<li>計算量については全く何も考えてないので、データ量が多くなったら万事休すかもしれない。そのあたりはおいおい勉強していきたい。</li>
</ul>


<h1>気持ち</h1>

<p>そもそも、このSVGの練習を始めたのも色々理由があって、</p>

<ul>
<li>Vueconfの<a href="https://www.youtube.com/watch?v=gJDyhmL9O_E">Sarah Drasnerさんの発表</a>が良かったため</li>
<li>anydownで使うSVGのUIの完成度を上げたかったため</li>
<li>Vue.js meetupの時だったか、あまり覚えてないけど、「Vue + D3の連携をするより、VueとSVGで直接描画したほうがいい」と誰かが言っていたのを小耳に挟んだ為</li>
</ul>


<p>この最後の理由も結構大きくて、検証のために今回の練習に至っている。
d3は便利なんだけどSVGの生成部分が辛く、メソッドチェーンをゴリゴリ書いてるうちに自分が一体何を書いているのかわからなくなりがちなのと、
既成のグラフコンポーネントを使ったら使ったで、カスタマイズが全くできなくなりがちというのが結構困るポイントだったりする。
Vueのテンプレートは大変書きやすいので、カスタマイズしやすいグラフが作れるのではないかな。</p>

<p>d3もやっていることはDOMのバインディングと生成で、Vueの出来ることとおんなじなので、Vue + D3の糊付けを頑張るよりは、Vueでやれる範囲を広げたほうがいいんじゃないかという感じに思っている。
無論、d3のutilは便利だし、再発明を防ぐためにd3の考え方の流用はやったほうが良いと思う。</p>

<p>あとは、すべてをVueのバインディングでやることで、複数のグラフのズーム位置やフィルタ状態などの同期が簡単に出来るんじゃないかともくろんでいる。
実際、Webアプリ上でグラフを単体で見たいということは少なく、複数グラフの比較やいろんな切り口でも分析に使うわけで、双方向バインディングが役に立つのでは。</p>

-----
