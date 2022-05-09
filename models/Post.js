const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sabor: {type: String, required: true},
    quantidade: {type: Number, required: true},
    data: {type: Date, required: true},
});

module.exports = mongoose.model('Post', postSchema);
