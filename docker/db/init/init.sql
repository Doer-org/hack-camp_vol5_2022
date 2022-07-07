-- DB切り替え
\c "doer"

--テーブルを作成

CREATE TABLE "rooms" (
  "id"         VARCHAR(255) NOT NULL PRIMARY KEY,
  "name"       VARCHAR(255) NOT NULL,
  "max_count"  INTEGER NOT NULL
);

CREATE TABLE "members"(
  "id"       SERIAL NOT NULL, 
  "age"      INTEGER NOT NULL,
  "gender"   VARCHAR(255) NOT NULL,
  "img"      VARCHAR(255) NOT NULL,
  "github"   VARCHAR(255) NOT NULL,
  "twitter"  VARCHAR(255) NOT NULL,
  "room"      VARCHAR(255) NOT NULL,
  foreign key ("room") references "rooms"("id")
    ON DELETE CASCADE,
  PRIMARY KEY("id")
);

-- --テーブルにデータを挿入
INSERT INTO "rooms" ("id", "name", "max_count") 
VALUES ('aaaaa','doer', 12);

INSERT INTO "rooms" ("id","name","max_count") 
VALUES ('aadfsfd','doshisha', 10);

INSERT INTO "rooms" ("id","name", "max_count") 
VALUES ('dfsdf','飲み会', 4);


INSERT INTO "members" ("age", "gender", "img", "github", "twitter","room") 
VALUES (21,'男', 'http://google.com', 'mahiro72', 'sino0042900', 'aaaaa');

INSERT INTO "members" ("age", "gender", "img", "github", "twitter","room") 
VALUES (22,'男', 'http://google.com', 'mahiro72', 'sino0042900', 'aaaaa');

INSERT INTO "members" ("age", "gender", "img", "github", "twitter","room") 
VALUES (23,'男', 'http://google.com', 'mahiro72', 'sino0042900', 'aaaaa');


INSERT INTO "members" ("age", "gender", "img", "github", "twitter","room") 
VALUES (21,'男', 'http://google.com', 'mahiro72', 'sino0042900', 'dfsdf');

INSERT INTO "members" ("age", "gender", "img", "github", "twitter","room") 
VALUES (22,'男', 'http://google.com', 'mahiro72', 'sino0042900', 'dfsdf');


-- select * from rooms left join members on rooms.id = members.room;
