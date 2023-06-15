module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define(
    "tags",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: "create_at",
      updateAt: "modified_at",
    }
  );
  return Tags;
};
