const jwt = require('jsonwebtoken');
const md5 = require('md5');

const repository = require('../repository/livro-repository');

exports.getAllLivro = async(req, res, next) => {
    try {
        let dbReturn = await repository.getAll();
        res.status(200).send(dbReturn);        
    } catch (e) {
        res.status(500).send(
            {
                message: 'Ops! Something went worng', error: e
            }
        );
    }
}; 

exports.addLivro = async(req, res, next) => {
    try {

        let dbReturn= await repository.create(req.body);
        res.status(200).send(dbReturn);        
    } catch (e) {
        res.status(500).send(
            {
                message: 'Ops! Something went worng', error: e
            }
        );
    }
};

exports.editLivro = async(req, res, next) => {
    try {
        let result = await repository.update(req.params.id, req.body);
        res.status(202).send(result);        
    } catch (e) {
        res.status(500).send(
            {
                message: 'ERRO AO EDITAR', error: e
            }
        );
    }
};

exports.deleteLivro = async(req, res, next) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send({
            message: 'ERRO AO  delete!'
        });        
    } catch (e) {
        res.status(500).send(
            {
                message: 'EPAAAA ', error: e
            }
        );
    }
};


