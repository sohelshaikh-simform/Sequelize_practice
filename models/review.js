module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define(
    "reviews",
    {
      user_id: {
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      Description: {
        type: DataTypes.STRING,
      },
      active: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      createdAt: "create_at",
      updateAt: "modified_at",
      scopes: {
        deleted: {
          where: {
            active: true,
          },
        },
      },
    }
  );
  return Reviews;
};
