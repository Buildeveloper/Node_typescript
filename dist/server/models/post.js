"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(sequelize, DataTypes) {
    var Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNumm: false
        },
        text: {
            type: DataTypes.STRING,
            allowNumm: false
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNumm: false
        }
    });
    return Post;
}
exports.default = default_1;
