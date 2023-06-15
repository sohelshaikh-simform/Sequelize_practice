// const { DataTypes } = require("sequelize");

// const { DataTypes } = require("sequelize");

// const sequelize = require("../DBconnection/connection");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value){
          this.setDataValue('username',value.toUpperCase())
        },
        get(value){
          return this.getDataValue('username').toUpperCase()+' Singh'
        }
      },
      email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
      },
      password: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.INTEGER,
        defaultValue: 20,
      },
      gender:{
        type:DataTypes.STRING,
        validate:{
          // equals:'male'
          isIn:{
            args:['male','female'],
            msg:"Please Enter male / female"
          }
        }
      }
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );
  return User;
};

// User.drop();
// User.sync({ alter: true })
//   .then(() => {
//     // insert data using build and save
//     // const user = User.build({
//     //   username: "Sohel",
//     //   password: "123456",
//     //   age: 20,
//     //   WittCodeRocks: true,
//     // });
//     // user.username="soccer"

//     // return user.save();
//   })
//   .then(() => {
//     console.log("User added to Database");
//   })
//   .catch((err) => {
//     console.log("Errorr", err);
//   });
