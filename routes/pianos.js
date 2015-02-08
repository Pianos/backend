var express = require('express');
var bodyparser = require('body-parser');
var url = require('url');
var pianoLocations = require('../data/locations.json');

var router = express.Router();

module.exports = function() {
	
	router.use(bodyparser.json());

	router.route("/")
		.get(function(req,res){
			res.send("Hello James!");
		});
    

    router.route('/pianos')
        .get(function(req, res){
        	res.json(pianoLocations);
        });

     return router;
}
