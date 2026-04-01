---
title: "Vue.js + SVG練習5: クリックすると頑張るスピナー"
description: ''
pubDate: 'Nov 10 2017'
heroImage: '/images/2017-11-10-vue-svg-spinner/0.gif'
---

ただし、やりすぎると爆発する。

![f:id:hashrock:20171110011101g:plain](/images/2017-11-10-vue-svg-spinner/0.gif)

動作確認は以下より。

[https://hashrock-sandbox.github.io/study-vue-svg-ui/](https://hashrock-sandbox.github.io/study-vue-svg-ui/)

ソースはこちら。

[https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/Spin.vue](https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/Spin.vue)

# ポイント

- 小ネタなので特にないかな…
- 早めに寝たいので、短い時間で実装できる題材を結構考えた
- 小ジャンプは、2次関数でやるパターンと、y変位と速度でやるパターンがあったような気がするけど、頭回ってなくて後者でやった
  - とにかく加速度は常に下にかけて、y変位は0を超えないようにすればジャンプになる。現実と同じ

# 日記

- egoistさんから[プルリク](https://github.com/hashrock-sandbox/study-vue-svg-ui/pull/1)もらった
- poiからgh-pagesへのデプロイ時に、アセットの参照フォルダがルートになってしまっていて、これまで手でパスを修正していたんだけど、package.jsonのpoi/homepageに`./`を指定することで修正出来るよー、というもの
- すごく助かった！

\-----
