# server

## API

room作成用API
```
/new/rooms/
```

<br>

websoket roomID 指定
```
ws?room=<id>
```

<br>


// memo

websocketは状態管理に使う

ほかのデータはすべて普通にAPIでやりとり



https://blog.narumium.net/2019/07/11/%E3%80%90go%E3%80%91websocket%E3%81%AB%E3%82%88%E3%82%8B%E9%80%9A%E4%BF%A1/


## 必要なAPIメモ
- room作成API (/new/room)
- ユーザー登録API (/new/user?room=id)
- roomのすべてのユーザー取得API
