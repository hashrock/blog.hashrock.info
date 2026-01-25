---
title: "Vue.js + SVG練習4 : クリックで音の鳴るピアノ鍵盤"
description: ''
pubDate: 'Nov 09 2017'
heroImage: 'https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171109/20171109024220.gif'
---

<p>SVGをグラフィックエディタでいじる方針のリベンジをしたかったので、今回は下記のようなピアノを作った。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171109/20171109024220.gif" alt="f:id:hashrock:20171109024220g:plain" title="f:id:hashrock:20171109024220g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>下記から動いているところを試せる（音が出ます）</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fhashrock-sandbox.github.io%2Fstudy-vue-svg-ui%2F" title="vue-cute-components" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://hashrock-sandbox.github.io/study-vue-svg-ui/">hashrock-sandbox.github.io</a></cite></p>

<p>前回Inkscapeで撃沈したあと、色々試した所、Method DrawというオンラインSVGエディタがだいぶ良さそうだった。</p>

<p><a href="http://editor.method.ac/">Method Draw</a></p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171109/20171109014506.png" alt="f:id:hashrock:20171109014506p:plain" title="f:id:hashrock:20171109014506p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>上記のグラフィックをサクッと作り、出力した結果が下記。</p>

<pre class="code lang-svg" data-lang="svg" data-unlink><span class="synIdentifier">&lt;svg </span><span class="synType">width</span>=<span class="synConstant">&quot;20&quot;</span><span class="synIdentifier"> </span><span class="synType">height</span>=<span class="synConstant">&quot;100&quot;</span><span class="synIdentifier"> </span><span class="synType">xmlns</span>=<span class="synConstant">&quot;http://www.w3.org/2000/svg&quot;</span><span class="synIdentifier">&gt;</span>
 <span class="synComment">&lt;!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ --&gt;</span>
 <span class="synIdentifier">&lt;defs&gt;</span>
  <span class="synIdentifier">&lt;linearGradient </span><span class="synType">id</span>=<span class="synConstant">&quot;svg_4&quot;</span><span class="synIdentifier"> </span><span class="synType">x1</span>=<span class="synConstant">&quot;0.410156&quot;</span><span class="synIdentifier"> </span><span class="synType">y1</span>=<span class="synConstant">&quot;0.417969&quot;</span><span class="synIdentifier"> </span><span class="synType">x2</span>=<span class="synConstant">&quot;0.320313&quot;</span><span class="synIdentifier"> </span><span class="synType">y2</span>=<span class="synConstant">&quot;0.144531&quot;</span><span class="synIdentifier">&gt;</span>
   <span class="synIdentifier">&lt;stop </span><span class="synType">stop-color</span>=<span class="synConstant">&quot;#fff&quot;</span><span class="synIdentifier"> </span><span class="synType">offset</span>=<span class="synConstant">&quot;0&quot;</span><span class="synIdentifier">/&gt;</span>
   <span class="synIdentifier">&lt;stop </span><span class="synType">stop-color</span>=<span class="synConstant">&quot;#b7b7b7&quot;</span><span class="synIdentifier"> </span><span class="synType">stop-opacity</span>=<span class="synConstant">&quot;0.996094&quot;</span><span class="synIdentifier"> </span><span class="synType">offset</span>=<span class="synConstant">&quot;1&quot;</span><span class="synIdentifier">/&gt;</span>
  <span class="synIdentifier">&lt;/linearGradient&gt;</span>
  <span class="synIdentifier">&lt;linearGradient </span><span class="synType">id</span>=<span class="synConstant">&quot;svg_10&quot;</span><span class="synIdentifier"> </span><span class="synType">x1</span>=<span class="synConstant">&quot;0.558594&quot;</span><span class="synIdentifier"> </span><span class="synType">y1</span>=<span class="synConstant">&quot;0.785156&quot;</span><span class="synIdentifier"> </span><span class="synType">x2</span>=<span class="synConstant">&quot;0.144531&quot;</span><span class="synIdentifier"> </span><span class="synType">y2</span>=<span class="synConstant">&quot;0&quot;</span><span class="synIdentifier">&gt;</span>
   <span class="synIdentifier">&lt;stop </span><span class="synType">stop-color</span>=<span class="synConstant">&quot;#666666&quot;</span><span class="synIdentifier"> </span><span class="synType">offset</span>=<span class="synConstant">&quot;0&quot;</span><span class="synIdentifier">/&gt;</span>
   <span class="synIdentifier">&lt;stop </span><span class="synType">stop-color</span>=<span class="synConstant">&quot;#ffffff&quot;</span><span class="synIdentifier"> </span><span class="synType">stop-opacity</span>=<span class="synConstant">&quot;0.996094&quot;</span><span class="synIdentifier"> </span><span class="synType">offset</span>=<span class="synConstant">&quot;1&quot;</span><span class="synIdentifier">/&gt;</span>
  <span class="synIdentifier">&lt;/linearGradient&gt;</span>
 <span class="synIdentifier">&lt;/defs&gt;</span>
 <span class="synIdentifier">&lt;g&gt;</span>
  <span class="synIdentifier">&lt;title&gt;</span>background<span class="synIdentifier">&lt;/title&gt;</span>
  <span class="synIdentifier">&lt;rect </span><span class="synType">fill</span>=<span class="synConstant">&quot;#fff&quot;</span><span class="synIdentifier"> </span><span class="synType">id</span>=<span class="synConstant">&quot;canvas_background&quot;</span><span class="synIdentifier"> </span><span class="synType">height</span>=<span class="synConstant">&quot;18.666661&quot;</span><span class="synIdentifier"> </span><span class="synType">width</span>=<span class="synConstant">&quot;5.333332&quot;</span><span class="synIdentifier"> </span><span class="synType">y</span>=<span class="synConstant">&quot;-1&quot;</span><span class="synIdentifier"> </span><span class="synType">x</span>=<span class="synConstant">&quot;-1&quot;</span><span class="synIdentifier">/&gt;</span>
  <span class="synIdentifier">&lt;g </span><span class="synType">display</span>=<span class="synConstant">&quot;none&quot;</span><span class="synIdentifier"> </span><span class="synType">id</span>=<span class="synConstant">&quot;canvasGrid&quot;</span><span class="synIdentifier">&gt;</span>
   <span class="synIdentifier">&lt;rect </span><span class="synType">fill</span>=<span class="synConstant">&quot;url(#gridpattern)&quot;</span><span class="synIdentifier"> </span><span class="synType">stroke-width</span>=<span class="synConstant">&quot;0&quot;</span><span class="synIdentifier"> </span><span class="synType">y</span>=<span class="synConstant">&quot;0&quot;</span><span class="synIdentifier"> </span><span class="synType">x</span>=<span class="synConstant">&quot;0&quot;</span><span class="synIdentifier"> </span><span class="synType">height</span>=<span class="synConstant">&quot;100%&quot;</span><span class="synIdentifier"> </span><span class="synType">width</span>=<span class="synConstant">&quot;100%&quot;</span><span class="synIdentifier"> </span><span class="synType">id</span>=<span class="synConstant">&quot;svg_2&quot;</span><span class="synIdentifier">/&gt;</span>
  <span class="synIdentifier">&lt;/g&gt;</span>
 <span class="synIdentifier">&lt;/g&gt;</span>
 <span class="synIdentifier">&lt;g&gt;</span>
  <span class="synIdentifier">&lt;title&gt;</span>Layer 1<span class="synIdentifier">&lt;/title&gt;</span>
  <span class="synIdentifier">&lt;rect </span><span class="synType">stroke</span>=<span class="synConstant">&quot;#000&quot;</span><span class="synIdentifier"> </span><span class="synType">id</span>=<span class="synConstant">&quot;svg_1&quot;</span><span class="synIdentifier"> </span><span class="synType">height</span>=<span class="synConstant">&quot;100&quot;</span><span class="synIdentifier"> </span><span class="synType">width</span>=<span class="synConstant">&quot;20&quot;</span><span class="synIdentifier"> </span><span class="synType">x</span>=<span class="synConstant">&quot;-0.333333&quot;</span><span class="synIdentifier"> </span><span class="synType">fill</span>=<span class="synConstant">&quot;url(#svg_4)&quot;</span><span class="synIdentifier">/&gt;</span>
  <span class="synIdentifier">&lt;rect </span><span class="synType">fill</span>=<span class="synConstant">&quot;#000000&quot;</span><span class="synIdentifier"> </span><span class="synType">stroke</span>=<span class="synConstant">&quot;#000&quot;</span><span class="synIdentifier"> </span><span class="synType">stroke-opacity</span>=<span class="synConstant">&quot;null&quot;</span><span class="synIdentifier"> </span><span class="synType">width</span>=<span class="synConstant">&quot;12&quot;</span><span class="synIdentifier"> </span><span class="synType">height</span>=<span class="synConstant">&quot;60&quot;</span><span class="synIdentifier"> </span><span class="synType">id</span>=<span class="synConstant">&quot;svg_5&quot;</span><span class="synIdentifier">/&gt;</span>
  <span class="synIdentifier">&lt;rect </span><span class="synType">fill</span>=<span class="synConstant">&quot;#666666&quot;</span><span class="synIdentifier"> </span><span class="synType">stroke-width</span>=<span class="synConstant">&quot;0&quot;</span><span class="synIdentifier"> </span><span class="synType">stroke-opacity</span>=<span class="synConstant">&quot;null&quot;</span><span class="synIdentifier"> </span><span class="synType">x</span>=<span class="synConstant">&quot;11&quot;</span><span class="synIdentifier"> </span><span class="synType">y</span>=<span class="synConstant">&quot;0.333334&quot;</span><span class="synIdentifier"> </span><span class="synType">width</span>=<span class="synConstant">&quot;1&quot;</span><span class="synIdentifier"> </span><span class="synType">height</span>=<span class="synConstant">&quot;59&quot;</span><span class="synIdentifier"> </span><span class="synType">id</span>=<span class="synConstant">&quot;svg_6&quot;</span><span class="synIdentifier"> </span><span class="synType">stroke</span>=<span class="synConstant">&quot;#000&quot;</span><span class="synIdentifier">/&gt;</span>
  <span class="synIdentifier">&lt;rect </span><span class="synType">fill</span>=<span class="synConstant">&quot;url(#svg_10)&quot;</span><span class="synIdentifier"> </span><span class="synType">stroke-width</span>=<span class="synConstant">&quot;0&quot;</span><span class="synIdentifier"> </span><span class="synType">stroke-opacity</span>=<span class="synConstant">&quot;null&quot;</span><span class="synIdentifier"> </span><span class="synType">x</span>=<span class="synConstant">&quot;0.833333&quot;</span><span class="synIdentifier"> </span><span class="synType">y</span>=<span class="synConstant">&quot;56&quot;</span><span class="synIdentifier"> </span><span class="synType">width</span>=<span class="synConstant">&quot;10.5&quot;</span><span class="synIdentifier"> </span><span class="synType">height</span>=<span class="synConstant">&quot;3.666667&quot;</span><span class="synIdentifier"> </span><span class="synType">id</span>=<span class="synConstant">&quot;svg_8&quot;</span><span class="synIdentifier"> </span><span class="synType">stroke</span>=<span class="synConstant">&quot;#000&quot;</span><span class="synIdentifier">/&gt;</span>
 <span class="synIdentifier">&lt;/g&gt;</span>
<span class="synIdentifier">&lt;/svg&gt;</span>
</pre>


<p>Inkscapeから比べると遥かにクリーンで言うことなし。あの苦労なんだったの…</p>

<p>あとはlayerやbackgroundが不要だったりなんだりで、削除すると2/3くらいにはなる。</p>

<p>Method Drawはsvg-editのforkなわけだが、かなりUIに改善が入っている。ただAuthorが飽きたのかずっと放置されており、バグもごろごろ残っているので注意。</p>

<p>Method Drawの良いところは、数値での座標・幅・高さ指定が非常に楽で、またすべての座標を数値指定することで、座標が整数にきっちり揃ったSVGが手に入る。これは座標計算をJS側でやる際に都合が良い。</p>

<p>完成品のコードは以下。</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Fhashrock-sandbox%2Fstudy-vue-svg-ui%2Fblob%2Fmaster%2Fcomponents%2FPiano.vue" title="hashrock-sandbox/study-vue-svg-ui" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/Piano.vue">github.com</a></cite></p>

<h1>ポイント</h1>

<ul>
<li>Method Draw、こまめに保存を心がけたほうがよい</li>
<li>鍵盤の座標計算は案外面倒で苦労させられた</li>
<li>クリックした鍵盤への色つけは、SVG要素へのCSS filter適用でなんとかしようと思ってたけど、Chromeのバグなのか全く反映されない。仕方なくstrokeで対処。</li>
<li>音が出る部分は、<a href="https://github.com/hashrock/minroll">minroll</a>の流用。</li>
</ul>


-----
