package helper

import (
	"time"
	"crypto/sha256"
	"encoding/hex"
)


func getSHA256Binary(s string) []byte {
	r := sha256.Sum256([]byte(s))
	return r[:]
}

// 現在時刻からhash値の生成
func GetHashId() string {
	now := time.Now().Format("2006-01-02T15:04:05Z07:00")
	b := getSHA256Binary(now)
	id := hex.EncodeToString(b)
	return id
}
