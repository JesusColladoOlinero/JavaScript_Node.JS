'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/PracticaNodeJS');
mongoose.Promise = global.Promise;

const TeamSchema = mongoose.Schema({
    created_at: String,
    id: String,
    name: String
});

//sino tenemos la conexion no la referencia primero hay que poner la conexion y luego el schema
const Team = mongoose.model('Team', TeamSchema);

exports.getTeams = () => {
    return Team.find({}).exec();

    // el exec es como un commit de BBDD
};

exports.getTeam = (id) => {
    return Team.findOne({id: id}).exec();
};

exports.getTeamsByFilter = (filter) => {
    return Team.findOne(filter).exec();
};

exports.saveTeam = (team) => {
    return (new Team(team)).save();
};
