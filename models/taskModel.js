var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var taskModel = new Schema({
   taskId:{type:String},
   title:{type:String},
   description:{type:String},
   project:{type:String},
   deadline:{type:String},
   worker:{type:String},
   createdDate:{type:String},
   originalDate:{type:String},
   completedDate:{type:String},
   status:{type:String},
   comments:{type:Array}

});

module.exports = mongoose.model('Task', taskModel,'task');