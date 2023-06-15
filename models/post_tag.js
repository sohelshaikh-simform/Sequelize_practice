module.exports = (sequelize, DataTypes) => {
  const Post_Tag = sequelize.define(
    "post_tag",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      postId: {
        type: DataTypes.INTEGER,
      },
      tagId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  return Post_Tag;
};
