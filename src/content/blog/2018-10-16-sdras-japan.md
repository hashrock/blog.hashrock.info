---
title: 'SVG + Vueで有名なsdrasさんが日本に来るよ、という話'
description: ''
pubDate: 'Oct 16 2018'
---

<p>早いもので、<a href="https://vuefes.jp/">Vue Fes Japan</a>まで残すところ２週間程度となりました。</p>

<p>で。</p>

<p><b>何はおいてもsdrasさんですよ。来日です。</b></p>

<p>このブログの読者はSVG漬けの毎日を送っていると思うのですが、
SVGアニメーションといえば自分の中ではこの方です。</p>

<p>Sarah Drasner(sdras)さんは、VueConf 2017（katashinさんによる<a href="https://dev.oro.com/posts/2017/07/event/vueconf2017-report/">VueConf 2017 &#x53C2;&#x52A0;&#x30EC;&#x30DD;&#x30FC;&#x30C8;</a>）のトリでSVGアニメーションのプレゼンを行い、注目を浴びたことが記憶に新しいです。</p>

<p><b>この方がVue Fes Japan登壇のために来日します。</b>SVG界震撼です。</p>

<p><iframe width="480" height="270" src="https://www.youtube.com/embed/gJDyhmL9O_E?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><cite class="hatena-citation"><a href="https://www.youtube.com/watch?v=gJDyhmL9O_E">www.youtube.com</a></cite></p>

<p>発表では「なぜアニメーションが必要なのか。そしてどのように実装すればいいのか」が楽しく解説されています。
アニメーションの制御にはTweenMaxとVue.jsが利用されています。</p>

<p>私も<a href="http://hashrock.hatenablog.com/entry/2017/12/04/215559">この発表に影響されてSVGを始めた</a>ので思い入れがあります。皆さんも未見であればぜひスライドだけでも見てください。スライド内のSVGはインタラクティブに動かせます。</p>

<p>スライド：<iframe src="https://hatenablog-parts.com/embed?url=http%3A%2F%2Fslides.com%2Fsdrasner%2Fanimating-vue-17%23%2F" title="Animating Vue" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="http://slides.com/sdrasner/animating-vue-17#/">slides.com</a></cite></p>

<h1>sdrasさんのCodepenは楽しいぞ</h1>

<p>ウォーリーがマウスカーソルを追ってグリグリ動きます。</p>

<p><iframe id="cp_embed_YZBGNp" src="https://codepen.io/sdras/embed/preview/YZBGNp?height=300&amp;slug-hash=YZBGNp&amp;default-tabs=html,result&amp;host=https://codepen.io" title="Vue-controlled Wall-E" scrolling="no" frameborder="0" height="300" allowtransparency="true" class="cp_embed_iframe" style="width: 100%; overflow: hidden;"></iframe><cite class="hatena-citation"><a href="https://codepen.io/sdras/pen/YZBGNp">codepen.io</a></cite></p>

<p>ホームボタンを押すといい感じのSVGアニメーションが展開されます。</p>

<p><iframe id="cp_embed_YNpaoJ" src="https://codepen.io/sdras/embed/preview/YNpaoJ?height=300&amp;slug-hash=YNpaoJ&amp;default-tabs=html,result&amp;host=https://codepen.io" title="Vue Weather Notifier" scrolling="no" frameborder="0" height="300" allowtransparency="true" class="cp_embed_iframe" style="width: 100%; overflow: hidden;"></iframe><cite class="hatena-citation"><a href="https://codepen.io/sdras/pen/YNpaoJ">codepen.io</a></cite></p>

<p>聞くところによるともともとFlasherだったそうで、このへんの作品はFlashっぽいですね。</p>

<p>Vue.js Londonのトップアニメーションもsdrasさん作です。</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fvuejs.london%2F" title="Vue.js London | Conference | 20-21 September" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://vuejs.london/">vuejs.london</a></cite></p>

<h1>sdrasさんのバックグラウンド</h1>

