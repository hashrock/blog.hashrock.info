---
title: 'vue-cliでビルドしたプロジェクトをgh-pagesにデプロイする'
description: ''
pubDate: 'Feb 27 2018'
---

vue-cliでcreateしたプロジェクトは、そのままビルドすると、出力された`dist/index.html`が`/js/vendor.a58fe84b.js`のように、絶対パスでアセットを読みに行く。

基本的にはこれで構わないケースが大半だけれど、Github Pagesにデプロイしたい場合は例外で、プロジェクト名と同じサブディレクトリ下に配置されてしまう。そうなると絶対パスから見に行くと404になってしまい、ページは動作しない。

# 相対パスからアセットを読みに行くようにする

こういったケースはbaseUrlオプションを設定することで回避出来る。下記のファイルを作成する。

`vue.config.js`

```
module.exports = {
  baseUrl: "./"
};
```

こうすると、（先の例でいうと）index.htmlが`./js/vendor.a58fe84b.js`を読みに行くようになる。

アセットが色々存在するケースでは確認していないので、これではダメなケースもあるかもしれない。

vue.config.jsについては[公式のドキュメント](https://github.com/vuejs/vue-cli/blob/9040df84cb6f98b9665d957d0242f1a6075bad37/docs/config.md)を参照のこと。

# デプロイ

デプロイはどうするかというと、gh-pagesというツールを入れるのが楽。

```sh
#インストール
$ yarn add gh-pages --dev
```

でインストールした後、package.jsonのscriptsに下記の行を追加する。

```
"deploy": "gh-pages -d dist"
```

あとは`yarn deploy`を実行するだけ。

動きとしては、まっさらなgh-pagesブランチを作成して、dist下のファイルをすべて配置するのと同じになる。

Github pagesはmasterやdocsフォルダをそのままWebページとして公開出来るように最近なっているが、ビルド成果物をコミットに含めたくない場合は、firebase hostingのようなホスティングサービスを使うか、旧来のgh-pagesブランチを使う形にするのが良いと思う。ちなみにこのやり方はegoist先生がやってたやり方。

