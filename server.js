const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models")
const controllers = require("./controllers")
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const opts = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false};
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksdb", opts);

app.use(controllers);

app.listen(PORT, () => {
    console.log(`App running on port localhost:${PORT}!`);
});