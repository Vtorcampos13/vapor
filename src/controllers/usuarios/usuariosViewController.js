import usuariosController from "./usuariosController.js";

 const getAll = async (req,res) =>{
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, usuarios] = await usuariosController.getAll(q);
    res.render("usuarios/list",{error,usuarios});
}

const getById = async (req,res) =>{
    const id = req.params.id;
    const [error,usuario] = await usuariosController.getById(id);
    res.render("usuarios/show",{error,usuario,session:req.session});
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("usuarios/new",{error});
}

const create = (req,res) =>{
    const {nickname,email,password} = req.body;
    const [error,usuario] = usuariosController.create(nickname,email,password);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/usuarios/new?error=${uriError}`)
    }
    res.redirect("/usuarios");
}

const updateForm = async(req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,usuario] = await usuariosController.getById(id);
    if(error){
        res.redirect("/usuarios");
    }
    res.render("usuarios/edit",{error:errorMessage,usuario});
}

const update = (req,res) =>{
    const id = req.params.id;
    console.log("params id",id)
    const {nickname, email,password} = req.body;
    const [error,usuario] = usuariosController.update(nickname, email,password);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/usuarios/${id_usuarios}/edit?error=${uriError}`)
    }
    res.redirect(`/usuarios/${id_usuarios}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,usuario] = usuariosController.remove(id);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/usuarios?error=${uriError}`)
    }
    res.redirect("/usuarios");
}

export default{
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
};