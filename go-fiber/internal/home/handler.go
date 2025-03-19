package home

import (
	"github.com/gofiber/fiber/v2"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

type HomeHandler struct {
	router fiber.Router
	customLogger *zerolog.Logger
}

func NewHomeHandler(root fiber.Router, customLogger *zerolog.Logger) {
	h := &HomeHandler{router: root, customLogger: customLogger}
	api := h.router.Group("/api")
	api.Get("/", h.home)
	api.Get("/error", h.error)
}

func (h *HomeHandler) home(c *fiber.Ctx) error {
	return c.SendString("Hello World!")
}

func (h *HomeHandler) error(c *fiber.Ctx) error {
	log.Error().Msg("Error")
	return c.SendString("Error!")
}
