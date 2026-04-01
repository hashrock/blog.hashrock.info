---
title: 'テキストでタイムラインアニメーションを作れるライブラリを作った'
description: ''
pubDate: 'Jan 04 2020'
heroImage: '/images/2020-01-04-timeline-animation/0.png'
---

<p><code>0----1----2---</code> みたいな形式のテキストでタイムラインアニメーションを作れるライブラリを作りました。</p>

<p>しゅうまいさんと<a href="https://twitter.com/__syumai/status/1212993753264222209">「Webでタイムラインアニメーションを作るのがだるい」的な話をしていて</a>、
AAみたいな発想で楽をできないかなと思ったのが発端になっています。</p>

<p>まずは下記のデモを見てください。</p>

<p class="codepen" data-height="536" data-theme-id="default" data-default-tab="js,result" data-user="hashrock" data-slug-hash="mdyqBoN" style="height: 536px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="TimelineDown Example">
  <span>See the Pen <a href="https://codepen.io/hashrock/pen/mdyqBoN">
  TimelineDown Example</a> by hashrock (<a href="https://codepen.io/hashrock">@hashrock</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


<p>下記の文字列を渡すことで、４つの絵文字がそれぞれ個別のアニメーションをします。</p>

<pre class="code" data-lang="" data-unlink>const p1 = &#34;--------0----1--2-------&#34;;
const p2 = &#34;---------0----1--2------&#34;;
const p3 = &#34;----------0----1--2-----&#34;;
const p4 = &#34;---------------0----1--2&#34;;</pre>


<p>上記文字列はFlashでいう「タイムラインUI」をアスキーアート的に表現したものです。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2020-01-04-timeline-animation/0.png" alt="f:id:hashrock:20200104002929p:plain" title="f:id:hashrock:20200104002929p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>（画像は<a href="https://helpx.adobe.com/jp/animate/using/frames-keyframes.html">Adobe Animate CC &#x3067;&#x30D5;&#x30EC;&#x30FC;&#x30E0;&#x3068;&#x30AD;&#x30FC;&#x30D5;&#x30EC;&#x30FC;&#x30E0;&#x3092;&#x4F7F;&#x7528;&#x3059;&#x308B;&#x65B9;&#x6CD5;</a>より引用。CC BY-NC-SA）</p>

<p>こういうタイムラインアニメーションを作るには、今どきだとAfterEffectsなどの専用ツールを使うわけですが、
テキストだけで作れるんであれば、エディタから離れずにタイミング調整ができるのでプログラマーは嬉しいわけです。</p>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2020-01-04-timeline-animation/1.gif" alt="f:id:hashrock:20200104010451g:plain" title="f:id:hashrock:20200104010451g:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>中身はどうなっているかというと、定番アニメーションライブラリGSAPの<a href="https://greensock.com/docs/v2/TimelineMax">TimelineMax</a>をラップしています。
テキストをパースしてTimelineを生成しているだけで実装はほぼすっからかんです。
できることや渡せるオプションはTimelineMaxとほぼ同じと考えてください。</p>

<h1>使い方</h1>

<p>下記のコードをインポートします。</p>

<pre class="code" data-lang="" data-unlink>&lt;script src=&#34;//cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js&#34;&gt;&lt;/script&gt;
&lt;script src=&#34;https://cdn.jsdelivr.net/npm/@hashrock/timelinedown@1.0.3/index.browser.js&#34;&gt;&lt;/script&gt;</pre>


<p>使っているところは下記のような感じです。</p>

<pre class="code lang-javascript" data-lang="javascript" data-unlink>
<span class="synComment">// タイムラインを定義する。</span>
<span class="synComment">// 文字一つが0.1秒を表す。「-」は休符のようなもの。</span>
<span class="synComment">// 数字の文字に到達したら、後述のキーフレームによりアニメーションが起きる。</span>
<span class="synStatement">const</span> str = <span class="synConstant">&quot;------------0----1--2&quot;</span>;

<span class="synComment">// キーフレームを定義する。</span>
<span class="synComment">// 配列の１つ目が「0」の文字にアサインされる。</span>
<span class="synComment">// easeにはGSAPのイージング関数を指定することができる。</span>
<span class="synComment">// （この場合はバウンドする）</span>
<span class="synStatement">const</span> keyframes = <span class="synIdentifier">[</span>
  <span class="synIdentifier">{</span> x: 200 <span class="synIdentifier">}</span>,
  <span class="synIdentifier">{</span> y: 200, ease: Bounce.easeOut <span class="synIdentifier">}</span>,
  <span class="synIdentifier">{</span> opacity: 0 <span class="synIdentifier">}</span>
<span class="synIdentifier">]</span>;

<span class="synComment">// セレクタ、タイムライン文字列、キーフレーム、オプションを順に渡す。</span>
<span class="synComment">// この場合は「obj」というidの要素にアニメーションがかかる。</span>
<span class="synComment">// オプションに `frameDuration` を渡すと、1フレームあたりの時間が設定できる（デフォルト0.1秒）。</span>
<span class="synComment">// それ以外はTimelineMaxに準じる。</span>
<span class="synStatement">const</span> tl = timelineDown(<span class="synConstant">&quot;#obj&quot;</span>, str, keyframes, <span class="synIdentifier">{</span>
  repeat: 99,
  frameDuration: 0.1
<span class="synIdentifier">}</span>);
</pre>


<h1>リポジトリ</h1>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Fhashrock%2FtimelineDown" title="hashrock/timelineDown" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://github.com/hashrock/timelineDown">github.com</a></cite></p>

<p>実務で使ったわけではないので、実用になるかわかりませんが、気が向いたら自分でも使ってみます。</p>

<h1>着想元</h1>

<p><span itemscope itemtype="http://schema.org/Photograph"><img src="/images/2020-01-04-timeline-animation/2.png" alt="f:id:hashrock:20200104005406p:plain" title="f:id:hashrock:20200104005406p:plain" class="hatena-fotolife" itemprop="image"></span></p>

<p>CLIP STUDIOのアニメ機能で、各コマの対応レイヤを数字で指定するのが着想元になっています。
なんかワイルドなUIだなと最初思ったのですが、使っていくとこれが一番使いやすいし、コマの使いまわしができて効率的なんですよね。最近のイチオシUIでした。</p>

<h1>更新（2020/01/05）</h1>

<p>HTMLのdata属性経由でもアニメーションを設定できるようになりました。</p>

<p class="codepen" data-height="538" data-theme-id="default" data-default-tab="html,result" data-user="hashrock" data-slug-hash="JjoOqYJ" style="height: 538px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="TimelineDown Example Attach">
  <span>See the Pen <a href="https://codepen.io/hashrock/pen/JjoOqYJ">
  TimelineDown Example Attach</a> by hashrock (<a href="https://codepen.io/hashrock">@hashrock</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


-----
