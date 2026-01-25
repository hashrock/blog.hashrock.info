---
title: 'リモートから鮨を送り込むコマンド'
description: ''
pubDate: 'Dec 15 2015'
---

<p><a href="http://www.adventar.org/calendars/942">SushiCorp Advent Calendar 2015</a>の15日目です。</p>

<p>新作です。
スマホをリモコンにして、手持ちのサーバにsushiを送り込めたら最高ですね。</p>

<h2>動作の様子</h2>

<p><img src="https://cloud.githubusercontent.com/assets/3132889/11778909/e9d60412-a29a-11e5-98e0-c60292c424d7.gif" alt="aic7c3bkok" /></p>

<ul>
<li>sushibtn sushi "echo sushi"とかやると、リモコンサーバが起動し、ボタンを押すとecho sushiが実行されます。</li>
<li>無駄にQRコード出力機能が備わっており実用的です。</li>
<li>makeとかをスマホから実行させると実用的かもしれません。</li>
</ul>


<h2>リポジトリ</h2>

<p><a href="https://github.com/sushicorp/sushibtn">sushicorp/sushibtn &middot; GitHub</a></p>

<h2>インストール</h2>

<pre class="code" data-lang="" data-unlink>git clone https://github.com/sushicorp/sushibtn
npm install -g .</pre>


<h2>実行方法</h2>

<pre class="code" data-lang="" data-unlink>sushibtn [ボタンのラベル名] &#34;[実行したいコマンド]&#34;</pre>


-----
