---
title: 'Node.jsの次にDenoを使いたい'
description: ''
pubDate: 'Dec 04 2018'
heroImage: '/images/2018-12-04-deno-intro/0.png'
---

Node.jsの作者Ryan Dahlが作った「[Deno](https://github.com/denoland/deno)」が面白くて、最近追っかけている。

TypeScript版Node.jsというのが雑な説明になる。yosuke-furukawaさんの下記の記事が詳しい。

[https://yosuke-furukawa.hatenablog.com/entry/2018/06/07/080335](https://yosuke-furukawa.hatenablog.com/entry/2018/06/07/080335)

ES Modules周りとnpmのことも考えると、まっさらから再設計したほうがスッキリしてて気持ちいいというのと、単にTypeScriptが好きというのもあるけど、今追っかけている理由は、Denoがセキュリティ的にいい感じに見えるからだったりする。

# flatmap-stream事件

[https://qiita.com/mysticatea/items/aac027f9183ea9f0f9b1](https://qiita.com/mysticatea/items/aac027f9183ea9f0f9b1)

npmパッケージがビットコインの窃盗に利用される（未遂）という事件がつい先日発生した。

これははっきり言って防ぎようがない事件で、minifyしたコード内に埋められてもその差分に誰が気づくんだという話である。むしろこれによく気づいたな・・・という印象。見過ごされていてもおかしくない。

この件、自分は攻撃者以外の全員がかわいそうだな…と思った。作者がOSSに対して過大な責任を負うのも違うし、OSSのコミット権渡すときも他人の善意を疑いたくない。npm側ができることも限られている。

しかし、気軽に小さなライブラリに依存してしまう文化は、ライブラリの作者に大きな責任を負わせてしまう。

これは、誰かの努力じゃなく仕組みで解決したい問題だ。

# 信用できないコードを実行する

Denoの[ロードマップ](https://github.com/denoland/deno/blob/master/Roadmap.md)には下記のように書かれている。

> We want to be secure by default; user should be able to run untrusted code, like the web. 「Webのように」信頼されていないコードをユーザが実行できるように、デフォルトでセキュアにしたい。

「コードを信用しないままに実行する」というのは今までブラウザがずっとやってきたことだ。サンドボックスがあり、ファイルへの書き込みのような危険な処理にはユーザへの承認を求める。

Denoは「脅威」として下記の２つを挙げている。

- ローカルファイルの変更や削除
- 情報漏えい

それを防ぐために、下記をデフォルトで禁止している。

- ネットワークアクセス
- ローカルファイルへのWrite
- JS以外の拡張
- サブプロセス
- 環境変数へのアクセス

ファイル読み込みは許可しているのは面白いところだ。ローカルファイルを読めたところで、ネットワークアクセスがなければ漏洩することはできないので、問題ないという考えだろうか。

**※2018/12/04 16:30訂正**

[現在は --allow-read フラグを追加する方向で話が進んでいる](https://github.com/denoland/deno/issues/1225)ため、ファイルの読み込みもデフォルトは禁止になる見込みだそうです。Thanks: [@kt3k](https://twitter.com/kt3k)

Denoはまだまだ開発途上ではあるけど、すでに簡単なHTTPサーバを書くことが可能になっている。

```typescript
import { serve } from "https://deno.land/x/net/http.ts";
const s = serve("0.0.0.0:8000");

async function main() {
  for await (const req of s) {
    req.respond({ body: new TextEncoder().encode("Hello World\n") });
  }
}

main();
```

このコードを実行すると、下記のようなプロンプトが表示される。

![f:id:hashrock:20181204004036p:plain](/images/2018-12-04-deno-intro/0.png)

面倒なようだけど、これから必要になることかもしれない。

