---
title: "Vue.js + SVG練習2 : Sparkline"
description: ''
pubDate: 'Nov 07 2017'
heroImage: 'https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171107/20171107020024.png'
---

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="https://cdn-ak.f.st-hatena.com/images/fotolife/h/hashrock/20171107/20171107020024.png" alt="f:id:hashrock:20171107020024p:plain" title="f:id:hashrock:20171107020024p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>あまり体調がよくない（言い訳）ので、今日は軽め。</p>

<p>何の変哲もないsparkline。可愛くもなんともない。</p>

<p>Sparkline.vue</p>

<pre class="code" data-lang="" data-unlink>&lt;template&gt;
  &lt;svg width=&#34;300&#34; height=&#34;50&#34;&gt;
    &lt;polyline fill=&#34;none&#34; stroke=&#34;#793&#34; :points=&#34;points&#34;&gt;&lt;/polyline&gt;
  &lt;/svg&gt;  
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      dat: []
    }
  },
  computed:{
    points(){
      return this.dat.map((item, i)=&gt;{
        return `${i},${item}`
      }).join(&#34; &#34;)
    }
  },
  mounted(){
    //ランダムデータ
    for(let i =0; i &lt; 300; i++){
      this.dat.push(
        (Math.random() + Math.random() + Math.random() + Math.random()) / 4 * 50
      )
    }
  }

}
&lt;/script&gt;
</pre>


<h1>ポイント</h1>

<ul>
<li>乱数はいわゆる「コクのある乱数」</li>
<li>そもそもpolylineって要素があるのを初めて知った

<ul>
<li>d3だと<a href="https://github.com/d3/d3-path">d3-path</a>という、SVGをcanvas互換のAPIでラップして、canvas風に描画してるみたい</li>
</ul>
</li>
<li>Vueの場合だと、pointsにバインドして、半角スペースで座標列をjoinすればおわり

<ul>
<li>こういう時computedのありがたみを感じる</li>
</ul>
</li>
<li>何かインタラクション入れたかったけど、まぁ寝よう</li>
</ul>


<h1>考え</h1>

<ul>
<li>d3を始めとするチャートライブラリとVueを接続している例をよく見るけど、d3なんかはVueと機能がかぶっている（DOMのバインディングと生成）ところがあるので、そもそもVue単体でチャートを描くのは別に苦じゃないのではと思っている</li>
<li>けど、座標軸の描画とかズームとか、d3の蓄積と便利さ、抽象化の見事さは無視できない、そのあたりを勉強がてら真似てみるかなと思う</li>
</ul>


-----
