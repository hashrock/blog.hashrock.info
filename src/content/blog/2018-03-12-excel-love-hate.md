---
title: 'Excelシートを憎み、愛した男'
description: ''
pubDate: 'Mar 12 2018'
heroImage: '/images/2018-03-12-excel-love-hate/0.gif'
---

<p>Excelシートが憎い。</p>

<p>Excelシートでの書類作業の辛さは言わずもがな。</p>

<ul>
<li>データベースもどき</li>
<li>アプリもどき</li>
<li>帳票出力</li>
<li>Excelシート上でのコーディング</li>
<li>エビデンス作成</li>
<li>UMLなど</li>
</ul>


<p>以上のものについて、すべてExcelでの作成経験がある。あの世にもExcelシートを作らされる地獄がきっと存在するだろう。</p>

<p>Excelシートが憎い。Excelの万能性ゆえ、落とし込まなくていいものまで落とし込まれ、地獄を生み出す。みんなExcelなら慣れてるので、その他の選択肢は選ばれない。何度かMarkdownからExcelにコンバートするようなツールを書いたけれど、書式が変われば捨てざるを得ない。結局今もExcelを書き続けている。辛い。</p>

<p>でも待って欲しい。あれほど一括編集をエレガントにこなせるUIが他にあるだろうか（２大エディタに習熟した場合を除く）。図も書ける。式は素人でも使えるが、プログラミングの一形態ですらある。Excelやっぱり凄いよ。こんな凄いものが存在するなんて信じられない。気がつくとExcelのことばかり考えている。Excelのことが本当は好きなのかも知れない。</p>

<p>だから、SVGでExcel風スプレッドシートを自作した。車輪の再発明だ。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2018-03-12-excel-love-hate/0.gif" alt="f:id:hashrock:20180312013009g:plain" title="f:id:hashrock:20180312013009g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p><a href="https://anydown.github.io/vue-spreadsheet-lite/">DEMOはこちらから</a></p>

<p>ロゴも作った。</p>

<p><a href="/images/2018-03-12-excel-love-hate/1.gif" class="http-image" target="_blank"><img src="/images/2018-03-12-excel-love-hate/1.gif" class="http-image" alt="/images/2018-03-12-excel-love-hate/1.gif"></a></p>

<p>リポジトリはこちら。</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Fanydown%2Fvue-spreadsheet-lite" title="anydown/vue-spreadsheet-lite" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://github.com/anydown/vue-spreadsheet-lite">github.com</a></cite></p>

<p>すでに<a href="https://handsontable.com/">handsontable</a>という、実用的なスプレッドシートコンポーネントが存在するため、
フルスクラッチで小さく書くのを目標にしている。</p>

<p>下記の通り、コンポーネントは１ファイルの.vueだけで書かれており、Vue以外への依存はない（…と思ったけど、考えたらrebootに依存してた。そのうちどうにかします）。今の所413行。</p>

<p><a href="https://github.com/anydown/vue-spreadsheet-lite/blob/master/src/components/SushiGrid.vue">vue-spreadsheet-lite/SushiGrid.vue at master &middot; anydown/vue-spreadsheet-lite &middot; GitHub</a></p>

<p>結構頑張って作ったけど、機能不足やバグが多数あったり、そもそもまだコンポーネント単体としてnpmから使えないとか、いろいろな不備がある。まだ実用は出来ないので、ご容赦願いたい。</p>

<h1>SVGとVueで難しいコンポーネントを作ろう</h1>

<p>SVGとVue.jsの組み合わせが最高なのは下記の記事でも書いたとおり。身の回りでも多くの人がVue.js + SVG遊びに興じているのを観測している。</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=http%3A%2F%2Fhashrock.hatenablog.com%2Fentry%2F2017%2F12%2F04%2F215559" title="グリグリ動くUIをVueとSVGでサクッと書く - No Regrets in Bathing" class="embed-card embed-blogcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 190px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="http://hashrock.hatenablog.com/entry/2017/12/04/215559">hashrock.hatenablog.com</a></cite></p>

<p>もっと多くの人にVueとSVGを使って欲しいので、今回は複雑なものを作る時のTipsも足しておく。</p>

