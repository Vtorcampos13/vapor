import juegosController from "./juegosController.js";

const getAll = async (req, res) => {
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, juegos] = await juegosController.getAll(q);

    // Mapear los juegos para incluir solo la información necesaria en la vista
    const juegosParaVista = juegos.map(juego => ({
        id: juego.id_juegos,
        titulo: juego.titulo,
        tamano: juego.tamano,
        imagen: juego.imagen,
    }));
    console.log("MUESTRAME EL JUEGO",juegosParaVista)
    res.render("juegos/list", { error, juegos: juegosParaVista });
}

const getById = async (req, res) => {
    const id = req.params.id;
    const [error, juego] = await juegosController.getById(id);


    if (error || !juego) {
        res.render("error", { error: "Juego no encontrado" });
    } else {
        
        res.render("juegos/details", { juego });
    }
}

const createForm = (req, res) => {
    const error = req.query.error;
    res.render("juego/new", { error });
}

const create = (req, res) => {
    const { titulo, tamano } = req.body;
    const [error, juegos] = juegosController.create(titulo, tamano);
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/juego/new?error=${uriError}`);
    }
    res.redirect("/juego");
}

const updateForm = async (req, res) => {
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error, juego] = await juegosController.getById(id);

    // Verificar si existe un error o el juego no se encontró
    if (error || !juego) {
        res.render("error", { error: "Juego no encontrado" });
    } else {
        res.render("juegos/edit", { error: errorMessage, juego });
    }
}

const update = (req, res) => {
    const id = req.params.id;
    const { titulo, tamano } = req.body;
    const [error, juegos] = juegosController.update(id, titulo, tamano);
    if (error) {
        const uriError = encodeURIComponent(error);
        return res.redirect(`/juegos/${id}/edit?error=${uriError}`);
    }
    res.redirect(`/juegos/${id}`);
};

const remove = async (req, res) => {
    const id = req.params.id;
    const [error, juegos] = await juegosController.remove(id);

    // Verificar si existe un error o el juego no se encontró
    if (error || !juegos) {
        res.render("error", { error: "Juego no encontrado" });
    } else {
        res.redirect("/juegos");
    }
}

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove,
};
