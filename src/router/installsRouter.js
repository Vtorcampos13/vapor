import { Router } from "express";

import installsViewController from "../controllers/installs/installsViewController.js";
import {isAuthenticated} from "../middlewares/authMiddleware.js";
import { instalado, noInstalado } from "../middlewares/installMiddleware.js";


const router = Router();



router.get("/",isAuthenticated,instalado,(req,res)=>{
    installsViewController.aparcarForm(req,res);
});

router.get("/felicidades",isAuthenticated,(req,res)=>{
    installsViewController.felicidades(req,res);
});

router.get("/nofelicidades",isAuthenticated,(req,res)=>{
    installsViewController.nofelicidades(req,res);
});

router.get("/errordesinstalar",(req,res)=>{
    installsViewController.errordesinstalar(req,res);
});

router.get("/errorinstalar",(req,res)=>{
    installsViewController.errorinstalar(req,res);
});

router.post("/instalar",isAuthenticated,(req,res)=>{
    installsViewController.instalado(req,res);
});

router.post("/desinstalar",isAuthenticated,noInstalado,(req,res)=>{
    installsViewController.desinstalado(req,res);
});

export default router;