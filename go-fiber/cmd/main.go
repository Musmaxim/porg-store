package main

import (
	"go-fiber/config"
	"go-fiber/internal/home"
	"go-fiber/pkg/logger"

	"github.com/gofiber/contrib/fiberzerolog"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/recover"
)

func main() {
	config.Init()
	config.NewDatabaseConfig()
	logConfig := config.NewLogConfig()
	customLogger := logger.NewLogger(logConfig)
	app := fiber.New()
	app.Use(fiberzerolog.New(
		fiberzerolog.Config{
			Logger: customLogger,
		}))
	app.Use(recover.New())

	home.NewHomeHandler(app, customLogger)

	app.Listen(":8080")
}
