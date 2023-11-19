
import juegosModel from "../../models/juegosModel.js";

import {Op} from "sequelize";


const getAll = async(q=null) => {
    const options = {};

    if(q) {
        options.where = { titulo:{ [Op.like]: `%${q}%` },}
    }
    try{
        const juegos = await juegosModel.findAll(options);
        return [null, juegos];
    }catch(e){
        return [e.message,null];
    }
}

const getById = async (id) => {
    try {
        const juego = await juegosModel.findByPk(id);
        return [null, juego];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = async (titulo,tamano) => {
    if (titulo === undefined || tamano === undefined) {
        const error = "titulo y tamano deben ser definidos";
        return [error, null];
    }
    try{
        const juego = await juegosModel.create({titulo,tamano});
        return [null,juego];
    }
    catch(e){
        return [e.message, null];
    }
}

const update = async (id_juegos, titulo, tamano) => {
    if (id_juegos === undefined) {
        const error = "Tienes que especificar un ID válido";
        return [error, null];
    }
    if (titulo === undefined || tamano === undefined) {
        const error = "titulo y tamano deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id", id_juegos);
        const juego = await juegosModel.findByPk(id_juegos);
        if (!juego) {
            const error = "No se ha encontrado ningún juego con ese ID";
            return [error, null];
        }
        juego.titulo = titulo;
        juego.tamano = tamano;
        await juego.save(); // Guarda los cambios en la base de datos.
        return [null, juego];
    } catch (e) {
        console.log(e);
        return [e.message, null];
    }
};

const remove = async (id) => {
    try {
        const juego = await juegosModel.findByPk(id);
        if (!juego) {
            const error = "No se ha encontrado ningún elemento con ese ID";
            return [error, null];
        }
        await juego.destroy(); // Esta línea eliminará el juego de la base de datos.

        return [null, juego];
    } catch (e) {
        return [e.message, null];
    }
}


export {
    getAll,
    getById,
    create,
    update,
    remove,
};



export default {
    getAll,
    getById,
    create,
    update,
    remove
};

