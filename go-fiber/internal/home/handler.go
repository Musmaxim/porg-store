package home

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/log"
)

type HomeHandler struct {
	router fiber.Router
}

func NewHomeHandler(root fiber.Router) {
	h := &HomeHandler{router: root}
	api := h.router.Group("/api")
	api.Get("/", h.home)
	api.Get("/error", h.error)
}

func (h *HomeHandler) home(c *fiber.Ctx) error {
	return c.SendString("Hello World!")
}

func (h *HomeHandler) error(c *fiber.Ctx) error {
	log.Info("Error!")
	return c.SendString("Error!")
}
