/* import adminController from "./adminController.js";
 */
const adminGetAll = async (req, res) => {
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, datos] = await adminController.adminGetAll();
/*     console.log(datos[0].multas);
 */    res.render("admin/list",{error,datos});
}



/*  const getAll = async (req,res) =>{
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, coches] = await adminController.getAll(q);
    res.render("admin/list",{error,coches});
} */

const getById = async (req,res) =>{
    const id = req.params.id;
    const [error,user] = await adminController.getById(id);
    res.render("usuarios/show",{error,user,session:req.session});
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("usuarios/new",{error});
}

const create = (req,res) =>{
    const {nickname,email,password} = req.body;
    const [error,user] = adminController.create(nickname,email,password);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/usuarios/new?error=${uriError}`)
    }
    res.redirect("/usuarios");
}

/* const updateForm = async(req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,coche] = await adminController.getById(id);
    if(error){
        res.redirect("/coches");
    }
    res.render("coches/edit",{error:errorMessage,coche});
} */

/* const update = (req,res) =>{
    const id = req.params.id;
    console.log("params id",id)
    const {marca, modelo, matricula, password} = req.body;
    const [error,coche] = adminController.update(marca, modelo, matricula, password);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/coches/${id_coche}/edit?error=${uriError}`)
    }
    res.redirect(`/coches/${id_coche}`);
}; */

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,user] = adminController.remove(id);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/usuarios?error=${uriError}`)
    }
    res.redirect("/usuarios");
}

export default{
    adminGetAll,
    //getAll,
    getById,
    create,
    createForm,
    //update,
    //updateForm,
    remove
};