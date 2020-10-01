'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LivrotModel = new Schema({
  
        title: {type:String,  trim: true},
        price: {type:Number},
        description: {type:String, trim: true},
        buyUrl: {type:String, trim:true},
    status: {type:Boolean, default:true},
    creationDate: {type:Date, default:Date.now }
}, { versionKey:false });



module.exports = mongoose.model('Livro', LivrotModel);