# hack-camp_vol5_2022
### Date

2022/7/9 ~ 7/10

<br>

### About

[技育CAMP vol.5](https://talent.supporterz.jp/events/17333219-d4ad-4623-b735-ce0e7656f52f/) 用のリポジトリです

テーマは「**世の中を楽しくする**」を選びました

<img width="600px" src="https://img.esa.io/uploads/production/attachments/19248/2022/07/09/130878/d1b0066a-7e2c-4da1-afcc-5b6bf8e7d878.png" />

<br>

結果！！

### 7/10の結果発表までお待ちください！

### アプリ

このアプリは「自己紹介」×「」をテーマにした

#### 「[](URL)」というアプリです！

<br>

デプロイ先はこちら


URL

(注意 : backendがherokuの無料枠のため、データが返ってくるまで**時間がかかる**場合があります)

<br>

### 機能
<!-- 
- **感情と予算**から、おかしのレコメンド
- アニメーション機能
- **運がいいほど**お菓子への愛を伝えられるいいね機能
- 深夜0時から2時にサイトが**変貌する**仕様 -->

<br>
 
## member

<table>
  <tr>
    <th>開発人数</th>
    <td>
      4人<br>
      <b><a href="https://github.com/mahiro72"><img src="https://github.com/mahiro72.png" width="50px;" /></b>
      <b><a href="https://github.com/Kouta-fd"><img src="https://github.com/Kouta-fd.png" width="50px;" /></b>
      <b><a href="https://github.com/YagiAyana"><img src="https://github.com/YagiAyana.png" width="50px;" /></b>
      <b><a href="https://github.com/hikari-8"><img src="https://github.com/hikari-8.png" width="50px;" /></b>
    </td>
  </tr>
  <tr>
    <th>担当</th>
    <td>
      <a href="https://github.com/mahiro72">@mahiro72</a> : backend / infra, server<br>
      <a href="https://github.com/Kouta-fd">@Kouta-fd</a> : frontend / design <br>
      <a href="https://github.com/YagiAyana">@YagiAyana</a> : frontend / design <br>
      <a href="https://github.com/hikari-8">@hikari-8</a> : backend / server<br>
    </td>
  </tr>
</table>

<br>
       
## slide
       
<img width="600px" src=" "></img>
        

       
スライドURL
       
<br>
        
## 技術スタック
     
        
<img width="600px" src="https://user-images.githubusercontent.com/70263039/174619831-b994961f-f2f9-478e-9027-4a917bd3b648.png" />
        
<br>
        
## Getting Started

```docker-compose.env```をトップディレクトリに用意する
       
詳しくはトップディレクトリの```docker-compose.env.sample```をご覧ください

例
```
POSTGRES_USER=<USERNAME>
POSTGRES_PASSWORD=<PASSWORD>
PGPASSWORD=<PASSWORD>
POSTGRES_DB=<DBNAME>
TZ=<TIMEZONE>
PORT=<PORT>
```

<br>

## Make

docker-compose 環境を立ち上げます

```
make
```

<br>

dbやcacheは保持したまま再起動

```
make restart
```

<br>

dbやcacheも削除してから再起動

```
make re
```


<br>

docker環境のdbにアクセスします

```
make attach-db
```

<br>

lint

```
make lint
```

<br>
       
do'erからのメッセージ

```
make doer
```

<br>
       
## deploy
       
### backend heroku (branch: release)

herokuでserver以下をデプロイしてます

```
git subtree push --prefix server/ heroku master
```

<br>
       
### frontend vercel (branch: release-front)

vercelでfront以下をデプロイしてます

<br>


## reference
<!-- - [](URL) -->