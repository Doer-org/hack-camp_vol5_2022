package main

import (
	"fmt"
	"os"

	"github.com/Doer-org/hack-camp_vol5_2022/server/infra/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/presen/router"
)

func main() {
	//db接続
	db := db.NewDB()
	defer db.Conn.Close()

	router := router.InitRouter(db)

	port := os.Getenv("PORT")
	router.Run(fmt.Sprintf(":%s", port))
}
