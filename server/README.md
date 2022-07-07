# server

## API

room作成用API
必須: formにnameとmax_countパラメータ

```
$ POST /new/room/
```

reponse
```
{
    "data": {
        "id": "24ff75a27af7ace1027d0ed00beee850c7223e91c5cc46a7b1bef64f74fc966e",
        "name": "doer交流会",
        "max_count": 12
    }
}
```

<br>

<!-- websoket roomID 指定
```
ws?room=<id>
```

<br>
 -->
