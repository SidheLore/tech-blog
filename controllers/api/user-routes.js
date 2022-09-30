const router = require("express").Router();
const { User, Post, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", (req, res) => {
    User.create({
            username: req.body.username,
            password: req.body.password,
            password: req.body.password,
        })

module.exports = router;