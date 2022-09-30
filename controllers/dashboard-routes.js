const router = require("express").Router();
const sequelize = require("../config/connection");
const withAuth = require("../utils/auth");
const {
    Post,
    User,
    Comment } = require("../models");

router.get("/", withAuth, (req, res) => {
    Post.findAll({
        where: {
            userId: req.session.userId
        },
        attributes: [
            "id",
            "title",
            "created_at",
            "post_content"
        ],
        include: [
            {
                model: Comment,
                attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            },
            {
                model: User,
                attributes: ["username"]
            }
        ]
    })

    router.get("/edit/:id", withAuth, (req, res) =>{
        Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                "id",
                "title",
                "content",
                "created_at"
            ],
            include: [{
                    model: Comment,
                    attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
                    include: {
                        model: User,
                        attributes: ["username"]
                    }
                },
                {
                    model: User,
                    attributes: ["username"]
                }
            ]
        })

    module.exports = router;