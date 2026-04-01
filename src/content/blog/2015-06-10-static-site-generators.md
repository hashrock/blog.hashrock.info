---
title: '静的サイトジェネレータ使い比べ'
description: ''
pubDate: 'Jun 10 2015'
---

ちょっとしたサイトを作るときの「よっこいせ」感を軽減したいと思った。

というわけで、静的サイトジェネレータをいろいろ使い比べてみる。

# 選定ポイント

- gh-pagesへのデプロイが簡単か
- ワークフローが短いやつがよい
- 反映速度
- ローカルプレビュー
- blog機能は重視しない（はてなでいいじゃん）
- nodeもしくはgoで書かれていると助かる
- コード量が少ないと助かる
- コードハイライト対応可能（gfm対応）

# 候補

- jekyll on github
- hexo
- hugo
- jedie

# 感想

## jekyll on github

自動処理してくれるのは嬉しいんだけど、pluginの使用が制限されている。 また、kramdownのgfmオプションも動かなかった。

自動処理は10分くらい待たされるイメージだったんだが、実測してみると、小さなサイトでおおよそ10秒ほどで反映されるようになっていた。

jekyll自体がwindowsで動くか割と微妙なのと、そもそもjekyllのビルドはかなり遅い部類なのが微妙だ。ローカルビルドとgithub pages上のビルド環境がずれそうなのも、はまりそうで危険。

サンプルは以下。

[https://github.com/hashrock-sandbox/jekyll-mysite](https://github.com/hashrock-sandbox/jekyll-mysite)

## hexo

templateがないとビルド自体できない。templateをがっつり書くのも大変なので、今回は見送る。

deployコマンドがあったり、cliでのサポートが手厚いイメージはある。vuejs.orgでも使われている。

## hugo

hexoと同じ。テンプレートのダウンロードが終わらなくてそこで利用を諦めた。

## jedie

mattnさん作のjekyllクローン。\_pagesがないとビルドできなかったりと、特定のユースに特化している印象はあるけれど、結構動いている。ビルドは0.01秒前後で終わるので、jekyll比で100倍速ぐらいだ。

subtree経由でのデプロイも含めると、下記のような構成になる。

[hashrock-sandbox/jedie-mysite-subtree · GitHub](https://github.com/hashrock-sandbox/jedie-mysite-subtree)

# 感想

テンプレート充実とかは、あとあと足枷になるという認識なので、あまりありがたみを感じない。ごりごり書いたほうが結局早かったりするものだ。今回のような雑なサイトをモックするという用途では、marxが便利だった。


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/608179728151756801"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


\-----
