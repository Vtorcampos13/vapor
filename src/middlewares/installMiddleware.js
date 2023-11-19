import installModel from "../models/installModel.js";

const noInstalado = async (req,res,next) => {
    const instalador = await installModel.findOne({
        where:{
            id_juego:req.session.id_juego,
            activo: 1
        }
    });
    if(instalado != null) {
        next();
    } else {
    res.redirect("/install/errorinstalar");
    }
}


const instalado = async (req,res,next) => {
    const instalador = await installModel.findOne({
        where:{
            id_juego:req.session.id_juego,
            activo: 1
        }
    });
    if(instalador && instalador.activo) {
        res.redirect("/install/errordesinstalar");
    } else {
    
    next();
    }
}


export {
    noInstalado,
    instalado
}