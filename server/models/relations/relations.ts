const model = require('../../models');

const Relations = () => {

    console.log(model);
    // model.Author.hasMany(model.Post, { foreignKey: 'authorId' });
    // model.Post.belongsTo(model.Author, { foreignKey: 'authorId' });
}

module.exports = Relations;