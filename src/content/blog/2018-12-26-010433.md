---
title: 'クリスマスイブのDeno'
description: ''
pubDate: 'Dec 26 2018'
---

<p>昨日テンション上がったことを書き残しておく。</p>

<p>ここ数日で<a href="https://twitter.com/jinjor">jinjor</a>さんが<a href="https://deno.land/">Deno</a>を触り始めているのを興味深く眺めていたのだけど、すごい勢いでコード書いてるから、つい自分もdenoいじりたくなってしまって、イブにエディタを開いてしまった。</p>

<p>で、Vueの忘年会でしゅーまいさんに「Denoにないライブラリ書いたほうがいいですよ」と言われたのを思い出して、なにか書こうと思ったのだった。Denoにはライブラリがあまりないというかほぼ無である。ネタを探して<a href="https://gist.github.com/anvaka/8e8fa57c7ee1350e3491">npm rank</a>を上から見ていって、ひとまず簡単そうなものを探した。</p>

<p>最終的にURLをブラウザで開いたりするだけのライブラリ、「<a href="https://github.com/sindresorhus/opn">opn</a>」をお題に選定した。スクラッチする自信はないので移植することにした。</p>

<p>簡単そうに思えて大変苦戦した（クロスプラットフォームは本当に面倒だな！）のだけど、一応完成して、Githubで公開した。</p>

<p><iframe src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fgithub.com%2Fhashrock%2Fdeno-opn" title="hashrock/deno-opn" class="embed-card embed-webcard" scrolling="no" frameborder="0" style="display: block; width: 100%; height: 155px; max-width: 500px; margin: 10px 0px;"></iframe><cite class="hatena-citation"><a href="https://github.com/hashrock/deno-opn">github.com</a></cite></p>

<p>で、22時に公開したのだけど、その3時間後にEGOISTさんから謎のリプライが来た。</p>

<p><blockquote class="twitter-tweet" data-lang="HASH(0x1907bae0)"><p lang="und" dir="ltr"><a href="https://t.co/SghHwzFDK4">https://t.co/SghHwzFDK4</a> 😂</p>&mdash; EGOIST (@_egoistlily) <a href="https://twitter.com/_egoistlily/status/1077250394261118976?ref_src=twsrc%5Etfw">December 24, 2018</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>

<p>URLを開くとなんか自分のリポジトリのURLが書かれてるし、え、なにこれ、EGOISTさんわざわざ自分へのアドバイスかなにかをnow上に書いて送って来たの？と一瞬混乱したのだけど、１分くらい考えて</p>

<p><b>「あ、これ自分がライブラリ公開したのを見て、Denoのライブラリで便利に使えるWebサービスを作ったんだ、この3時間で！」</b></p>

<p>とわかった。しかもドメインまで取得して。</p>

<p>EGOISTさんは会ったことないし正直謎の人なんだけど、コーディングの実力と作るライブラリの多彩さは本当に人並み外れていて、尊敬しているプログラマーの一人である。図らずもクリスマスプレゼントを頂いたような気持ちになったのだった。</p>

<p>それにしてもEGOISTさんもDenoに興味あったのかーというのが驚きだった。（すごい賢い人だから、ざっとDeno見て一瞬で理解してimport URL冗長だなーってところだけ解決したのかもしれないけど）</p>

<p>jinjorさんと自分とEGOISTさんとしゅーまいさんがその日Deno絡みのコーディングしていたようだったのだけど、クリスマスイブにやることなのかどうかは完全に謎、しかし本当に楽しいんだよなー、こういうのが。</p>

<p><blockquote class="twitter-tweet" data-lang="HASH(0xeab3788)"><p lang="ja" dir="ltr">みんなクリスマスにコード書きすぎなのでは？</p>&mdash; しゅーまい (@__syumai) <a href="https://twitter.com/__syumai/status/1077252858523770882?ref_src=twsrc%5Etfw">December 24, 2018</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>

<p>おわり。</p>

-----
