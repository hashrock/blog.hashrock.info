---
title: '静的サイトジェネレータ使い比べ'
description: ''
pubDate: 'Jun 10 2015'
---

<p>ちょっとしたサイトを作るときの「よっこいせ」感を軽減したいと思った。</p>

<p>というわけで、静的サイトジェネレータをいろいろ使い比べてみる。</p>

<h1>選定ポイント</h1>

<ul>
<li>gh-pagesへのデプロイが簡単か</li>
<li>ワークフローが短いやつがよい</li>
<li>反映速度</li>
<li>ローカルプレビュー</li>
<li>blog機能は重視しない（はてなでいいじゃん）</li>
<li>nodeもしくはgoで書かれていると助かる</li>
<li>コード量が少ないと助かる</li>
<li>コードハイライト対応可能（gfm対応）</li>
</ul>


<h1>候補</h1>

<ul>
<li>jekyll on github</li>
<li>hexo</li>
<li>hugo</li>
<li>jedie</li>
</ul>


<h1>感想</h1>

<h2>jekyll on github</h2>

<p>自動処理してくれるのは嬉しいんだけど、pluginの使用が制限されている。
また、kramdownのgfmオプションも動かなかった。</p>

<p>自動処理は10分くらい待たされるイメージだったんだが、実測してみると、小さなサイトでおおよそ10秒ほどで反映されるようになっていた。</p>

<p>jekyll自体がwindowsで動くか割と微妙なのと、そもそもjekyllのビルドはかなり遅い部類なのが微妙だ。ローカルビルドとgithub pages上のビルド環境がずれそうなのも、はまりそうで危険。</p>

<p>サンプルは以下。</p>

<p><a href="https://github.com/hashrock-sandbox/jekyll-mysite">https://github.com/hashrock-sandbox/jekyll-mysite</a></p>

<h2>hexo</h2>

<p>templateがないとビルド自体できない。templateをがっつり書くのも大変なので、今回は見送る。</p>

<p>deployコマンドがあったり、cliでのサポートが手厚いイメージはある。vuejs.orgでも使われている。</p>

<h2>hugo</h2>

<p>hexoと同じ。テンプレートのダウンロードが終わらなくてそこで利用を諦めた。</p>

<h2>jedie</h2>

<p>mattnさん作のjekyllクローン。_pagesがないとビルドできなかったりと、特定のユースに特化している印象はあるけれど、結構動いている。ビルドは0.01秒前後で終わるので、jekyll比で100倍速ぐらいだ。</p>

<p>subtree経由でのデプロイも含めると、下記のような構成になる。</p>

<p><a href="https://github.com/hashrock-sandbox/jedie-mysite-subtree">hashrock-sandbox/jedie-mysite-subtree &middot; GitHub</a></p>

<h1>感想</h1>

<p>テンプレート充実とかは、あとあと足枷になるという認識なので、あまりありがたみを感じない。ごりごり書いたほうが結局早かったりするものだ。今回のような雑なサイトをモックするという用途では、marxが便利だった。</p>

<p><blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr">あとCSSフレームワークのmarxかなり便利。こういうレイアウトなら一瞬で作れる。 <a href="http://t.co/GA7UzNV64X">http://t.co/GA7UzNV64X</a></p>&mdash; はっしゅろっく (@hashedrock) <a href="https://twitter.com/hashedrock/status/608179728151756801">2015, 6月 9</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></p>

-----
