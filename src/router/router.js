import { Router } from "express";

import usuariosRouter from "./usuariosRouter.js";
import installsRouter from "./installsRouter.js";
import juegosRouter from "./juegosRouter.js";
/* import adminRouter from "./adminRouter.js"; */
import authRouter from "./authRouter.js";

const router = Router();

router.use("/install", installsRouter);

router.use("/usuarios", usuariosRouter);

router.use("/juegos", juegosRouter);

/* router.use("/admin", adminRouter); */

router.use("/",authRouter);

export default router;