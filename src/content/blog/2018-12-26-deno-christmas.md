---
title: 'クリスマスイブのDeno'
description: ''
pubDate: 'Dec 26 2018'
---

昨日テンション上がったことを書き残しておく。

ここ数日で[jinjor](https://twitter.com/jinjor)さんが[Deno](https://deno.land/)を触り始めているのを興味深く眺めていたのだけど、すごい勢いでコード書いてるから、つい自分もdenoいじりたくなってしまって、イブにエディタを開いてしまった。

で、Vueの忘年会でしゅーまいさんに「Denoにないライブラリ書いたほうがいいですよ」と言われたのを思い出して、なにか書こうと思ったのだった。Denoにはライブラリがあまりないというかほぼ無である。ネタを探して[npm rank](https://gist.github.com/anvaka/8e8fa57c7ee1350e3491)を上から見ていって、ひとまず簡単そうなものを探した。

最終的にURLをブラウザで開いたりするだけのライブラリ、「[opn](https://github.com/sindresorhus/opn)」をお題に選定した。スクラッチする自信はないので移植することにした。

簡単そうに思えて大変苦戦した（クロスプラットフォームは本当に面倒だな！）のだけど、一応完成して、Githubで公開した。

[https://github.com/hashrock/deno-opn](https://github.com/hashrock/deno-opn)

で、22時に公開したのだけど、その3時間後にEGOISTさんから謎のリプライが来た。

<blockquote class="twitter-tweet"><a href="https://twitter.com/_egoistlily/status/1077250394261118976"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

URLを開くとなんか自分のリポジトリのURLが書かれてるし、え、なにこれ、EGOISTさんわざわざ自分へのアドバイスかなにかをnow上に書いて送って来たの？と一瞬混乱したのだけど、１分くらい考えて

**「あ、これ自分がライブラリ公開したのを見て、Denoのライブラリで便利に使えるWebサービスを作ったんだ、この3時間で！」**

とわかった。しかもドメインまで取得して。

EGOISTさんは会ったことないし正直謎の人なんだけど、コーディングの実力と作るライブラリの多彩さは本当に人並み外れていて、尊敬しているプログラマーの一人である。図らずもクリスマスプレゼントを頂いたような気持ちになったのだった。

それにしてもEGOISTさんもDenoに興味あったのかーというのが驚きだった。（すごい賢い人だから、ざっとDeno見て一瞬で理解してimport URL冗長だなーってところだけ解決したのかもしれないけど）

jinjorさんと自分とEGOISTさんとしゅーまいさんがその日Deno絡みのコーディングしていたようだったのだけど、クリスマスイブにやることなのかどうかは完全に謎、しかし本当に楽しいんだよなー、こういうのが。

<blockquote class="twitter-tweet"><a href="https://twitter.com/__syumai/status/1077252858523770882"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

おわり。

\-----
