---
title: 'MeteorとVue.jsの連携'
description: ''
pubDate: 'May 06 2015'
---


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/595610741308284929"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


Qiitaに書いたのだけれど、以前作ったVue.jsとMeteorのサンプルを完成させた。 セキュリティに関する配慮が必要だったので、その辺りの修正をしてから記事として仕上げた。

isomorphic tokyo meetupで、Meteorに対して「時代が追い付いていない」という評価があったけれど、実はとっくに追いついているのではないだろうか。

リアルタイムWebとは、別にチャットアプリだけに必要なものではないような気がしている。通知にも必要だし、Wikiのように、同時編集されたら困るアプリにとっても、リアルタイムWebは複雑さを解決する方法となりうる。

作り始めた時には、いつリアルタイムWebが必要なのかは予想がつかない。そう考えると、プロトタイピングはまずリアルタイムWebで行い、リソース削減のためにRESTベースのAPIに落としこんで行く方がいいのかもしれない。

普通の企業はプロトタイピングを重視しない。だから、個人としてはプロトタイピングを掘り下げる方がきっと面白い。

\-----
