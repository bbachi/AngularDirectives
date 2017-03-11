var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://admin:tester123@ds139959.mlab.com:39959/projectifyapp');

//console.log(db);

var Project = require('./models/projectModel');
var User = require('./models/userModel');

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var projectfyRouter = express.Router();

projectfyRouter.route('/projects').get(function(req,res){
    
    Project.find(function(err,projects){
       if(err){
           res.status(500).send(err);
       }else{
           res.json(projects);
       } 
    });
});

projectfyRouter.route('/validateUser').post(function(req,res){
    
    //console.log(req);
    var userName = req.body.userName;
    var password = req.body.password;
    console.log(userName);
    console.log(password);
    
    User.findOne({userName:userName,password:password},function(err,users){
       if(err){
           res.status(500).send(err);
       }else{
           console.log("USERS:::::"+JSON.stringify(users));
          if(null != users && users.userName == userName && users.password == password){
               console.log("User found:::"+userName);
               res.json(users);
           }else{
               var inVlaidRes = {errorCode:0,errorMessage:"User Not Found"};
               res.json(inVlaidRes);
           }
       } 
    });
})

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use('/api',projectfyRouter);


app.get('/', function(req,res){
   
   console.log("sendiing html for the path /");
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(err){
    console.log("running server on from gulp port:::::::"+port);
});
    