const mongoose = require('mongoose');
require('./dbConnection')(mongoose);

// const GamesSchema = new mongoose.Schema({
// })

const PlayersSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required"],
        minlength: [2, "Name msut be at least 2 characters in length"]
    },
    preferred_position: {
        type: String, 
        default: ""
    },
    game_one_status: {
        playing: {
            type: Boolean,
            default: false
        },
        not_playing: {
            type: Boolean,
            default: false
        },
        undecided: {
            type: Boolean,
            default: true
        }
    },
    game_two_status: {
        playing: {
            type: Boolean,
            default: false
        },
        not_playing: {
            type: Boolean,
            default: false
        },
        undecided: {
            type: Boolean,
            default: true
        }
    },
    game_three_status: {
        playing: {
            type: Boolean,
            default: false
        },
        not_playing: {
            type: Boolean,
            default: false
        },
        undecided: {
            type: Boolean,
            default: true
        }
    }
});

const Player = mongoose.model('Players', PlayersSchema);
module.exports = { Player };