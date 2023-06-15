const db = require("../models");
const { Sequelize, Op, QueryTypes } = require("sequelize");

const User = db.user;
const Posts = db.posts;
const Tags = db.tags;
const Post_Tag = db.post_tag;

const addUser = async (req, res) => {
  console.log("hisoghel");
  // res.json({
  //     msg:"add data"
  // })

  const user = await User.create({
    username: "Harsh kalola",
    email: "abc@gmail.com",
    password: "132456",
    age: 55,
    gender: "male",
  });
  user.username = "Harsh desai";
  user.save();
  console.log(user.dataValues);

  //   user.destroy()
  //   user.reload() take old value not modify

  // const user = await User.build({
  // username: "Het",
  // password: "456789",
  // age: 22,
  // WittCodeRocks: true,
  // });
  // user.username="soccer"

  // await user.save();
  res.status(200).json({
    status: "succes",
  });
};

const crudOpetion = async (req, res) => {
  // insert
  const user = await User.create({
    username: "Harsh kalola",
    email: "abc@gmail.com",
    password: "132456",
    age: 55,
    gender: "male",
  });

  // Update
  //   const user = await User.update(
  //     { username: "sohel shaikh" },
  //     {
  //       where: {
  //         user_id: 6,
  //       },
  //     }
  //   );

  // Delete
  // const user=await User.destroy({
  //     where:{
  //         user_id:3
  //     }
  // })

  // delete table
  // const user=await User.destroy({
  //     trunate:true
  // })

  // bulk Insert

  //   const user = await User.bulkCreate([
  //     {
  //       username: "Raj vasoya",
  //       password: "789465",
  //       age: 14,
  //       WittCodeRocks: true,
  //     },
  //     {
  //       username: "Raj vasoya",
  //       password: "789465",
  //       age: 14,
  //       WittCodeRocks: true,
  //     },
  //   ]);

  // const user=await User.findAll({})
  //   const user = await User.findOne({});
  res.status(200).json({
    status: user,
  });
};
const query = async (req, res) => {
  //   const user = await User.create({
  //     username: "Raj vasoya",
  //     password: "789465",
  //     age: 14,
  //     WittCodeRocks: true,
  //   },{
  //     fields:['username','age']
  //   });

  //   const user = await User.findAll({
  //     attributes: [
  //       "username",
  //       ["age", "user_Age"],
  //     //   [Sequelize.fn("COUNT", Sequelize.col("username")), "userCount"],
  //       [Sequelize.fn("CONCAT", Sequelize.col("username"),'id'), "userCount"],
  //     ],
  //   });

  // exclude include
  //   const user = await User.findAll({
  //     attributes: {
  //         exclude:['age','WittCodeRocks'],
  //         include: [[Sequelize.fn("CONCAT", Sequelize.col("username"),' Singh'),"full_name"]]
  //     }

  //   });

  // Conditions
  // const user = await User.findAll({
  //     where:{
  //         user_id:{
  //             [Op.gt]:2
  //         }
  //     },
  //     attributes:[
  //         [Sequelize.fn("COUNT", Sequelize.col("username")), "userCount"]
  //     ],
  //     order:[['username','DESC']],
  //     group:['username'],
  //     // limit:2,
  //     // offset:1

  //   });
  const user = await User.count({});

  res.status(200).json({
    status: user,
  });
};

const finderData = async (req, res) => {
  // const user=await User.findByPk(4);
  // const user=await User.findAndCountAll({
  //     where:{
  //         username:"Raj vasoya"
  //     }
  // });
  const [data, created] = await User.findOrCreate({
    where: { username: "dummy1" },
    defaults: {
      age: 100,
      password: "unknown",
    },
  });
  res.status(200).json({
    status: data,
    add: created,
  });
  // res.status(200).json({
  //     status: user,
  //   });
};
const setterGetter = async (req, res) => {
  const user = await User.create({
    username: "Raj kalola",
    password: "753159",
    age: 50,
    WittCodeRocks: true,
  });
  user.increment({
    age: 10,
  });
  // const user=await User.findAll({})

  res.status(200).json({
    status: user,
  });
};

