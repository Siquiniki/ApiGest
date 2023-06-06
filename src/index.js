import { sequelize } from "./database/database.js";
import app from "./app/app.js"

async function main(){
    try {
        await sequelize.sync({force: false});
        console.log("Conexión establecida con éxito 🦅");
        app.listen(3001, () => console.log("Servidor ejecutado con exito 🦉"));
    } catch (error) {
        console.error("Conexión fallida 😢", error);
    }
}

main();