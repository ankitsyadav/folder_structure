
const {validationMiddleware} = require("./middlewares");

const {create} = require("./controllers");

const express = require("express");

const userRoutes = express.Router();

userRoutes.post("/",validationMiddleware,create);

module.exports = {userRoutes};