const utilityMethods = async (req, res) => {
  // const user = await User.count({ where: { age: { [Op.gt]: 5 } } });

  // const user = await User.min("age");

  // const user = await User.sum("age");

  // const user = await User.increment({age:50},{where:{user_id:11}});

  // const user = await User.findAll({offset:5,limit:5})

  // const user = await User.findAll({order:[['age','DESC']]})

  const user = await User.findAll({ group: "user_id" });

  res.status(200).json({
    status: user,
  });
};

const validation = async (req, res) => {
  try {
    const user = await User.create({
      username: "Harsh kalola",
      email: "abc@gmail.com",
      password: "132456",
      age: 55,
      gender: "males",
    });
    res.status(200).json({
      status: user,
    });
  } catch (e) {
    const messages = {};
    e.errors.forEach((error) => {
      var message;
      // switch(error.validatorKey){
      //   case 'not_unique':
      //     message='Duplicate Email';
      //     break;

      //   case 'isIn':
      //     message='Gender not in male/female';
      //     break;

      //   case 'equals':
      //     message='Gender not male';
      //     break;
      // }
      message = error.message;
      messages[error.path] = message;
      console.log(messages);
    });
    // console.log(e)
  }
};
const rawQuery = async (req, res) => {
  // const user= await db.sequelize.query("Select * from users where gender=$gender",{
  // type:QueryTypes.SELECT,
  const user = await db.sequelize.query(
    "update users set username='hp' where username='HET KALOLA'",
    {
      type: QueryTypes.UPDATE,
      logging: console.log,
      // raw:true,
      // replacements:{gender:'male'}, // gender=:gender
      // replacements:['male'], //gender=?
      // replacements:{gender:['male','female']} // gender IN(:gender)
      // replacements:{searchEmail:'%@gmail.com'} // email LIKE :searchEmail
      bind: { gender: "male" },
    }
  );
  res.status(200).json({
    msg: "done",
    status: user,
  });
};

const oneToOne = async (req, res) => {
  const post = await Posts.create({
    user_id: "1",
    name: "News",
    title: "Cricket",
    content: "Cricket details",
  });
  // const user = await User.findAll({
  //   include: [{ model: Posts, as:"PostInfo",attributes: ["title", ["name", "PostName"]] }],
  //   // where: { user_id: 1 },
  // });

  res.status(200).json({
    msg: "done",
    status: post,
  });
};

const belongsTo = async (req, res) => {
  // const user = await User.create({
  //   username: "Sohel Shaikh",
  //   email: "sohel@gmail.com",
  //   password: "159357",
  //   age: 22,
  //   gender: "male",
  // });

  // const post = await Posts.create({
  //   user_id: "2",
  //   name: "News",
  //   title:'flight',
  //   content: "flight details",
  // });

  const data = await Posts.findAll({
    attributes: ["content", "title"],
    include: [
      { model: User, as: "UserInfo", attributes: ["username", "email"] },
    ],
  });

  res.status(200).json({
    msg: "done",
    status: data,
  });
};

const oneToMany = async (req, res) => {
  // const post = await Posts.create({
  //   user_id: "1",
  //   name: "News",
  //   title: "Cricket",
  //   content: "Cricket details",
  // });
  const user = await User.findAll({
    include: [
      {
        model: Posts,
        as: "PostInfo",
        attributes: ["title", ["name", "PostName"]],
      },
    ],
    // where: { user_id: 1 },
  });

  res.status(200).json({
    msg: "done",
    status: user,
  });
};

const manyToMany = async (req, res) => {
  // const post = await Posts.create({
  //   user_id: "1",
  //   name: "News",
  //   title: "Cricket",
  //   content: "Cricket details",
  // });
  
  // -------Post to Tag---------
  // const data = await Posts.findAll({
  //   attributes:['title','content'],
  //   include:[{
  //     model:Tags,
  //     attributes:['name']
  //   }]
  // });

  // ---Tag to Post------------
  const data = await Tags.findAll({
    include:[{
          model:Posts,
        }]
  });

  res.status(200).json({
    msg: "done",
    status: data,
  });
};

module.exports = {
  addUser,
  crudOpetion,
  query,
  finderData,
  setterGetter,
  utilityMethods,
  validation,
  rawQuery,
  oneToOne,
  belongsTo,
  oneToMany,
  manyToMany,
};
