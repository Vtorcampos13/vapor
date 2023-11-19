import installsController from "./installsController.js";

 const getAll = async (req,res) =>{
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, install] = await installsController.getAll(q);
    res.render("install/list",{error,install});
}

const getById = async (req,res) =>{
    const id = req.params.id;
    const [error,installs] = await installsController.getById(id);
    res.render("install/show",{error,installs,session:req.session});
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("install/new",{error:error});
}

const create = async (req,res) =>{
    const {fecha,id_usuarios,id_juegos} = req.body;
    const [error,installs] = await installsController.create(fecha,id_usuarios,id_juegos);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/install/new?error=${uriError}`)
    }
    res.redirect("/install");
}

const errordesinstalar = (req,res) =>{
    res.render("install/errordesinstalar");
}

const errorinstalar = (req,res) =>{
    res.render("install/errorinstalar");
}

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,installs] = installsController.remove(id);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/install?error=${uriError}`)
    }
    res.redirect("/install");
}

const instalarForm = (req, res)=>{
    const error = req.query.error;
    res.render("install/instalado",{error:error});
}

const felicidades = (req, res)=>{
    const error = req.query.error;
    res.render("install/instalado",{error:error});
}

const nofelicidades = (req, res)=>{
    const error = req.query.error;
    res.render("install/desinstalado",{error:error});
}

const instalar =  async(req,res)=>{
    const id_juegos = req.body.juego
    const fecha = req.body.fecha
    const id_usuarios = req.session.id_usuarios;
    const [error, instalado] = await installsController.instalar(id_usuarios, id_juegos, fecha);
    res.redirect(`/install/instalar`)

    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/install?error=${uriError}`)
    }
}


const desinstalar = async (req,res)=>{
    const id_usuarios = req.session.id_usuarios;
    const [error,instalado] = await installsController.desinstalar(id_usuarios);
    res.redirect(`/install/nofelicidades`)
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/install?error=${uriError}`)
    }
}


export default{
    getAll,
    getById,
    create,
    createForm,
    remove,
    felicidades,
    nofelicidades,
    instalar,
    desinstalar,
    instalarForm,
    errordesinstalar,
    errorinstalar
};