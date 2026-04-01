---
title: '地獄のCSSアニメーションフレームワークを作った'
description: ''
pubDate: 'Dec 25 2020'
---

今年もイブがやってきました。特にやることもないので [毎年](https://hashrock.hatenablog.com/entry/2019/12/25/023522) [何かしら](https://hashrock.hatenablog.com/entry/2018/12/26/010433) 作っています。

今回は「シュッ、クルッ、ピョン、フワッ…」みたいに書くとアニメーションになるというアイデアを温めていたので、それを作りました。

動いているところは動画から見てください。直感的としか言いようがないと思います。


<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1342099406405869568"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>



<blockquote class="twitter-tweet"><a href="https://twitter.com/hashedrock/status/1342143002609733632"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


「直感的イコール素晴らしい」とは限らない、ということがよくわかります。

最近CSSフレームワークの[Tailwind](https://tailwindcss.com/)を触っていて、インスピレーションを受けています。

Tailwindは大量のクラスをプログラムから生成する仕組みで、巨大なCSSが生成される代わりに色々な恩恵を受けることができます。 プロダクション時にはpurgeCSSというツールを内部的に使って、Viewで利用しているCSSクラス以外を削除する仕組みです。 最初はなかなか富豪的な仕組みだなぁと驚きました。

で、今回のkanawindはプログラムから大量のクラスを生成するというところだけを真似しています。 アニメーション用のクラスは総当りで生成され、CSSのサイズは地獄の**6.8MB**です。

6.8MBも何が詰まってるのかというと、こういうやつが12万行くらい書かれています。

```css
...
.パッフワックルッ←シュッ{
    animation:
        パッ 0.25s ease-in 0s forwards,フワッ 0.25s ease-in 0.25s forwards,クルッ 0.25s ease-in 0.5s forwards,←シュッ 0.25s ease-in 0.75s forwards;
}
.パッフワックルッ↓シュッ{
    animation:
        パッ 0.25s ease-in 0s forwards,フワッ 0.25s ease-in 0.25s forwards,クルッ 0.25s ease-in 0.5s forwards,↓シュッ 0.25s ease-in 0.75s forwards;
}
.パッフワックルックルッ{
    animation:
        パッ 0.25s ease-in 0s forwards,フワッ 0.25s ease-in 0.25s forwards,クルッ 0.25s ease-in 0.5s forwards,クルッ 0.25s ease-in 0.75s forwards;
}
.パッフワックルッストン{
    animation:
        パッ 0.25s ease-in 0s forwards,フワッ 0.25s ease-in 0.25s forwards,クルッ 0.25s ease-in 0.5s forwards,ストン 0.25s ease-in 0.75s forwards;
}
...
```

誰も使わないとは思いますが、purgeCSSを通せば1mmくらいは実用になってしまう可能性があります。いろんなアプローチがあるものですね。

[https://github.com/hashrock-sandbox/kanawind](https://github.com/hashrock-sandbox/kanawind)

その他のおもしろ自作アニメーションフレームワークは下記の記事もどうぞ。自分も含め誰も使ってない。

[テキストでタイムラインアニメーションを作れるライブラリを作った - No Regrets in Bathing](https://hashrock.hatenablog.com/entry/2020/01/04/010022)

