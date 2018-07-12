/**
 * Created By Claudia on 07/05/2018
 */

'use strict';
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const noticiasSchema = new Schema ({
    titulo: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        require: true
    },
    cuerpo: {
        type: String,
        required: true
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    comentarios: [{
        type: String,
    }]
});

module.export = mongoose.model('noticias', noticiasSchema);