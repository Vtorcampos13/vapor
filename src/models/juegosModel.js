import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";
import installModel from "./installModel.js";
import categoriasModel from "./categoriasModel.js";

const juegosModel = sequelize.define("juegos",
{
    id_juegos:{
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        unique:true,
    },
    titulo : {
        type: DataTypes.STRING,
    },
    tamano: {
        type: DataTypes.NUMBER,
    },
    id_categorias: {
        type: DataTypes.STRING,
        unique:true,
        reference: {
            model: 'categorias',
            key: 'id_categorias',
        }
    },
    imagen: {
        type: DataTypes.STRING,
    },
})

installModel.belongsTo(juegosModel, {
    foreignKey: "id_juegos",
    as: 'gameInstalled'
});

juegosModel.belongsTo(categoriasModel, {
    foreignKey: "id_juegos",
    as: 'gameCategory'
});


juegosModel.hasMany(installModel, { foreignKey: "id_juegos"});
categoriasModel.hasMany(juegosModel, { foreignKey: "id_categorias"});




export default juegosModel;