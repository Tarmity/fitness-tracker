const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const logger = require("morgan");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(logger("dev"))

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
})
var routes = require("./public/JS/api.js")
console.log(routes)
app.use(routes)

app.use(require("./public/JS/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})