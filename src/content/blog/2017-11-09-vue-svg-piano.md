---
title: "Vue.js + SVG練習4 : クリックで音の鳴るピアノ鍵盤"
description: ''
pubDate: 'Nov 09 2017'
heroImage: '/images/2017-11-09-vue-svg-piano/0.gif'
---

SVGをグラフィックエディタでいじる方針のリベンジをしたかったので、今回は下記のようなピアノを作った。

![f:id:hashrock:20171109024220g:plain](/images/2017-11-09-vue-svg-piano/0.gif)

下記から動いているところを試せる（音が出ます）

[https://hashrock-sandbox.github.io/study-vue-svg-ui/](https://hashrock-sandbox.github.io/study-vue-svg-ui/)

前回Inkscapeで撃沈したあと、色々試した所、Method DrawというオンラインSVGエディタがだいぶ良さそうだった。

[Method Draw](http://editor.method.ac/)

![f:id:hashrock:20171109014506p:plain](/images/2017-11-09-vue-svg-piano/1.png)

上記のグラフィックをサクッと作り、出力した結果が下記。

```svg
<svg width="20" height="100" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
 <defs>
  <linearGradient id="svg_4" x1="0.410156" y1="0.417969" x2="0.320313" y2="0.144531">
   <stop stop-color="#fff" offset="0"/>
   <stop stop-color="#b7b7b7" stop-opacity="0.996094" offset="1"/>
  </linearGradient>
  <linearGradient id="svg_10" x1="0.558594" y1="0.785156" x2="0.144531" y2="0">
   <stop stop-color="#666666" offset="0"/>
   <stop stop-color="#ffffff" stop-opacity="0.996094" offset="1"/>
  </linearGradient>
 </defs>
 <g>
  <title>background</title>
  <rect fill="#fff" id="canvas_background" height="18.666661" width="5.333332" y="-1" x="-1"/>
  <g display="none" id="canvasGrid">
   <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%" id="svg_2"/>
  </g>
 </g>
 <g>
  <title>Layer 1</title>
  <rect stroke="#000" id="svg_1" height="100" width="20" x="-0.333333" fill="url(#svg_4)"/>
  <rect fill="#000000" stroke="#000" stroke-opacity="null" width="12" height="60" id="svg_5"/>
  <rect fill="#666666" stroke-width="0" stroke-opacity="null" x="11" y="0.333334" width="1" height="59" id="svg_6" stroke="#000"/>
  <rect fill="url(#svg_10)" stroke-width="0" stroke-opacity="null" x="0.833333" y="56" width="10.5" height="3.666667" id="svg_8" stroke="#000"/>
 </g>
</svg>
```

Inkscapeから比べると遥かにクリーンで言うことなし。あの苦労なんだったの…

あとはlayerやbackgroundが不要だったりなんだりで、削除すると2/3くらいにはなる。

Method Drawはsvg-editのforkなわけだが、かなりUIに改善が入っている。ただAuthorが飽きたのかずっと放置されており、バグもごろごろ残っているので注意。

Method Drawの良いところは、数値での座標・幅・高さ指定が非常に楽で、またすべての座標を数値指定することで、座標が整数にきっちり揃ったSVGが手に入る。これは座標計算をJS側でやる際に都合が良い。

完成品のコードは以下。

[https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/Piano.vue](https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/Piano.vue)

# ポイント

- Method Draw、こまめに保存を心がけたほうがよい
- 鍵盤の座標計算は案外面倒で苦労させられた
- クリックした鍵盤への色つけは、SVG要素へのCSS filter適用でなんとかしようと思ってたけど、Chromeのバグなのか全く反映されない。仕方なくstrokeで対処。
- 音が出る部分は、[minroll](https://github.com/hashrock/minroll)の流用。

