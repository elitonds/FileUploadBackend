const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME, SERVER_PORT } = process.env;
const app = express();

/**
 * Database setup
 */
mongoose.connect(`mongodb://user:user@0.0.0.0:27017/upload?authSource=admin`,{
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(3000);
