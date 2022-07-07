package main

import (
	"github.com/Doer-org/hack-camp_vol5_2022/server/controller"
)

func main() {

	router := controller.InitRouter()
	router.Run()
}
