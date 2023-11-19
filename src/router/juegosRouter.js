import { Router } from "express";
import juegosViewController from "../controllers/juegos/juegosViewController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = Router();

router.get("/",isAuthenticated, (req, res) => {
  juegosViewController.getAll(req, res);
});

router.get("/new", juegosViewController.createForm);

router.get("/:id/juego",isAuthenticated, (req, res) => {
  juegosViewController.viewById(req, res);
});

router.get("/:id", (req, res) => {
  juegosViewController.getById(req, res);
});

router.post("/", (req, res) => {
  juegosViewController.create(req, res);
});


export default router;
