const controllers = require('./controllers');
const path = require('path');

module.exports = app => {

    app
        .get('/api/team_manager', controllers.getAllPlayers)
        .get('/api/team_manager/:id', controllers.getPlayerById)
        .post('/api/team_manager', controllers.addPlayer)
        .put('/api/team_manager/:id', controllers.updatePlayer)
        .delete('/api/team_manager/:id', controllers.deletePlayer)
        .all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
}