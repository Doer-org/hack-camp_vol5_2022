-- DB切り替え
\c "test"

--テーブルを作成
CREATE TABLE "hello" (
  "id"       SERIAL NOT NULL, 
  "name"     VARCHAR(255) NOT NULL,
  PRIMARY KEY("id")
);
