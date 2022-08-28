package main

import (
	"fmt"
	"os"

	"github.com/Doer-org/hack-camp_vol5_2022/server/db"
	"github.com/Doer-org/hack-camp_vol5_2022/server/controller"
)

func main() {
	//db接続
	db := db.NewDB()
	defer db.Conn.Close()

	router := controller.InitRouter(db)
	port := fmt.Sprintf(":%s", os.Getenv("PORT"))
	router.Run(port)
}
