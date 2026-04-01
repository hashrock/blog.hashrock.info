---
title: '「Denoくん えかきうた」の作り方'
description: ''
pubDate: 'Dec 15 2019'
heroImage: '/images/2019-12-15-deno-drawing-howto/0.png'
---

<p>内輪でキャッキャする程度を想定していたら、思ったよりもバズったのでビビりました。
こういう気の抜けたネタ動画が、巡り巡って非プログラマーにも届くようだったら楽しいですね。</p>

<p><iframe width="480" height="270" src="https://www.youtube.com/embed/1NxV6JxtbeE?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><cite class="hatena-citation"><a href="https://www.youtube.com/watch?v=1NxV6JxtbeE">www.youtube.com</a></cite></p>

<p>というわけで今回はメイキング記事を書きました。</p>

<h1>どうして作ったのか</h1>

<p><blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">作ったので皆さんぜひ書いてください！！ / Deno Advent Calendar 2019 <a href="https://twitter.com/hashtag/Qiita?src=hash&amp;ref_src=twsrc%5Etfw">#Qiita</a> <a href="https://twitter.com/hashtag/denoland?src=hash&amp;ref_src=twsrc%5Etfw">#denoland</a> <a href="https://t.co/sNaM2Oy2js">https://t.co/sNaM2Oy2js</a></p>&mdash; syumai (@__syumai) <a href="https://twitter.com/__syumai/status/1190263644921053187?ref_src=twsrc%5Etfw">2019年11月1日</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>

<p>Deno Advent Calendar 2019が立ったばかりのときに「いっちょどうでもいい記事でハードル下げておこうかな」と考えて、ひとまず絵描き歌と記入しておいたのが始まりです。</p>

<h1>手順１：歌詞を作る</h1>

<p>まずはScrapboxに歌詞を適当に書いていきます。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/0.png" alt="f:id:hashrock:20191215192906p:plain" title="f:id:hashrock:20191215192906p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>この時点ではリズムくらいしか決まってません。</p>

<p>絵描き歌を作るにあたって入念な調査をしています。
具体的には<a href="https://www.youtube.com/watch?v=GLi_0tX6R5Q">有名なやつ</a>を聞き込みました。</p>

<p>また、英語字幕についてはマリオ絵描き歌を参考にしました。曲がオシャレでさすが任天堂という感じです。</p>

<p><iframe width="459" height="344" src="https://www.youtube.com/embed/m43W4o6its8?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><cite class="hatena-citation"><a href="https://www.youtube.com/watch?v=m43W4o6its8">www.youtube.com</a></cite></p>

<h1>手順２：イラレの操作などを録画する</h1>

<p>イラレやVSCodeの操作を撮りためます。イラレからはSVGで書き出して、SVGをブラウザでライブプレビューしながらVSCodeで編集しています。</p>

<p>つまり<b>この動画はSVG芸</b>ということになります。</p>

<p>録画は<a href="https://forest.watch.impress.co.jp/library/software/cajamarcaeye/">カハマルカの瞳</a>です。今どきのPCならWin + Gでゲームバーでの録画が手軽ですね。</p>

<p>最初の方の操作はイラレです。昔買ったCS5をまだ使っています。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/1.png" alt="f:id:hashrock:20191215194748p:plain" title="f:id:hashrock:20191215194748p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>雨を表す斜線の始点がばらついていますが、これは <code>stroke-dasharray</code> による破線が揃いすぎないようにしています。</p>

<p>また、ペンツールと直線ツールを使い分けています。直線ツールで描画した線は <code>line</code>要素で出力されるため、CSSセレクタで直線に一括でスタイルを当てる事ができます。</p>

<p>下記が完成品です。</p>

