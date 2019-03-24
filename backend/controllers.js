const { Player } = require('./models');

module.exports = {

  getAllPlayers: (req, res) => {
    Player.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getPlayerById: (req, res) => {
    const ID = req.params.id;
    Player.find({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addPlayer: (req, res) => {
    const DATA = req.body;    
    Player.create(DATA, {runValidators: true})
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  updatePlayer: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    console.log(DATA)
    Player.findOneAndUpdate({ _id: ID }, DATA, {runValidators: true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deletePlayer: (req, res) => {
    const ID = req.params.id;
    Player.findOneAndDelete({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}