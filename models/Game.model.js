const mongoose = require('mongoose');

const GameSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    multiplayer: {
        type: Boolean,
        required: true
    },
    developedBy: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    }
}, {timestamps:true});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
