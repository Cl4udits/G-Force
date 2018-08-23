/**
 * Created By Claudia on 07/05/2018
 */

'use strict';
const express = require('express');
const NoticiaController = require('../controller/noticia');

const api = express.Router();
api.post('/crearNoticia', NoticiaController.crearNoticia);

module.exports = api;
