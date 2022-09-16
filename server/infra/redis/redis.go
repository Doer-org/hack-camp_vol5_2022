package redis

import (
	"os"

	redis "github.com/go-redis/redis/v8"
)

// redis clientの生成
var Rs = redis.NewClient(&redis.Options{
	Addr: getRedisUrl(),
})

func getRedisUrl() string {
	addr := "rediss://redis-hack-camp_vol5_2022:6379"
	if os.Getenv("DEPLOY_FLAG") == "True" {
		addr = os.Getenv("REDIS_URL")
	}
	return addr
}
