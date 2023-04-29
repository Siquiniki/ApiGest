import app from "./app/app.js";
import { sequelize } from "./database/database.js";

async function main(){
    try {
        await sequelize.sync();
        console.log("Conexión establecida con éxito 🦅");
        app.listen(3000, () => console.log("Servidor ejecutado con exito 🦉"));
    } catch (error) {
        console.error("Conexión fallida 😢", error);
    }
}

main();