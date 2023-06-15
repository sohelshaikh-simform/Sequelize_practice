module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define(
      "posts",
      {
        user_id: {
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING,
        },
        title:{
          type:DataTypes.STRING,
        },
        content:{
          type:DataTypes.STRING,
        },
      },
      {
        createdAt: "create_at",
        updateAt: "modified_at",
      }
    );
    return Posts;
  };