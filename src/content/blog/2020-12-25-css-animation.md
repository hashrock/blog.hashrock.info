---
title: '地獄のCSSアニメーションフレームワークを作った'
description: ''
pubDate: 'Dec 25 2020'
---

<p>今年もイブがやってきました。特にやることもないので <a href="https://hashrock.hatenablog.com/entry/2019/12/25/023522">毎年</a> <a href="https://hashrock.hatenablog.com/entry/2018/12/26/010433">何かしら</a> 作っています。</p>

<p>今回は「シュッ、クルッ、ピョン、フワッ…」みたいに書くとアニメーションになるというアイデアを温めていたので、それを作りました。</p>

<p>動いているところは動画から見てください。直感的としか言いようがないと思います。</p>

<p><blockquote data-conversation="none" class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">tailwindにわずかに影響を受けたCSSフレームワーク作ってた <a href="https://t.co/oNUvB70Y0R">pic.twitter.com/oNUvB70Y0R</a></p>&mdash; hashrock (@hashedrock) <a href="https://twitter.com/hashedrock/status/1342099406405869568?ref_src=twsrc%5Etfw">2020年12月24日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> </p>

<p><blockquote data-conversation="none" class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">できた、直感的なCSSアニメーションフレームワークが <a href="https://t.co/QyiAvKxo7A">pic.twitter.com/QyiAvKxo7A</a></p>&mdash; hashrock (@hashedrock) <a href="https://twitter.com/hashedrock/status/1342143002609733632?ref_src=twsrc%5Etfw">2020年12月24日</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> </p>

<p>「直感的イコール素晴らしい」とは限らない、ということがよくわかります。</p>

<p>最近CSSフレームワークの<a href="https://tailwindcss.com/">Tailwind</a>を触っていて、インスピレーションを受けています。</p>

<p>Tailwindは大量のクラスをプログラムから生成する仕組みで、巨大なCSSが生成される代わりに色々な恩恵を受けることができます。
プロダクション時にはpurgeCSSというツールを内部的に使って、Viewで利用しているCSSクラス以外を削除する仕組みです。
最初はなかなか富豪的な仕組みだなぁと驚きました。</p>

<p>で、今回のkanawindはプログラムから大量のクラスを生成するというところだけを真似しています。
アニメーション用のクラスは総当りで生成され、CSSのサイズは地獄の<b>6.8MB</b>です。</p>

<p>6.8MBも何が詰まってるのかというと、こういうやつが12万行くらい書かれています。</p>

<pre class="code lang-css" data-lang="css" data-unlink>...
.パッフワックルッ←シュッ<span class="synIdentifier">{</span>
    <span class="synType">animation</span>:
        パッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>フワッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.25s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>クルッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.5s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>←シュッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.75s</span> <span class="synConstant">forwards</span>;
<span class="synIdentifier">}</span>
.パッフワックルッ↓シュッ<span class="synIdentifier">{</span>
    <span class="synType">animation</span>:
        パッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>フワッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.25s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>クルッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.5s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>↓シュッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.75s</span> <span class="synConstant">forwards</span>;
<span class="synIdentifier">}</span>
.パッフワックルックルッ<span class="synIdentifier">{</span>
    <span class="synType">animation</span>:
        パッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>フワッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.25s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>クルッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.5s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>クルッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.75s</span> <span class="synConstant">forwards</span>;
<span class="synIdentifier">}</span>
.パッフワックルッストン<span class="synIdentifier">{</span>
    <span class="synType">animation</span>:
        パッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>フワッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.25s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>クルッ <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.5s</span> <span class="synConstant">forwards</span><span class="synSpecial">,</span>ストン <span class="synConstant">0.25s</span> <span class="synConstant">ease-in</span> <span class="synConstant">0.75s</span> <span class="synConstant">forwards</span>;
<span class="synIdentifier">}</span>
...
</pre>


<p>誰も使わないとは思いますが、purgeCSSを通せば1mmくらいは実用になってしまう可能性があります。いろんなアプローチがあるものですね。</p>

<p><a href="https://github.com/hashrock-sandbox/kanawind">https://github.com/hashrock-sandbox/kanawind</a></p>

<p>その他のおもしろ自作アニメーションフレームワークは下記の記事もどうぞ。自分も含め誰も使ってない。</p>

<p><a href="https://hashrock.hatenablog.com/entry/2020/01/04/010022">https://hashrock.hatenablog.com/entry/2020/01/04/010022</a></p>

-----