<h2>スプレッドシートを作る手順</h2>

<p>最初はまずSVGを手書きし、プロトタイピングするのをおすすめする。</p>

<p>ちょっと思い出しながら書いてるけど、初期のコミットは下記のようなコードだった。</p>

<pre class="code lang-html" data-lang="html" data-unlink><span class="synIdentifier">&lt;</span>template<span class="synIdentifier">&gt;</span>
  <span class="synIdentifier">&lt;</span>svg<span class="synIdentifier"> </span><span class="synType">width</span><span class="synIdentifier">=</span><span class="synConstant">500</span><span class="synIdentifier">&gt;</span>
    <span class="synIdentifier">&lt;</span>rect<span class="synIdentifier"> x=</span><span class="synConstant">0</span><span class="synIdentifier"> y=</span><span class="synConstant">0</span><span class="synIdentifier"> </span><span class="synType">width</span><span class="synIdentifier">=</span><span class="synConstant">100</span><span class="synIdentifier"> </span><span class="synType">height</span><span class="synIdentifier">=</span><span class="synConstant">24</span><span class="synIdentifier">&gt;</span>
    <span class="synIdentifier">&lt;</span>text<span class="synIdentifier"> x=</span><span class="synConstant">0</span><span class="synIdentifier"> y=</span><span class="synConstant">12</span><span class="synIdentifier"> </span><span class="synType">width</span><span class="synIdentifier">=</span><span class="synConstant">100</span><span class="synIdentifier"> </span><span class="synType">height</span><span class="synIdentifier">=</span><span class="synConstant">24</span><span class="synIdentifier">&gt;</span>hoge<span class="synIdentifier">&lt;/</span>text<span class="synIdentifier">&gt;</span>
    <span class="synIdentifier">&lt;</span>rect<span class="synIdentifier"> x=</span><span class="synConstant">100</span><span class="synIdentifier"> y=</span><span class="synConstant">0</span><span class="synIdentifier"> </span><span class="synType">width</span><span class="synIdentifier">=</span><span class="synConstant">100</span><span class="synIdentifier"> </span><span class="synType">height</span><span class="synIdentifier">=</span><span class="synConstant">24</span><span class="synIdentifier">&gt;</span>
    <span class="synIdentifier">&lt;</span>text<span class="synIdentifier"> x=</span><span class="synConstant">100</span><span class="synIdentifier"> y=</span><span class="synConstant">12</span><span class="synIdentifier"> </span><span class="synType">width</span><span class="synIdentifier">=</span><span class="synConstant">100</span><span class="synIdentifier"> </span><span class="synType">height</span><span class="synIdentifier">=</span><span class="synConstant">24</span><span class="synIdentifier">&gt;</span>fuga<span class="synIdentifier">&lt;/</span>text<span class="synIdentifier">&gt;</span>
  <span class="synIdentifier">&lt;/</span>svg<span class="synIdentifier">&gt;</span>
<span class="synIdentifier">&lt;/</span>template<span class="synIdentifier">&gt;</span>
<span class="synIdentifier">&lt;</span><span class="synStatement">style</span><span class="synIdentifier">&gt;</span>
rect<span class="synIdentifier">{</span>
  fill: <span class="synConstant">white</span>;
  stroke: <span class="synConstant">#999</span>;
<span class="synIdentifier">}</span>
<span class="synIdentifier">&lt;/</span><span class="synStatement">style</span><span class="synIdentifier">&gt;</span>
</pre>


<ul>
<li>vue createで作成されるHello.vueファイルを編集しながら作り始める。</li>
<li>この時点でロジックはまったくない。SVGのrectやtextで作りたいものが出来るのかをまず検証する。</li>
<li>ある程度要素同士にまとまりが見えてきたら、g要素でグルーピングし、<code>transform="translate(x, y)"</code>の形に書き直す。</li>
</ul>


<p>それから、Vueのdataに配列を入れて、v-forで要素を生成する。</p>

<p>コツは、やはり見た目から先に作り込むこと。特にSVGにはz-indexが無いため、書いた順に重ね合わせされるなどの罠が存在する。
自分はDIVなどのHTML要素でコンポーネントを作るときも、まずHTMLタグでモックアップを作ってから、後でロジックを差し込む作り方をするほうが多い。</p>

