---
title: "Vue.js + SVG練習6: ズーム＆パンできる折れ線グラフを書く"
description: ''
pubDate: 'Nov 16 2017'
heroImage: '/images/2017-11-16-vue-svg-chart/0.gif'
---

![f:id:hashrock:20171116025148g:plain](/images/2017-11-16-vue-svg-chart/0.gif)

ズーム＆パンできる折れ線グラフを書いた。グリッドライン付き。

こういったグラフや、ズーム・パンはd3の得意技なのだけれど、あえてSVGを組み上げる部分をd3でやらずVueのテンプレート側でやっている。 スケーリングや、グリッドラインの位置決めなんかは、d3のコア部分の「d3-scale」というライブラリを利用した。

実際描画部分は全く苦労していなくて、グリッドラインも含めてたったのこれだけ。

```
<template>
  <svg :width="w" :height="h" @wheel="wheel" @pointerdown="startDrag" @pointermove="onDrag" @pointerup="stopDrag">
    <polyline fill="none" stroke="#793" :points="points"></polyline>
    <line class="grid" v-for="(tick, index) in ticks" :key="index" :x1="scaleTick(tick)" :y1="0" :x2="scaleTick(tick)" :y2="h"></line>
  </svg>
</template>
```

マウスホイールとか、ドラッグの挙動なんかはmixinとかで切り出せないかな、とかは思っている。 コードは以下。

[https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/LineChart.vue](https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/LineChart.vue)

[DEMO](https://hashrock-sandbox.github.io/study-vue-svg-ui/)

# ポイント

- d3-scaleはめちゃくちゃ便利で、`scale.scaleLinear().domain([min, max]).range([distmin, distmax])`とかやると、domain範囲の値をrange範囲にマッピングしてくれる。
- さらに、上記から取れるfunctionにtickというメソッドが生えていて、これは何かというとdistminからdistmaxまでの範囲で、ここに縦線引いたらいい感じになるよ、という座標の配列を返してくれる。
- ので、これをそのままグリッドラインに変換してしまえば終わり。
- 折れ線グラフを塗りつぶすには、pathの端っこを一旦y座標0に落としてから閉じてあげる必要がある。
- マウスホイールの挙動はd3-zoomからパクった。d3は参考になる箇所が無限にある
- マウスドラッグの挙動は、この前作ったスライダーからの流用。
- あといい機会なので全部TypeScriptに移行した。d3使うときは型があると涙がでるほどありがたい。
- 算数むずかし～～～ってなったときは、computedに切り出して変換後の変数をVue devtoolで見れるようにしてしまうと、どういう変化をするのかが分かりやすい。とにかくVueでロジックを簡単にするにはcomputedを使いこなすこと。
- 計算量については全く何も考えてないので、データ量が多くなったら万事休すかもしれない。そのあたりはおいおい勉強していきたい。

# 気持ち

そもそも、このSVGの練習を始めたのも色々理由があって、

- Vueconfの[Sarah Drasnerさんの発表](https://www.youtube.com/watch?v=gJDyhmL9O_E)が良かったため
- anydownで使うSVGのUIの完成度を上げたかったため
- Vue.js meetupの時だったか、あまり覚えてないけど、「Vue + D3の連携をするより、VueとSVGで直接描画したほうがいい」と誰かが言っていたのを小耳に挟んだ為

この最後の理由も結構大きくて、検証のために今回の練習に至っている。 d3は便利なんだけどSVGの生成部分が辛く、メソッドチェーンをゴリゴリ書いてるうちに自分が一体何を書いているのかわからなくなりがちなのと、 既成のグラフコンポーネントを使ったら使ったで、カスタマイズが全くできなくなりがちというのが結構困るポイントだったりする。 Vueのテンプレートは大変書きやすいので、カスタマイズしやすいグラフが作れるのではないかな。

d3もやっていることはDOMのバインディングと生成で、Vueの出来ることとおんなじなので、Vue + D3の糊付けを頑張るよりは、Vueでやれる範囲を広げたほうがいいんじゃないかという感じに思っている。 無論、d3のutilは便利だし、再発明を防ぐためにd3の考え方の流用はやったほうが良いと思う。

あとは、すべてをVueのバインディングでやることで、複数のグラフのズーム位置やフィルタ状態などの同期が簡単に出来るんじゃないかともくろんでいる。 実際、Webアプリ上でグラフを単体で見たいということは少なく、複数グラフの比較やいろんな切り口でも分析に使うわけで、双方向バインディングが役に立つのでは。

