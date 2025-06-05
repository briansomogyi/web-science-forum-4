import { sequelize } from "./database.js";
sequelize.sync({ alter: true }).then(() => {
    console.log("FINISHED SUCCESS");
    process.exit(0);
});