<p>sdrasさんのバックグラウンドは「フロントエンドエンジニア」かつ「サイエンスイラストレーター」だそうです。イラストレーターとしての作品は下記サイトで見ることができます。</p>

<p><a href="https://sarahdrasner.com/">https://sarahdrasner.com/</a></p>

<p>どのイラストも緻密で圧倒されます。</p>

<p>もともと数学とアート両方に興味が強かったようで、一旦はアート方面で教鞭をとっていたそうです。</p>

<ul>
<li>San Franciscoの漫画ミュージアムでリテラシープログラム（？）を教えていた</li>
<li>ギリシャのHellenic International Studies in the Arts（HISA）で絵画・写真・芸術理論を教えていた</li>
<li>フィールド自然史博物館のサイエンスイラストレーター（爬虫類と両生類）</li>
<li>ビザンティン美術を教えていた</li>
</ul>


<p>などなど、アートの人という感じですが、その後フロントエンドエンジニアとして働くようになり、現在に至ります。</p>

<p>デザインと実装両面をやっているという点では、Vue.jsの作者のEvanさんと似たものがありますね。（Evanさんも元々デザインを学んでいて、エンジニアとしてGoogleに入っています）</p>

<p>現在の肩書はMicrosoftのDeveloper Advocateです。これはEvangelistに近いものだそうで、アニメーションやサーバレスアーキテクチャ（Azure Functionsなど）を啓蒙する立場です。</p>

<h1>Vue.js core teamメンバーとしての活動</h1>

<p>sdrasさんはVue.js core teamメンバーでもあります。主にドキュメント周りに貢献されていて、目立ったところでは、公式ドキュメント内の<a href="https://jp.vuejs.org/v2/cookbook/index.html">「The Cookbook」</a>をリードしました。</p>

<p>クックブックはExampleよりも実用的な例を提供するためのドキュメントで、今年から導入されたものです。内容は重厚かつ実用的で、一見の価値ありです。</p>

<h1>その他の活動</h1>

<ul>
<li>オライリーの<a href="http://shop.oreilly.com/product/0636920045335.do">SVG Animations</a>の著者です。</li>
<li>CSS-Tricksの著者の一人です。<a href="https://css-tricks.com/author/sdrasner/">記事一覧</a></li>
<li>Array Explorer, Object ExplorerというJSの解説サイトを作っています。

<ul>
<li><a href="https://sdras.github.io/array-explorer/">Array Explorer</a></li>
<li><a href="https://sdras.github.io/object-explorer/">Object Explorer</a></li>
</ul>
</li>
<li>vue-directory-treeという、Vue.jsコアのディレクトリ構造を解説付きで表示してくれるサイトを作っています。これVue.jsのコアのコードを読む取っ掛かりにいいかもしれません。

<ul>
<li><a href="https://github.com/sdras/vue-directory-tree">vue-directory-tree</a></li>
</ul>
</li>
<li>SVG Workshopというリポジトリを公開しています。中身を全部見れてませんが、D3やMo.jsなどを利用しているようです。ワークショップに使ったスライドやコードなどが含まれています。

<ul>
<li><a href="https://github.com/sdras/svg-workshop">SVG Workshop</a></li>
</ul>
</li>
</ul>


<h1>そんなsdrasさん、Vue Fesに登壇します</h1>

<p>発表内容はまだ公開されていませんが、近日中には公開されると思います。お楽しみに！
（ちなみに私はスタッフなんで、当日見れるとは限らないんですが…）</p>

<h1>追記 2018-10-18</h1>

<p>発表内容公開されました！「Next-level Vue Animations」ということで、アニメーション絡みの発表になりそうですね！</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fvuefes.jp%2Fspeakers%2Fsdras%2F" title="Next-level Vue Animations（Sarah Drasner）- Vue Fes Japan 2018" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://vuefes.jp/speakers/sdras/">vuefes.jp</a></cite></p>

-----
