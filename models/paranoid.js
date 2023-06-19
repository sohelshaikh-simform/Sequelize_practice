module.exports = (sequelize, DataTypes) => {
    const Paranoid = sequelize.define(
      "paran",
      {
        name: {
          type: DataTypes.STRING,
          allowNull:false
        },
        email:{
          type:DataTypes.STRING,
          allowNull:false,
          unique:true
        },
        age:{
          type:DataTypes.INTEGER,
        },
      },
      {
        timestamps:true,
        paranoid:true
      }
    );
    return Paranoid;
  };