---
title: "Vue.js + SVG練習8 : 付箋を作った＆vuexに入門した"
description: ''
pubDate: 'Nov 20 2017'
heroImage: '/images/2017-11-20-vue-svg-sticky/0.gif'
---

![f:id:hashrock:20171120010012g:plain](/images/2017-11-20-vue-svg-sticky/0.gif)

ふつーのドラッグ出来たりリサイズ出来たりする付箋。 SVGで作る必要があったのかは謎。

[DEMO](https://hashrock-sandbox.github.io/study-vue-touch-ui-svg/)

コードはこちら。

[https://github.com/hashrock-sandbox/study-vue-touch-ui-svg](https://github.com/hashrock-sandbox/study-vue-touch-ui-svg)

# ポイント

- SVGで複数行のテキストを表示するには、foreignObject + divを使うのが定番らしい。
- ただしその場合、IE11は見捨てなければならない。
  - cacooなんかもIEは非対応にしている。
- エディタに関してはSVG外でやっている。cacooをみると、absoluteでiframeとcontenteditableを乗っけている。
  - iframeを介す理由は謎だけど、IE対応のためかも？という話を教えてもらった
- 今回はプレーンテキストでいいので、textareaをabsoluteで単に乗っける形とした。

# 詰まったとこ

下記のエラーが出てしまう。computedにしたselectedItemが、参照するときに関数として取れてきてしまう。

```
(30,34): error TS2339: Property 'y' does not exist on type '() => FusenItem'.
```

一旦代入するとうまくいく。

[https://github.com/hashrock-sandbox/study-vue-touch-ui-svg/blob/master/src/App.vue#L28](https://github.com/hashrock-sandbox/study-vue-touch-ui-svg/blob/master/src/App.vue#L28)

computedってこんな感じだったっけ？多分、TypeScript力が足りないだけなんだと思う。

# vuexに入門した

- 実はvuexをまだ使ったことがなかったので、これを期にえいやした
- 公式のドキュメント読みながらなんとか形にした。結構型を書く必要がある箇所が多い。まだ初心者なので言えることは何もない
- 整理されてるんだろうか？ちょっとまだわからないけど、不用意な代入が防がれるのは良いかもしれない。

\-----
