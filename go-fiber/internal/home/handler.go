package home

import "github.com/gofiber/fiber/v2"

type HomeHandler struct {
	router fiber.Router
}

func NewHomeHandler(root fiber.Router) *HomeHandler {
	h := &HomeHandler{router: root}
	h.router.Get("/", h.home)
	return h
}

func (h *HomeHandler) home(c *fiber.Ctx) error {
	return c.SendString("Hello World!")
}
