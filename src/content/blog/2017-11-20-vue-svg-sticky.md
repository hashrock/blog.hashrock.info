---
title: "Vue.js + SVG練習8 : 付箋を作った＆vuexに入門した"
description: ''
pubDate: 'Nov 20 2017'
heroImage: '/images/2017-11-20-vue-svg-sticky/0.gif'
---

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2017-11-20-vue-svg-sticky/0.gif" alt="f:id:hashrock:20171120010012g:plain" title="f:id:hashrock:20171120010012g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>ふつーのドラッグ出来たりリサイズ出来たりする付箋。
SVGで作る必要があったのかは謎。</p>

<p><a href="https://hashrock-sandbox.github.io/study-vue-touch-ui-svg/">DEMO</a></p>

<p>コードはこちら。</p>

<p><a href="https://github.com/hashrock-sandbox/study-vue-touch-ui-svg">https://github.com/hashrock-sandbox/study-vue-touch-ui-svg</a></p>

<h1>ポイント</h1>

<ul>
<li>SVGで複数行のテキストを表示するには、foreignObject + divを使うのが定番らしい。</li>
<li>ただしその場合、IE11は見捨てなければならない。

<ul>
<li>cacooなんかもIEは非対応にしている。</li>
</ul>
</li>
<li>エディタに関してはSVG外でやっている。cacooをみると、absoluteでiframeとcontenteditableを乗っけている。

<ul>
<li>iframeを介す理由は謎だけど、IE対応のためかも？という話を教えてもらった</li>
</ul>
</li>
<li>今回はプレーンテキストでいいので、textareaをabsoluteで単に乗っける形とした。</li>
</ul>


<h1>詰まったとこ</h1>

<p>下記のエラーが出てしまう。computedにしたselectedItemが、参照するときに関数として取れてきてしまう。</p>

<pre class="code" data-lang="" data-unlink>(30,34): error TS2339: Property &#39;y&#39; does not exist on type &#39;() =&gt; FusenItem&#39;.</pre>


<p>一旦代入するとうまくいく。</p>

<p><a href="https://github.com/hashrock-sandbox/study-vue-touch-ui-svg/blob/master/src/App.vue#L28">https://github.com/hashrock-sandbox/study-vue-touch-ui-svg/blob/master/src/App.vue#L28</a></p>

<p>computedってこんな感じだったっけ？多分、TypeScript力が足りないだけなんだと思う。</p>

<h1>vuexに入門した</h1>

<ul>
<li>実はvuexをまだ使ったことがなかったので、これを期にえいやした</li>
<li>公式のドキュメント読みながらなんとか形にした。結構型を書く必要がある箇所が多い。まだ初心者なので言えることは何もない</li>
<li>整理されてるんだろうか？ちょっとまだわからないけど、不用意な代入が防がれるのは良いかもしれない。</li>
</ul>


-----
