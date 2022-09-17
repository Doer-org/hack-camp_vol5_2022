-- DB切り替え
\c "doer"

--テーブルを作成

CREATE TABLE "rooms" (
  "id"         VARCHAR(255) NOT NULL PRIMARY KEY,
  "name"       VARCHAR(255) NOT NULL,
  "max_count"  INTEGER NOT NULL,
  "status"     VARCHAR(255) NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT current_timestamp
);

CREATE TABLE "members"(
  "id"       SERIAL NOT NULL PRIMARY KEY,
  "name"     VARCHAR(255) NOT NULL,
  "comment"  VARCHAR(255) NOT NULL,
  "lang"     VARCHAR(255),
  "github"   VARCHAR(255),
  "twitter"  VARCHAR(255),
  "room"     VARCHAR(255),
  "question" VARCHAR(255) NOT NULL,
  foreign key ("room") references "rooms"("id")
    ON DELETE CASCADE
);

CREATE TABLE "users"(
  "uid"      VARCHAR(255) NOT NULL PRIMARY KEY,
  "name"     VARCHAR(255) NOT NULL,
  "comment"  VARCHAR(255),
  "lang"     VARCHAR(255),
  "github"   VARCHAR(255),
  "twitter"  VARCHAR(255)
);

-- --テーブルにデータを挿入
INSERT INTO "rooms" ("id", "name", "max_count", "status") 
VALUES ('aaaaa','doer', 12, 'created');

INSERT INTO "rooms" ("id","name","max_count", "status") 
VALUES ('aadfsfd','doshisha', 10, 'created');

INSERT INTO "rooms" ("id","name", "max_count", "status") 
VALUES ('dfsdf','飲み会', 4, 'created');


INSERT INTO "members" ("name", "comment", "lang", "github", "twitter","room","question") 
VALUES ('mahiro', 21,'男', 'mahiro72', 'sino0042900', 'aaaaa','元気?');

INSERT INTO "members" ("name", "comment", "lang", "github", "twitter","room","question") 
VALUES ('mahiro', 21,'男', 'mahiro72', 'sino0042900', 'aaaaa','元気?');

INSERT INTO "members" ("name", "comment", "lang", "github", "twitter","room","question") 
VALUES ('mahiro', 21,'男', 'mahiro72', 'sino0042900', 'aaaaa','元気?');

INSERT INTO "members" ("name", "comment", "lang", "github", "twitter","room","question") 
VALUES ('mahiro', 21,'男', 'mahiro72', 'sino0042900', 'dfsdf','元気?');

INSERT INTO "members" ("name", "comment", "lang", "github", "twitter","room","question") 
VALUES ('mahiro', 21,'男', 'mahiro72', 'sino0042900', 'dfsdf','元気?');

-- select * from rooms left join members on rooms.id = members.room;
