const {Sequelize, DataTypes}=require('sequelize')
require("dotenv").config()
const sequelize = new Sequelize("Sequelize", process.env.username, process.env.password, {
    host: "localhost",
    dialect:"mysql",
    logging:false
  });


  sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

  const db={};
  db.Sequelize=Sequelize;
  db.sequelize=sequelize;

  
  db.sequelize.sync({force:false}).then(()=>{
    console.log("yes re sync");
  })
  db.user=require('./user')(sequelize,DataTypes);
  db.posts=require('./posts')(sequelize,DataTypes);

  db.post_tag=require('./post_tag')(sequelize,DataTypes);
  db.tags=require('./tag')(sequelize,DataTypes);

  // -----------------One To One----------------
  // db.user.hasOne(db.posts,{foreignKey:'user_id',as:"PostInfo"});
  
  // -----------------One To Many----------------
  db.user.hasMany(db.posts,{foreignKey:'user_id',as:"PostInfo"});
  db.posts.belongsTo(db.user,{foreignKey:'user_id',as:"UserInfo"});
  
  // -----------------Many To Many----------------
  db.posts.belongsToMany(db.tags,{through:'post_tag'});
  db.tags.belongsToMany(db.posts,{through:'post_tag'});
  module.exports=db;
