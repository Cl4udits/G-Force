/**
 * Created By Claudia on 07/05/2018
 */

'use strict';

const express = require('express');
const UsuarioController = require('../controller/usuario');

const api = express.Router();

api.post('/login', UsuarioController.iniciarSesion);
api.put('/save', UsuarioController.guardarUsuario);

module.exports = api;