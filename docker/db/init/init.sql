-- DB切り替え
\c "doer"

--テーブルを作成
CREATE TABLE "hello" (
  "id"       SERIAL NOT NULL, 
  "name"     VARCHAR(255) NOT NULL,
  PRIMARY KEY("id")
);

CREATE TABLE "rooms" (
  "id"            SERIAL NOT NULL, 
  "name"          VARCHAR(255) NOT NULL,
  "max_count"     INTEGER NOT NULL,
  PRIMARY KEY("id")
);


-- --テーブルにデータを挿入
INSERT INTO rooms ("name", "max_count") 
VALUES ('doer', 12);

INSERT INTO rooms ("name","max_count") 
VALUES ('doshisha', 10);