import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const categoriasModel = sequelize.define("coches",
{
    id_categorias:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    nombre: {
        type: DataTypes.STRING,
    }
})



export default categoriasModel;