const express = require("express");
const registrationRoutes = express.Router();
const bcrypt = require("bcryptjs");

let Registration = require("./schema/User");

let RouteNames = require("./constants/constants");

registrationRoutes.route(RouteNames.register).post(function(req, res) {
    let register = new Registration(req.body);
    register.save()
        .then(reg => {
            res.sendStatus(200);
    })
        .catch(err => {
            res.status(400).send("Failed to store to database");
    });
});

registrationRoutes.route(RouteNames.login).post(function(req, res) {
    Registration.findOne({ user_name: req.body.user_name })
        .then( user => {
            console.log("User from login", user)
            if (!user) {
                res.sendStatus(404);
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
            }
        });
});

registrationRoutes.route(RouteNames.validate).post(function(req, res) {
    Registration.findOne({ user_name: req.body.user_name })
        .then(user => user ? res.sendStatus(204) : res.sendStatus(200))
});

registrationRoutes.route(RouteNames.data).get(function(res, req) {
    Registration.find((err, data) => err ? res.statis(400).send("Error Occurred") : res.json(data));
});

module.exports = registrationRoutes;