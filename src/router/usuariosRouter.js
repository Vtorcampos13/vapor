import { Router } from "express";

import usuariosViewController from "../controllers/usuarios/usuariosViewController.js";
import {isAuthenticated} from "../middlewares/authMiddleware.js";


const router = Router();

router.get("/",isAuthenticated,(req,res)=>{
    usuariosViewController.getAll(req,res);
});

router.get("/new",usuariosViewController.createForm);

router.get("/:id",isAuthenticated,(req,res)=>{
    usuariosViewController.getById(req,res);
});

router.post("/",(req,res)=>{usuariosModel
    usuariosViewController.create(req,res);
});

router.get("/:id/edit",usuariosViewController.updateForm);

router.post("/:id",(req,res)=>{
    usuariosViewController.update(req,res);
});

router.get("/:id/delete",(req,res)=>{
    usuariosViewController.remove(req,res);
});

export default router;
