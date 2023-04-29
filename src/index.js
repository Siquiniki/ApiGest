// import app from "./app/app.js";
import express from "express";
import { create } from "express-handlebars";
import { sequelize } from "./database/database.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

const hbs = create({
    extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("home");
});

app.use(express.json());
app.use(express.static(__dirname + "/public/templateEngine"));

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