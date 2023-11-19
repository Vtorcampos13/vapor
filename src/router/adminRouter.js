/* import { Router } from "express";

import usuariosViewController from "../controllers/usuarios/usuariosViewController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";
import adminViewController from "../controllers/admin/adminViewController.js";
import authController from "../controllers/auth/authController.js"


const router = Router();

router.get("/",isAdmin,(req,res)=>{
    adminViewController.adminGetAll(req,res);
});

router.get("/list",isAdmin,(req,res)=>{
    adminViewController.adminGetAll(req,res);
});

router.get("/login",(req,res)=>{
    authController.adminLoginForm(req,res);
})

router.post("/login",(req,res)=>{
    authController.adminLogin(req,res);
})



router.get("/:id",isAuthenticated,(req,res)=>{
    usuariosViewController.getById(req,res);
});

router.get("/new",usuariosViewController.createForm);

router.post("/",(req,res)=>{
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
 */