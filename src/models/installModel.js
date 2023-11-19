import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const installModel = sequelize.define("install",
{
    id_install:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    fecha: {
        type: DataTypes.DATE,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'usuarios',
            key: 'id_usuario',
        }
    },
    id_juegos: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'juegos',
            key: 'id_juegos',
        }
    },
})



export default installModel;