<h2>その場編集（In-place editing）</h2>

<p>要素をクリックして、その場で文字列を書き換えられるような仕組みをIn-place editingと呼ぶ。</p>

<p>In-place editingは知る限り下記の３つの方法がある。</p>

<ul>
<li>contenteditable属性を使う</li>
<li>クリック後、要素の上にテキストフィールドを乗せる</li>
<li>見えないテキストフィールド（opacity=0）を最初からコンポーネント上に置いておき、クリック位置に移動する</li>
</ul>


<p>今回のスプレッドシートは、任意のタイミングでのキー入力もテキスト入力として扱わないといけないので、３番目の見えないテキストフィールドを採用した。２番目は<a href="https://github.com/hashrock-sandbox/study-vue-touch-ui-svg">付箋</a>を作ったときに採用した。</p>

<p>In-place editingを作るときには、特にIMEの取扱に注意が必要で、ラテン語圏のOSSはIMEを上手く扱えていないケースが多い。そもそも入力出来なかったり、変換確定のEnterキーで入力が終了してしまったり。
最近は同じくIMEを必要とする中国語圏のユーザがOSSに関わることが多くなったからか、状況は改善している。</p>

<h2>選択範囲など</h2>

<p>SVGはz-indexによる重なり順の制御が出来ないと書いたが、下記のように分類すれば大抵のケースでうまくいく。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2018-03-12-excel-love-hate/2.png" alt="f:id:hashrock:20180312022916p:plain" title="f:id:hashrock:20180312022916p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>UIレイヤーは、選択範囲やボタン、ダイアログなどに当たる。ベジェハンドルやバウンディングボックスなどもここ。</p>

<p>コンテンツレイヤーは、編集対象のコンテンツに当たる。今回の場合であればセルの内容。</p>

<p>これら２つのレイヤーを重ね合わせることで、多くの問題が解決できる。具体的にはそれぞれをSVG要素でくくり、<code>position: absolute</code>で同じ位置に配置してしまう。</p>

<p>UIとコンテンツを同じSFCの中にまとめてしまいがちだが、そうなると表示順の罠を踏むことになってしまう。
UIのような、クリッカブルな要素がコンテンツの下に来ることは、通常ありえないので、コンテンツと完全に分けてしまうという考え方になる。</p>

<h1>今後の予定について</h1>

<p>Biliでバンドルを作って、npmに公開したいと思っている。機能不足を解決したタイミングで頑張りたい。</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Fegoist%2Fbili" title="egoist/bili" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://github.com/egoist/bili">github.com</a></cite></p>

<p>あと、ちょっと作りかけているけど、markdown tableをスプレッドシート / テキストエリアで双方向に編集できるものも作りたい。下記はスペース区切りのもの。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2018-03-12-excel-love-hate/3.gif" alt="f:id:hashrock:20180312030806g:plain" title="f:id:hashrock:20180312030806g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>テキストからヘッダを生成する場合は、ヘッダの幅を自動算出しなくてはならない。ちょっと考えないといけない。</p>

<h1>おわりに</h1>

<p>Excelを追いかければ追いかけるほど、Excel作った奴らまじで凄いという感想しか出ない。今回作ったものをExcelにするには、複数の選択領域をサポートしたり、セル内の改行や結合セル、罫線、図、数式など、とんでもないカロリーの機能を実装しなくてはならない。</p>

<p>だからこそ、Excelは代替されにくいのだろう。互換ツールを作ることも難しいし、そのメリットも少ない。出来の良いツールが市場に居座ることで、そのツールに依存したエコシステムが形成され、誰も逃げられなくなってしまう。</p>

<p>あと、ツールに対して恨みごとを言いたくなってしまうときは、やはり車輪の再発明をしてみるべきなんだと思う。今回で自分はExcelを作った人に対する敬意が少し増したような気がする。作ってみなきゃ人の苦労は分からない。</p>

<p>まぁ、スプレッドシートの仕事が来たら、こんなんじゃなくて普通にhandsontable使おう。ちょっとでかいけどほんと良く出来てます。</p>

-----