<p class="codepen" data-height="604" data-theme-id="default" data-default-tab="html,result" data-user="hashrock" data-slug-hash="mdyrzdX" style="height: 604px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Deno for drawing song">
  <span>See the Pen <a href="https://codepen.io/hashrock/pen/mdyrzdX">
  Deno for drawing song</a> by hashrock (<a href="https://codepen.io/hashrock">@hashrock</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


<p>それはそうと、背景の黒い円を描く手順完全に飛ばしているの、気づいた人いますか？</p>

<h1>手順３：曲を作る</h1>

<p>私は<a href="https://www.mi7.co.jp/products/presonus/studioone/">Studio One</a>で作曲しています。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/2.png" alt="f:id:hashrock:20191215194140p:plain" title="f:id:hashrock:20191215194140p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>MIDIキーボードで曲をスケッチします。ずっと録音しっぱなしにしておいて、うまくいったテイクを切り貼りしたり、リズムを修正したりしています。
下記はピアノの録音結果です。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/3.png" alt="f:id:hashrock:20191215214817p:plain" title="f:id:hashrock:20191215214817p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>私はリズム感が最悪なので「クオンタイズ」という、タイミングを修正してくれる機能を常にかけています。例外はイントロとアウトロにちょっと入っている木琴の音で、少しずれているくらいが良さそうなので、クオンタイズをあえてかけていません。</p>

<p>普段の私の音楽センスだと、コード進行が複雑であればあるほど良いみたいな価値基準なのですが、
<b>denolandにはコードとか３つくらいしかなさそう</b>なので、「C」「F」「G」の３コードのみで作っています。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/4.png" alt="f:id:hashrock:20191215215053p:plain" title="f:id:hashrock:20191215215053p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>音色は Studio One に標準で付いている Presence というマルチ音源を使っています。
しかし正直音が容量の割にチープで、普段遣いはちょっと厳しいんですが、今回の場合だと全然チープで問題ないですね。普段はKontaktとの併用です。</p>

<p>Studio Oneでメロディトラックを打ち込んだら、midiファイルにエクスポートし、VOCALOIDに取り込みます。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/5.png" alt="f:id:hashrock:20191215215917p:plain" title="f:id:hashrock:20191215215917p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>歌詞を地道に入力していきます。ベタ打ちですね。世の中には神調教とかありますがそこまでしなくてもいいかなと。
不自然な部分は音長調整だけでも結構なんとかなったりします。使っているのはVOCALOID3の <a href="https://www.ah-soft.com/vocaloid/yukari/">Yukari</a> です。</p>

<p>WAV出力してStudio Oneに取り込みます。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/6.png" alt="f:id:hashrock:20191215220732p:plain" title="f:id:hashrock:20191215220732p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>ボーカルだけはコンプ・EQ・リバーブを適当にかけます。っていうかこれはプリセットだったかもしれないです。なんのこだわりもありません。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/7.png" alt="f:id:hashrock:20191215222131p:plain" title="f:id:hashrock:20191215222131p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>マスターにエフェクトをかけていきます。これはOzoneといって、それなりに高いエフェクターですが、掛けると金の匂いがする音になります。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/8.png" alt="f:id:hashrock:20191215222241p:plain" title="f:id:hashrock:20191215222241p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>これはINTENSITYというエフェクトで、半額セールで買いましたが定価が４万くらいします（買うのかなり悩みました）。掛けるとやはり金の匂いがします。</p>

<p>どちらも、AIが音源を聞いて分析してよしなにやってくれるタイプのエフェクターです。原理的なものはわかりません。
マスタリングに関してはやればやるほど自分の耳に自信がなくなってくるので、もうAIに任せてしまいたいですね。</p>

<p>エフェクトありなしでビフォーアフターの音源をアップします。</p>

<p><a href="https://www.dropbox.com/s/fk19r3ce85a7oci/denosong-pre.mp3?dl=0">Before</a> <a href="https://www.dropbox.com/s/gnbcjvz0rkeu5vx/denosong.mp3?dl=0">After</a></p>

<p>最終的にWAVファイルにレンダリングして終わりです。</p>

<h1>こぼれ話 DTMの始め方について</h1>

<p>DTM / 作曲は基本お金のかからない趣味なので結構おすすめです。ただ考えながら買わないとプラグインをセールだからって買い漁ってお金を浪費することになります（そう、私のように…）。</p>

<p>Studio Oneは軽いので使っているだけですが、どうにも内蔵音源が弱いのでStudio One以外にも色々と買うことになります。
Macならガレバンでいいと思います。内蔵音源もちゃんとしてますし。テクノが好きならFL Studioとかいいのかな。プロはCubase使ってる人が多いらしいです。
DTM製品にLite版を添付していたり、機能制限フリー版を出している場合が結構あるので、いきなり買わないほうがいいと思います。</p>

<p>Studio Oneを買うならマイク・ヘッドフォン・オーディオIF全部入りの<a href="https://www.amazon.co.jp/PreSonus-DTM%E3%82%BB%E3%83%83%E3%83%88-AudioBox-iTwo-STUDIO/dp/B00OITWAS4/">激安DTMセット</a>とか出してるので、そっちを狙っていくのもありです。どうせオーディオIFは必要になるので。</p>

<p>生楽器をやっている人は、録音して入れるとかなり打ち込み臭をカバーすることができると思います。録音のためにマイクも用意しておくとGoodです。</p>

<p>キーボードも一つあるといいです。やはり和音が出せる楽器を一つ持っておくと便利です。
私が使ってるキーボードはこれです。スペースのない人は<a href="https://www.soundhouse.co.jp/products/detail/item/162191/">nanoKEY</a>もいいですね。</p>

<p><a href="https://www.soundhouse.co.jp/products/detail/item/210571/">https://www.soundhouse.co.jp/products/detail/item/210571/</a></p>

<p>ただ、重要なのは、音楽ツール業界はブラックフライデーとかで50%OFFのセールとか急に始めたりするので、定価で買うのは少し調べてからのほうが良いです。</p>

<h1>手順４：イントロを作る</h1>

<p>イントロアニメーションはクリスタで作画しています。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/9.png" alt="f:id:hashrock:20191215205712p:plain" title="f:id:hashrock:20191215205712p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>とにかく２枚アニメーションでも作っておくと見栄えがします。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/10.gif" alt="f:id:hashrock:20191215212830g:plain" title="f:id:hashrock:20191215212830g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>今はクリスタやProcreateのような、アニメーション機能を持つペイントツールが安価に入手できていい時代だなぁと思います。
やっぱり、普段使っているペン設定やショートカットがそのまま使えるのは重要ですからね。</p>

<p>ペンタブはIntuos ProのMediumです。最近はちょっとしたものでもiPad Proで描くことのほうが多いですが、取り込むのすらだるいときはPCで描きます。</p>

<h1>手順５：動画を組む</h1>

<p>素材を組み上げていきます。私が使っているのは <a href="https://www.vegascreativesoftware.com/int/vegas-movie-studio/">Vegas</a> という動画エディタです。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/11.png" alt="f:id:hashrock:20191215210822p:plain" title="f:id:hashrock:20191215210822p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>Vegasはかつて ACID という作曲ソフトを作っていた Sonic Foundry という会社の製品です。操作系もACIDと共通しており、学習コストが低いなと思って買いました。
ちょっと今となってはUIやエフェクト、機能に古さを感じないこともないです。</p>

<p>ともかくこれしかないんで、字幕を入れたり、素材に対してのパン・ズームを設定します。最後に YouTube 向けのレンダリングをして終わりです。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/12.gif" alt="f:id:hashrock:20191215213901g:plain" title="f:id:hashrock:20191215213901g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>「ベジェカーブ　ベジェカーブ」の所でぐいっとズームを設定しているところです。バウンディングボックスですね。</p>

<h1>まとめ</h1>

<p>見返すと、わりかし色々オーサリングツールを使ってるなーと実感しました。
特にタイムラインUIへの依存度が高いですね。
ゆくゆくは、自作ツールを使っての動画作成とか、できたらいいなぁと思います。</p>

<h1>余談：ガントチャート</h1>

<p>私が複雑GUI会などで「ガントチャート」に異常に執着しているのは、こういうUIが頻出だからです。</p>

<p>Studio One ソングUI</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/13.png" alt="f:id:hashrock:20191215211436p:plain" title="f:id:hashrock:20191215211436p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>Studio One ピアノロールUI</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/14.png" alt="f:id:hashrock:20191215211512p:plain" title="f:id:hashrock:20191215211512p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>Vegasタイムライン</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/15.png" alt="f:id:hashrock:20191215211534p:plain" title="f:id:hashrock:20191215211534p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>CLIP STUDIO アニメーションタイムライン</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2019-12-15-deno-drawing-howto/16.png" alt="f:id:hashrock:20191215211609p:plain" title="f:id:hashrock:20191215211609p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>まあタイムラインUIですね…</p>

<p>常々思うのは、こういったタイムラインに対してアイテムを配置して微調整するようなUIのコントロールが今ひとつ統一が取れていないということです。
ショートカットキーやオブジェクトスナップの挙動、グリッドなんかがある程度統一されたら、お互いに乗り換えるコストが低くなるような気がしているんですよね。</p>

-----
