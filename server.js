const path = require("path");
const routes = require("controllers");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");

const sequelize = require("./config/config");
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`App listening: ${PORT}!`);
}
