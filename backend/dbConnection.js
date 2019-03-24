module.exports = function(mongoose) {

    const URI = "mongodb://localhost/team_manager";

    mongoose.connect(URI, {useNewUrlParser: true}, 
        err => console.log("db connections", err)
    );
}