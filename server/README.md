# server

## API

### room作成用API　　

**必須** : formにnameとmax_countパラメータ

```
$ POST http://localhost:8080/new/room/
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
 
 
 ### 全てのroom取得用API　　

 ```
 $ GET http://localhost:8080/room/all
 ```
 
 response
 ```
 {
"data": [
{
"id": "aaaaa",
"name": "doer",
"max_count": 12,
"status": "created"
},
{
"id": "aadfsfd",
"name": "doshisha",
"max_count": 10,
"status": "created"
},
{
"id": "dfsdf",
"name": "飲み会",
"max_count": 4,
"status": "created"
},
{
"id": "97a59a6cd6c33e9dd761a076ca296416e869d1ea3fdf5b4a70051fec9d729e01",
"name": "Doer飲み会",
"max_count": 20,
"status": "created"
}
]
}
 ```
 <br>

<!-- websoket roomID 指定
```

```

<br>
 -->
 
 
  ### roomのID取得用API　　
  
  **必須** : id
  
  ```
  $ GET http://localhost:8080/room/:id
  ```
  
  ex.) id = aaaaa
  
  response
 ```
 {
"data": {
"id": "aaaaa",
"name": "doer",
"max_count": 12,
"status": "created"
}
}
 ```
 
 ### ユーザー登録API　（新しいメンバー作成）
 
 **必要** : formのname, age, gender, github, twitter　のkeyに対応するvalue　とroomの名前（nameとageとroomは必須）
 
  ```
  $ POST http://localhost:8080/member/new?room=roomId
  ```
  
  ex.)$ POST http://localhost:8080/member/new?room=97a59a6cd6c33e9dd761a076ca296416e869d1ea3fdf5b4a70051fec9d729e01
  
  
  ![image](https://user-images.githubusercontent.com/106072372/177939722-4c5da565-eda3-4395-a27a-8dfc75c42761.png)

return
  ```
  {
    "data": {
        "id": 7,
        "name": "晃大",
        "age": 21,
        "gender": "",
        "github": "",
        "twitter": "",
        "room": "97a59a6cd6c33e9dd761a076ca296416e869d1ea3fdf5b4a70051fec9d729e01"
    }
}
  ```
  
 
