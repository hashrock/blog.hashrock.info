---
title: 'リモートから鮨を送り込むコマンド'
description: ''
pubDate: 'Dec 15 2015'
---

[SushiCorp Advent Calendar 2015](http://www.adventar.org/calendars/942)の15日目です。

新作です。 スマホをリモコンにして、手持ちのサーバにsushiを送り込めたら最高ですね。

## 動作の様子

![aic7c3bkok](/images/2015-12-15-sushi-remote/0.gif)

- sushibtn sushi "echo sushi"とかやると、リモコンサーバが起動し、ボタンを押すとecho sushiが実行されます。
- 無駄にQRコード出力機能が備わっており実用的です。
- makeとかをスマホから実行させると実用的かもしれません。

## リポジトリ

[sushicorp/sushibtn · GitHub](https://github.com/sushicorp/sushibtn)

## インストール

```
git clone https://github.com/sushicorp/sushibtn
npm install -g .
```

## 実行方法

```
sushibtn [ボタンのラベル名] "[実行したいコマンド]"
```

\-----
