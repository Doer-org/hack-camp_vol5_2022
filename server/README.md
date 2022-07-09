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
- age(年齢) **必須**
- gender(性別)
- github(user名)
- twitter(user名)
- question(質問) **必須**


#### QueryParam

- roomID **必須**

<br>

(例)
```
$ POST http://localhost:8080/member/new?room=649e9506c8b069296e6f68a24941fbc42c6d58b5f0b08f2c4b78d0787021dc7a
```

 ```
{
    "data": {
        "id": 1,
        "name": "doer",
        "age": 12,
        "gender": "",
        "github": "",
        "twitter": "",
        "question": "好きな言語は？",
        "room": "649e9506c8b069296e6f68a24941fbc42c6d58b5f0b08f2c4b78d0787021dc7a"
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
            "id": 1,
            "name": "doer",
            "age": 12,
            "gender": "",
            "github": "",
            "twitter": "",
            "question": "好きな言語は？",
            "room": "649e9506c8b069296e6f68a24941fbc42c6d58b5f0b08f2c4b78d0787021dc7a"
        },
        {
            "id": 2,
            "name": "doer",
            "age": 12,
            "gender": "",
            "github": "",
            "twitter": "",
            "question": "好きな言語は？",
            "room": "649e9506c8b069296e6f68a24941fbc42c6d58b5f0b08f2c4b78d0787021dc7a"
        },
        {
            "id": 3,
            "name": "doer",
            "age": 12,
            "gender": "",
            "github": "",
            "twitter": "",
            "question": "好きな言語は？",
            "room": "649e9506c8b069296e6f68a24941fbc42c6d58b5f0b08f2c4b78d0787021dc7a"
        },
        {
            "id": 4,
            "name": "doer",
            "age": 12,
            "gender": "",
            "github": "",
            "twitter": "",
            "question": "好きな言語は？",
            "room": "649e9506c8b069296e6f68a24941fbc42c6d58b5f0b08f2c4b78d0787021dc7a"
        },
        {
            "id": 5,
            "name": "doer",
            "age": 12,
            "gender": "",
            "github": "",
            "twitter": "",
            "question": "好きな言語は？",
            "room": "649e9506c8b069296e6f68a24941fbc42c6d58b5f0b08f2c4b78d0787021dc7a"
        }
    ]
}
```