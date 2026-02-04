const express = require("express");
const cors = require("cors");
const usersRoute = require("./routes/users");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", usersRoute);

module.exports = app;