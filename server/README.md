# server

# API

<br>

## room作成用API

```
$ POST http://localhost:8080/new/room/
```

#### FormData

- name(ルーム名) **必須**
- max_count(部屋の最大人数) **必須**

<br>

(例)reponse
```
{
    "data": {
        "id": "649e9506c8b069296e6f68a24941fbc42c6d58b5f0b08f2c4b78d0787021dc7a",
        "name": "doer交流会 2022/8/22",
        "max_count": 3,
        "status": "created",
        "created_at": "2022-07-09T14:37:34.153094011+09:00"
    }
}
```

<br><br>


## 新規メンバー追加

```
$ POST http://localhost:8080/member/new?room=roomID
```


#### FormData

- name(メンバー名) **必須**
- comment(ひとことコメント)
- lang(プログラミング言語)
- github(user名)
- twitter(user名)
- question(質問) **必須**


#### QueryParam

- roomID **必須**

<br>

(例)
```
$ POST http://localhost:8080/member/new?room=0302f979e03b23eea6ffb7c1b574ba53d1c1b9ad490ae0d8e2cd784036ee1822
```

 ```
{
    "data": {
        "id": 8,
        "name": "doer",
        "comment": "",
        "lang": "",
        "github": "",
        "twitter": "",
        "question": "hello",
        "room": "0302f979e03b23eea6ffb7c1b574ba53d1c1b9ad490ae0d8e2cd784036ee1822"
    }
}
```

<br><br>


## 指定したIDのRoomを取得するAPI

```
$ GET http://localhost:8080/room/:roomID
```

**必須** : roomID

<br>

(例)
```
$ GET http://localhost:8080/room/649e9506c8b069296e6f68a24941fbc42c6d58b5f0b08f2c4b78d0787021dc7a
```

```
{
    "data": {
        "id": "649e9506c8b069296e6f68a24941fbc42c6d58b5f0b08f2c4b78d0787021dc7a",
        "name": "doer交流会 2022/8/22",
        "max_count": 3,
        "status": "created",
        "created_at": "2022-07-09T14:37:34.153094Z"
    }
}
```

<br><br>


## Roomのメンバーを取得するAPI

```
$ POST http://localhost:8080/member/all?room=roomID
```

#### QueryParam

- roomID **必須**

<br>

(例)
```
$ GET http://localhost:8080/member/all?room=649e9506c8b069296e6f68a24941fbc42c6d58b5f0b08f2c4b78d0787021dc7a
```

```
{
    "data": [
        {
            "id": 6,
            "name": "doer",
            "comment": "",
            "lang": "",
            "github": "",
            "twitter": "",
            "question": "hello",
            "room": "0302f979e03b23eea6ffb7c1b574ba53d1c1b9ad490ae0d8e2cd784036ee1822"
        },
        {
            "id": 7,
            "name": "doer",
            "comment": "",
            "lang": "",
            "github": "",
            "twitter": "",
            "question": "hello",
            "room": "0302f979e03b23eea6ffb7c1b574ba53d1c1b9ad490ae0d8e2cd784036ee1822"
        },
        {
            "id": 8,
            "name": "doer",
            "comment": "",
            "lang": "",
            "github": "",
            "twitter": "",
            "question": "hello",
            "room": "0302f979e03b23eea6ffb7c1b574ba53d1c1b9ad490ae0d8e2cd784036ee1822"
        }
    ]
}
```