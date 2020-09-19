'use strict'

const mongoose = require('mongoose');
require('../models/livro');
const Livro = mongoose.model('Livro');
const projection = '_id name email creationDate';

exports.getAll = async() => {
    return await Livro.find({status:true})
;}

exports.create = async(data) => {
    let livro = new Product(data);
    return await livro.save();
}

exports.update = async(id, data) => {
    console.log(data);
    return await Livro.findByIdAndUpdate(id, {
        $set: {
            name: data.name,
            email: data.email,
            password: data.password,
            status: data.status
        }
    });
}

exports.delete = async(id, data) => {
    return await Livro.findOneAndDelete({_id: id});
}

exports.deleteLogic = async(id, data) => {
    console.log(data);
    return await Livro.findByIdAndUpdate(id, {
        $set: {
            status: false
        }
    });
}