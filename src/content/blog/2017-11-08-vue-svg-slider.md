---
title: "Vue.js + SVG練習3 : こっそり戻ろうとするスライダー"
description: ''
pubDate: 'Nov 08 2017'
heroImage: '/images/2017-11-08-vue-svg-slider/0.gif'
---

３作目。こっそり戻るスライダーを実装しよう。

![f:id:hashrock:20171108000803g:plain](/images/2017-11-08-vue-svg-slider/0.gif)

素のSVG手書きするのちょっと辛すぎたんでInkscapeを使うことにした。 Inkscapeも辛くないということはまったくないけど…、うーん。Sketchの方が楽かな。Mac版は持ってるんだけど。

![f:id:hashrock:20171107223623p:plain](/images/2017-11-08-vue-svg-slider/1.png)

こんな感じ。

で、動かしたい単位でグループ化し、地道に名前を付けていく。

![f:id:hashrock:20171107223852p:plain](/images/2017-11-08-vue-svg-slider/2.png)

groupの移動はx, yではなくtranslateでやることになる（めんどくさい！）ので、 この時、translateの値は、変位する値でメモしておく。

```
始点：translate(-0.28348214,0.09449405)
終点：translate(89.296875,0.09449405)
```

なるほど、この範囲を動かせばいいわけだ。

inkscapeの安定版はいつでもこんな感じ。

![f:id:hashrock:20171107224243p:plain](/images/2017-11-08-vue-svg-slider/3.png)

まぁ使えるのでいいとする。 で、そのままSVGで出力すると、inkscape独自属性とかが山盛りで出力されてしまうので、プレーンSVGというので出す。 最適化SVGというのもあったけど、エラーになって出せなかった（そんなもんだ）

使う部分だけ切り出す。

![f:id:hashrock:20171107224546p:plain](/images/2017-11-08-vue-svg-slider/4.png)

metadataとかは不要かな。defもいらない。xml定義周りもいいや。 svg要素以下を.vueファイルにペーストするとこんな感じに。

![f:id:hashrock:20171107225033p:plain](/images/2017-11-08-vue-svg-slider/5.png)

こーいうところを

```
<g
  transform="translate(-0.28348214,0.09449405)"
  id="chara">
```

こうする。

```
<g
  :transform="charaPosition"
  id="chara">
```

```
  computed:{
    charaPosition(){
      const x = -0.28348214 + 89.296875 * this.val / 100
      return `translate(${x},0.09449405)`
    }
  }
```

これで、this.valが0-100の間を取ったときに動くようになる。

（追記）あとあと見てみると、ここの計算は間違っている。最終的にはここ消したんだけど

あとはドラッグ。面倒なものに着手してしまったことをだんだん後悔してきたぞ。

で、ここまでやったんですけど、yak shavingに遭遇したので、説明を放棄します。

1. layer全体にtranslateがかかっていて、e.offsetX, e.offsetYの値がズレる
2. 上記を解決しても、viewBoxの値が謎の値になっていて、e.offsetX, e.offsetYの値がズレる
3. 上記を修正するために、viewBoxとsvgのwidth, heightの値をあわせ、オブジェクトをリサイズした所、移動にtranslateではなくmatrixが使われてしまう。リサイズしたらそうなるのか…座標計算で考えることが増えそう…という感じでどんどん不安になる

感想としては、見た目の辻褄があっていればOK、という感じのSVGが作られている。パーツ個々はともかく、UI全体をInkscapeから吐いたSVGで作るのはつらそう。

何かの機能を使わないように気をつけて作るとか、あるいは何らかの手段でSVGをclean up出来る、などの対処方法は存在するのかもしれない。Inkscapeマスター誰か…

完成品。

Slider.vue

[https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/Slider.vue](https://github.com/hashrock-sandbox/study-vue-svg-ui/blob/master/components/Slider.vue)

# ポイント

- 自分でこの手のドラッグものを作るときは、下記のものを実装している。
  - startDrag, onDrag, stopDragの３種のイベント。onDragはグラブする要素に。startDragとstopDragはラッパー要素に付ける。
  - offsetとdragの２つの状態。offsetは「グラブ要素の掴んだ位置」で、今回はx座標のみにして手抜きしてるけど、通常x, y座標を持たせる。dragも今回は2値だけど、リサイズとかある場合には複数の状態を取れるようにする。
  - もはやtouch eventに付き合ってられないなと思うので躊躇なくpointer eventを使う。メジャーなライブラリは大抵touch eventとmouse eventの変換処理を地道にやってるのでこういう仕事の人はがんばるしかない
- scaleとinvertの２種類の変換関数
  - 今回は雑に書いたけど、算数が苦手な自分のようなプログラマーはd3-scaleを利用するのが良いと思う。

疲れた、次はもっと簡単なやつにしよう。

\-----
