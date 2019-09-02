const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserInteraction = new Schema({
    user: {
        type:String
    },
    product: {
        type:String
    },
    timestamp: {
        type:Date
    } 
},{ collection : 'userinteraction'});

module.exports = mongoose.model('UserInteraction',UserInteraction);