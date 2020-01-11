# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...



# time_is_money_1
このアプリは名前の通り、時間を金額に換算して可視化するアプリです。
例えば自分の時間給を入力して、（無職の方は前職の時間給でもよし。）スタートボタンを押すと、1秒ごとに時間給が蓄積さていき、ストップしてボタンを押すまでカウントし続けます。背景画像がフェードで変更されるのですがその時の時間給で買えるものを表示しています。（画像に関しては今後ユーザーが自分で値段とimageを設定できるような実装をします）


![PAK95_sunadokei20141018123010_TP_V](https://user-images.githubusercontent.com/56024807/72201489-e67ed800-3497-11ea-9280-c31b9baaf09d.jpg)

# Dependency
使用言語
rails 5.0.7.2
HTML
CSS
JavaScript
Jquery 4.3.5

# Setup
セットアップは特にありません

# Usage
selectboxから自分の※収入区分を選び、それに対する現在の時間給をformに入力して、（無職の方は前職の時間給でも可。）作業開始ボタンを押す。止める時や一時停止するときは作業終了ボタン。再開するときは作業再開ボタンをおす。
もう一度最初から利用するときはリセットボタンで消えます。

※月給は月に23日8時間稼働、日給は、8時間稼働の総収入として計算します。


# References
参考にした情報源（サイト・論文）などの情報、リンク
使用した背景画像のフェードで使用したプラグイン、bgswcherの使い方など→ https://fit-jp.com/bgswitcher/

# 今後
ネイティブアプリを目指して作成していたため現在はwebアプリですが、機能を実装完成させてリリースするつもりです。





