var express = require("express");

var router = express.Router();

// Import the model (sushi.js) to use its database functions.
var sushi = require("../models/sushi.js");

router.get("/", function(req, res) {
    sushi.all(function(data) {
        var hbsObject = {
            sushi: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/create", function(req, res) {
    sushi.create(["sushi_name"], [req.body.sushi], function(result) {
        res.redirect('/');
    });
});

router.put('/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    sushi.update({ devoured: req.body.devoured }, condition, function() {
        res.redirect('/');
    });
});

module.exports = router;
