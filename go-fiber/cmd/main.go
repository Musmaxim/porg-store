package main

import (
	"go-fiber/internal/home"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	home.NewHomeHandler(app)

	app.Listen(":8080")
}