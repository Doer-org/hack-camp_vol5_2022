-- DB切り替え
\c "doer"

--テーブルを作成

CREATE TABLE "rooms" (
  "id"         VARCHAR(255) NOT NULL PRIMARY KEY,
  "name"       VARCHAR(255) NOT NULL,
  "max_count"  INTEGER NOT NULL,
  "status"     VARCHAR(255) NOT NULL
);

CREATE TABLE "members"(
  "id"       SERIAL NOT NULL PRIMARY KEY,
  "name"     VARCHAR(255) NOT NULL,
  "age"      INTEGER NOT NULL,
  "gender"   VARCHAR(255) NOT NULL,
  "github"   VARCHAR(255) NOT NULL,
  "twitter"  VARCHAR(255) NOT NULL,
  "room"      VARCHAR(255) NOT NULL,
  foreign key ("room") references "rooms"("id")
    ON DELETE CASCADE
);

-- --テーブルにデータを挿入
INSERT INTO "rooms" ("id", "name", "max_count", "status") 
VALUES ('aaaaa','doer', 12, 'created');

INSERT INTO "rooms" ("id","name","max_count", "status") 
VALUES ('aadfsfd','doshisha', 10, 'created');

INSERT INTO "rooms" ("id","name", "max_count", "status") 
VALUES ('dfsdf','飲み会', 4, 'created');


INSERT INTO "members" ("name", "age", "gender", "github", "twitter","room") 
VALUES ('mahiro', 21,'男', 'mahiro72', 'sino0042900', 'aaaaa');

INSERT INTO "members" ("name", "age", "gender", "github", "twitter","room") 
VALUES ('mahiro', 21,'男', 'mahiro72', 'sino0042900', 'aaaaa');

INSERT INTO "members" ("name", "age", "gender", "github", "twitter","room") 
VALUES ('mahiro', 21,'男', 'mahiro72', 'sino0042900', 'aaaaa');

INSERT INTO "members" ("name", "age", "gender", "github", "twitter","room") 
VALUES ('mahiro', 21,'男', 'mahiro72', 'sino0042900', 'dfsdf');

INSERT INTO "members" ("name", "age", "gender", "github", "twitter","room") 
VALUES ('mahiro', 21,'男', 'mahiro72', 'sino0042900', 'dfsdf');

-- select * from rooms left join members on rooms.id = members.room;
