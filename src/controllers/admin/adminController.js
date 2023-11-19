/* import usuariosModel from "../../models/usuariosModel.js";
import installModel from "../../models/installModel.js"
import juegosModel from "../../models/juegosModel.js"
import {Op} from "sequelize";


const getAll = async(q=null) => {
    const options = {};

    if(q) {
        options.where = { emails:{ [Op.like]: `%${q}%` },}
    }
    try{
        const users = await usuariosModel.findAll(options);
        return [null, users];
    }catch(e){
        return [e.message,null];
    }
}



const adminGetAll = async() => {
    try{
        const datos = await juegosModel.findAll({
            include:[
                {
                    model: usuariosModel,
                    as: "usuarios",
                    attributes: ['id_usuario','nickname','email','password'],
                    right:true
                },
                {
                    model: installModel,
                    as: "install",
                    attributes: ['id_install', 'fecha'],
                },
                {
                    model: installModel,
                    as: "install",
                    attributes: ['id_install','fecha'],
                }
            ]
        });
        return [null, datos];
    }catch(e){
        return [e.message,null];
    }
}

const getById = async (id) => {
    try {
        const user = await usuariosModel.findByPk(id);
        return [null, user];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = async (nickname, email, password) => {
    if (nickname === undefined || email === undefined || password === undefined) {
        const error = "nickname, email y password deben ser definidos";
        return [error, null];
    }
    try{
        const user = await usuariosModel.create({nickname,email,password});
        return [null,user];
    }
    catch(e){
        return [e.message, null];
    }
}

const update = async(id_usuarios,nickname, email, password) => {
    
    if(id == undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (nickname === undefined || email === undefined || password === undefined) {
        const error = "nickname, email y password deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id",id);
        const user= await usuariosModel.findByPk(id);
        user.nickname = nickname;
        user.email = email;
        user.password = password;
        return [null,user];
    }
    catch (e) {
        console.log(e)
        return [e.message,null];
    }
};

const remove = async (id) => {
    try {
        const user = await usuariosModel.findByPk(id);
        if(!user){
            const error = "No se ha encontrado ningún elemento con ese ID";
            return[error,null];
        }
        return [null,user];
    }
    catch (e) {
        return [e.message,null];
    }
}

export {
    adminGetAll,
    getAll,
    getById,
    create,
    update,
    remove
};



export default {
    adminGetAll,
    getAll,
    getById,
    create,
    update,
    remove
}; */