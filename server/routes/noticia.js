/**
 * Created By Claudia on 07/05/2018
 */

'use strict';
const express = require('express');
const NoticiaController = require('../controller/noticia');

const api = express.Router();

api.post('/crearNoticia', NoticiaController.crearNoticia);
api.get('/getNoticia/:id', NoticiaController.getNoticia);
api.post('/modificarNoticia', NoticiaController.modificarNoticia);

module.exports = api;
