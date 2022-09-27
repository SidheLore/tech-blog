const user = require('./user');
const post = require('./post');
const comments = require('./comments');

user.hasMany(post, {
    foreignKey: "user_id"
})

post.belongsTo(user, {
    foreignKey: "user_id"
});

post.hasMany(comments, {
    foreignKey: "post_id"
});

comment.belongsTo(user, {
    foreignKey: "user_id"
})

module.exports = {
    user,
    post,
    comments
};

