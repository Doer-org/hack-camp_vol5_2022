package main

import (
	"fmt"
	"os"

	"github.com/Doer-org/hack-camp_vol5_2022/server/controller"
)

func main() {

	router := controller.InitRouter()

	port := fmt.Sprintf(":%s", os.Getenv("PORT"))
	router.Run(port)
}
