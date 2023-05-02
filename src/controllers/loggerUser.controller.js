import { createUser } from "../services/User.js";

// import {
//     createBeekeeper,
//     getBeekeeper,
//     deleteBeekeeper,
//     updateBeekeeper,
// } from "../services/Beekeeper.js";

// import {
//     createClient,
//     getClient,
//     updateClient,
//     deleteClient,
//     getClients,
// } from "../services/Client.js";

// import {
//     createManager,
//     getManager,
//     updateManager,
//     deleteManager,
// } from "../services/Manager.js";

// validarDatosUsuario, confirmarUsuario, registrarUsuario, crearSessionUsuario

export const registerUser = (req, res) => {
    console.log(req.body);
    // res.json({ ok: "Registrar"});
    res.json(req.body);
}

// comprobarAccesoInvitado, crearUsuarioRolInvitado, cargarSessionInvitado
export const guestUser = async (req, res) => {
    return res.status(201).json(await createUser(req, res));
    // console.log(res);
}

// validarDatosUsuario, confirmarUsuario, modificarUsuario
export const changePasswordUser = (req, res) => {
    console.log(req.body);
    // res.json({ ok: "Cambiar Contraseña"});
    res.json(req.body);
}

// validarDatosUsuario, autenticarUsuario, cargarSessionUsuario
export const authUser = (req, res) => {
    console.log(req.body);
    // res.json({ ok: "Login"});
    res.json(req.body);
};