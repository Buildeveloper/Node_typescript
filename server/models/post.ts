export default function(sequelize, DataTypes) {
    const Post = sequelize.define('Post', {
        id: {
            types: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            types: DataTypes.STRING,
            allowNumm: false
        },
        text: {
            types: DataTypes.STRING,
            allowNumm: false
        },
        authorId: {
            types: DataTypes.INTEGER,
            allowNumm: false
        }
    });

    return Post;
}