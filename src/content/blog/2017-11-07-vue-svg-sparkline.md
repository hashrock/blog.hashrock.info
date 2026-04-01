---
title: "Vue.js + SVG練習2 : Sparkline"
description: ''
pubDate: 'Nov 07 2017'
heroImage: '/images/2017-11-07-vue-svg-sparkline/0.png'
---

![f:id:hashrock:20171107020024p:plain](/images/2017-11-07-vue-svg-sparkline/0.png)

あまり体調がよくない（言い訳）ので、今日は軽め。

何の変哲もないsparkline。可愛くもなんともない。

Sparkline.vue

```
<template>
  <svg width="300" height="50">
    <polyline fill="none" stroke="#793" :points="points"></polyline>
  </svg>
</template>

<script>
export default {
  data(){
    return {
      dat: []
    }
  },
  computed:{
    points(){
      return this.dat.map((item, i)=>{
        return `${i},${item}`
      }).join(" ")
    }
  },
  mounted(){
    //ランダムデータ
    for(let i =0; i < 300; i++){
      this.dat.push(
        (Math.random() + Math.random() + Math.random() + Math.random()) / 4 * 50
      )
    }
  }

}
</script>
```

# ポイント

- 乱数はいわゆる「コクのある乱数」
- そもそもpolylineって要素があるのを初めて知った
  - d3だと[d3-path](https://github.com/d3/d3-path)という、SVGをcanvas互換のAPIでラップして、canvas風に描画してるみたい
- Vueの場合だと、pointsにバインドして、半角スペースで座標列をjoinすればおわり
  - こういう時computedのありがたみを感じる
- 何かインタラクション入れたかったけど、まぁ寝よう

# 考え

- d3を始めとするチャートライブラリとVueを接続している例をよく見るけど、d3なんかはVueと機能がかぶっている（DOMのバインディングと生成）ところがあるので、そもそもVue単体でチャートを描くのは別に苦じゃないのではと思っている
- けど、座標軸の描画とかズームとか、d3の蓄積と便利さ、抽象化の見事さは無視できない、そのあたりを勉強がてら真似てみるかなと思う

\-----
