---
title: "Vue.js + SVG練習5: クリックすると頑張るスピナー"
description: ''
pubDate: 'Nov 10 2017'
heroImage: '/images/2017-11-10-vue-svg-spinner/0.gif'
---

<p>ただし、やりすぎると爆発する。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2017-11-10-vue-svg-spinner/0.gif" alt="f:id:hashrock:20171110011101g:plain" title="f:id:hashrock:20171110011101g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>動作確認は以下より。</p>

<p><a href="https://hashrock-sandbox.github.io/study-vue-svg-ui/">https://hashrock-sandbox.github.io/study-vue-svg-ui/</a></p>

<p>ソースはこちら。</p>

<p><a href="https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/Spin.vue">https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/Spin.vue</a></p>

<h1>ポイント</h1>

<ul>
<li>小ネタなので特にないかな…</li>
<li>早めに寝たいので、短い時間で実装できる題材を結構考えた</li>
<li>小ジャンプは、2次関数でやるパターンと、y変位と速度でやるパターンがあったような気がするけど、頭回ってなくて後者でやった

<ul>
<li>とにかく加速度は常に下にかけて、y変位は0を超えないようにすればジャンプになる。現実と同じ</li>
</ul>
</li>
</ul>


<h1>日記</h1>

<ul>
<li>egoistさんから<a href="https://github.com/hashrock-sandbox/study-vue-svg-ui/pull/1">プルリク</a>もらった</li>
<li>poiからgh-pagesへのデプロイ時に、アセットの参照フォルダがルートになってしまっていて、これまで手でパスを修正していたんだけど、package.jsonのpoi/homepageに<code>./</code>を指定することで修正出来るよー、というもの</li>
<li>すごく助かった！</li>
</ul>


-----
