/**
 * Created By Claudia on 23/08/2018
 */

'use strict';

const Noticia = require('../model/noticia');

function creaNoticia(req, res) {
    const params = req.body;

    const noticia = new Noticia();

    noticia.titulo = params.titulo;
    noticia.fecha = params.fecha;
    noticia.cuerpo = params.cuerpo;
    noticia.autor = params.autor;
    noticia.categoria = params.categoria;
    noticia.tag = params.tag;

    noticia.save((err, noticia_guardada) => {
        if (err) {
            res.status(500).send({
                desc: 'Error en el servidor',
                err: err.message
            })
        } else {
            if (!noticia_guardada) {
                res.status(404).send({
                    desc:'Noticia no guardada'
                })
            } else {
                res.status(200).send(noticia_guardada);
            }
        }
    })
}

function getNoticia (req, res){
    const idNoticia = req.params.id;

    Noticia.findOne({_id: idNoticia}, (err, noticia_encontrada) => {
        if (err){
            res.status(500).send({
                desc: 'Error en el servidor',
                err: err.message
            })
        } else {
            if(!noticia_encontrada) {
                res.status(404).send({
                    desc: 'Noticia no encontrada'
                })
            } else {
                res.status(200).send(noticia_encontrada);
            }
        }
    })
}

function modificarNoticia(req, res) {
    const idNoticia = req.body.id;
    const body = req.body;

    Noticia.findOne({_id: idNoticia},(err, noticia_encontrada) => {
        if (err) {
            res.status(500).send({
                desc: 'Error en el servidor',
                err: err.message
            })
        } else {
            if (!noticia_encontrada) {
                res.status(404).send({
                    desc: 'Noticia no encontrada'
                })
            } else {
                // MODIFICAR LA NOTICIA
                noticia_encontrada.titulo = body.titulo;
                noticia_encontrada.cuerpo = body.cuerpo;
                noticia_encontrada.categoria = body.categoria;

                // GUARDAR NOTICIA MODIFICADA
                noticia_encontrada.save((err,  noticia_modificada) => {
                    if (err) {
                        res.status(500).send({
                            desc: 'Error en el servidor',
                            err: err.message
                        })
                    } else {
                        res.status(200).send(noticia_modificada);
                    }
                })
            }
        }
    })
}

module.exports = {
    crearNoticia,
    getNoticia,
    modificarNoticia,

};