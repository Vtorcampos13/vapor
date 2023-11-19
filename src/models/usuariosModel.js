import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";
import installModel from "./installModel.js";
const usuariosModel = sequelize.define("usuarios",
{
    id_usuarios:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    nickname: {
        type: DataTypes.STRING,
        unique:true,
    },
    email: {
        type: DataTypes.STRING(120),
        allowNull:false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull:false,
    }
})

installModel.belongsTo(usuariosModel, {
    foreignKey: "id_usuario",
    as: 'viciao'
});



usuariosModel.hasMany(installModel, { foreignKey: "id_usuario"});


export default usuariosModel;