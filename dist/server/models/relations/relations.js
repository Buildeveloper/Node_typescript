var model = require('../../models');
var Relations = function () {
    console.log(model);
    // model.Author.hasMany(model.Post, { foreignKey: 'authorId' });
    // model.Post.belongsTo(model.Author, { foreignKey: 'authorId' });
};
module.exports = Relations;
