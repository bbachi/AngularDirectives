var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var projectModel = new Schema({
    project:{type:String},
    teamSize:{type:String},
    deadline:{type:String},
    percentCompleted:{type:String}
});



module.exports = mongoose.model('Project', projectModel,'Project');

