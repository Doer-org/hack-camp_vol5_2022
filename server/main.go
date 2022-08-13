package main

import (
	"fmt"
	"os"
)

func main() {

	router := InitRouter()

	port := fmt.Sprintf(":%s", os.Getenv("PORT"))
	router.Run(port)
}
