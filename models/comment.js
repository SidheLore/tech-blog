const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model { }

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: "comment"
        }
    })
    
module.exports = Comment;

