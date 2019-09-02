const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userInteractionRoutes = express.Router();
const PORT = 4000;

let UserInteraction = require('./userinteraction.model.js');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://10.2.10.2:27017/datalake', {
useNewUrlParser:true});
const connection = mongoose.connection;

connection.once('open',function(){
    console.log("Mongo connection established");
});

userInteractionRoutes.route('/').get(function(req,res) {
    UserInteraction.find(function(err, userinteractions) {
        if (err) {
            console.log(err);
        } else {
            console.log(userinteractions);
            res.json(userinteractions);
        }
    });
});

app.use('/userinteractions',userInteractionRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});