import installModel from "../../models/installModel.js";
import {Op} from "sequelize";

const getAll = async(q=null) => {
    const options = {};

    try{
        const install = await installModel.findAll(options);
        return [null, install];
    }catch(e){
        return [e.message,null];
    }
}

const getById = async (id) => {
    try {
        const installs = await installModel.findByPk(id);
        return [null, installs];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = async (fecha,id_juegos,id_usuarios,activo) => {
    if (fecha === undefined || id_juegos === undefined || id_usuarios === undefined || activo === undefined) {
        const error = "fecha, id_juegos, id_usuarios y activo deben ser definidos";
        return [error, null];
    }
    try{
        const installs = await installModel.create({fecha,id_juegos,id_usuarios,activo});
        return [null,installs];
    }
    catch(e){
        return [e.message, null];
    }
}

const update = async(id_install,fecha,id_juegos,id_usuarios,activo) => {
    
    if(id_install == undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (fecha === undefined || id_juegos === undefined || id_usuarios === undefined || activo === undefined) {
        const error = "fecha, id_juegos, id_usuarios y activo deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id",id);
        const installs = await installModel.findByPk(id);
        installs.fecha = fecha;
        installs.id_juegos = id_juegos;
        installs.id_usuarios = id_usuarios;
        installs.activo = activo;
        return [null,installs];
    }
    catch (e) {
        console.log(e)
        return [e.message,null];
    }
};

const remove = async (id) => {
    try {
        const installs = await installModel.findByPk(id);
        if(!installs){
            const error = "No se ha encontrado ningún elemento con ese ID";
            return[error,null];
        }
        return [null,installs];
    }
    catch (e) {
        return [e.message,null];
    }
}


function day(fecha) {
    // Transforma la fecha actual a formato Datetime de MYSQL
    fecha.setMinutes(0);
    fecha.setSeconds(0);
    return fecha.toISOString().slice(0, 19).replace('T', ' ');
}




/* function sumarHoras(tiempo) {
    let now = new Date();
    now.setHours(now.getHours() + parseInt(tiempo))
    return fecha(new Date(now))
  }

 */

  const instalar = async (id_juegos, id_usuarios, fecha) => {
      const hoy = new Date();
      const data = day(hoy);
      try {
          const instalado = await installModel.create({ data, id_juegos, id_usuarios, fecha });
          const mensaje = '¡Juego instalado correctamente!';
          const redirectUrl = '/instalacion-correcta';
          mostrarMensaje(req, res, mensaje, redirectUrl);
      } catch (e) {
          return [e.message, null];
      }
  };
  
  const desinstalar = async (id_usuarios) => {
      const hoy = new Date();
      const data = day(hoy);
  
      try {
          let instalado = await installModel.findOne({
              where: {
                  id_usuarios: id_usuarios,
                  activo: 1
              }
          });
          await instalado.update({ fecha, activo: 0, data });
          const mensaje = '¡Juego desinstalado correctamente!';
          const redirectUrl = '/desinstalacion-correcta';
          mostrarMensaje(req, res, mensaje, redirectUrl);
      } catch (e) {
          return [e.message, null];
      }
  };



export {
    getAll,
    getById,
    create,
    update,
    remove,
    instalar,
    desinstalar,
    day
};



export default {
    getAll,
    getById,
    create,
    update,
    remove,
    instalar,
    desinstalar,
    day
};
