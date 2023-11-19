import bcrypt from "bcrypt";
import usuariosModel from "../../models/usuariosModel.js";
/* import adminModel from "../../models/adminModel.js"; */


const login = async(req,res) => {
    console.log("REQ BODY " + req.body.email + " " + req.body.password);
    const {email,password} = req.body;
    try{
        const user = await usuariosModel.findOne({where:{email:email}});
        if(!user){
            throw new Error("credenciales incorrectas");
        }
        const hash = user.password;

        if(await bcrypt.compare(password,hash)){
            req.session.id_usuarios = user.id_usuarios
            req.session.user = user.email;
        }    
    }
    catch(e){
        const errorUri = encodeURIComponent("credenciales incorrectas");
        return res.redirect("/login?error="+errorUri);
    }
    
    res.redirect("/juegos");
}

/* const adminLogin = async(req,res) => {
    const {user,password} = req.body;
    try{
        const exist = await adminModel.findOne({where:{user:user}})
        if(!exist){
            throw new Error("credenciales incorrectas");
        }
        const hash = exist.password;

        if(await bcrypt.compare(password,hash)){
            req.session.user = exist.user;
        }    
    }
    catch(e){
        const errorUri = encodeURIComponent("credenciales incorrectas");
        return res.redirect("/admin/login?error="+errorUri);
    }
     
    res.redirect("/");
} */

const loginForm = (req,res) => {
    const errorMessage = req.query.error
    res.render("auth/login",{error:errorMessage});
}

/* const adminLoginForm = (req,res) => {
    const errorMessage = req.query.error
    res.render("auth/adminLogin",{error:errorMessage});
} */

const register = async(req,res) => {
    const {nickname,email,password,passwordConfirm} = req.body;
    if(!nickname || !email || !password || !passwordConfirm){
        const errorUri = encodeURIComponent("Todos los campos son obligatorios");
        return res.redirect("/register?error=" + errorUri);
    }

    if(password !== passwordConfirm){
        const errorUri = encodeURIComponent("Las contraseñas no coinciden");
        return res.redirect("/register?error=" + errorUri);
    }

    try{
        const oldUser = await usuariosModel.findOne({
            where:{
                email:email
            }
        });

        if(oldUser){
            console.log("oldUser:",oldUser);
            const errorUri = encodeURIComponent("El usuario ya existe");
            return res.redirect("/register?error=" + errorUri);
        }
        const hash = await bcrypt.hash(password,10);
        console.log(hash);
        const newUser = await usuariosModel.create({
            email:email,
            password:hash
        });
        req.session.user = newUser.email;
        req.session.rol = newUser.rol;
        res.redirect("/login");
    }
    catch(e){
        const errorUri= encodeURIComponent(e.message);
        return res.redirect("/register?error=" + errorUri);
    }    
}

const registerForm = (req,res) => {
    const errorMessage = req.query.error;
    res.render("auth/register", {error:errorMessage});
}

const logout = (req,res)=>{
    req.session.destroy();
    res.redirect("/login");
}

export default{
    login,
    loginForm,
    logout,
    register,
    registerForm,
    /* adminLogin,
    adminLoginForm, */
}

