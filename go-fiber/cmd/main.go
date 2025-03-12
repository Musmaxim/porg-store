package main

import (
	"go-fiber/config"
	"go-fiber/internal/home"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/log"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

func main() {
	config.Init()
	config.NewDatabaseConfig()
	logConfig := config.NewLogConfig()
	app := fiber.New()
	log.SetLevel(log.Level(logConfig.Level))
	app.Use(logger.New())
	app.Use(recover.New())

	home.NewHomeHandler(app)

	app.Listen(":8080")
}
