const db = require("../models");
const { Sequelize, Op, QueryTypes } = require("sequelize");

const User = db.user;
const Posts = db.posts;
const Tags = db.tags;
const Post_Tag = db.post_tag;
const paranoid = db.paranoid;
const Reviews=db.reviews;

const userRecord = async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).json({
    msg: "done",
    status: user,
  });
};

const postRecord = async (req, res) => {
  const post = await Posts.create(req.body);
  res.status(200).json({
    msg: "done",
    status: post,
  });
};

const tagRecord = async (req, res) => {
  const tag = await Tags.create(req.body);
  res.status(200).json({
    msg: "done",
    status: tag,
  });
};

const post_tagRecord = async (req, res) => {
  const post_tag = await Post_Tag.create(req.body);
  res.status(200).json({
    msg: "done",
    status: post_tag,
  });
};

// ------insert Paranoid Record---------
const paranoidRecord = async (req, res) => {
  // const post_tag = await paranoid.create({
  //   name:"Raj",
  //   email:"raj@gmail.com",
  //   age:24
  // });

  const dlt = await paranoid.destroy({ where: { name: "Sohel" },force:true});
  // const restore = await paranoid.restore({ where: { name: "Sohel" } });
  // const getdata = await db.sequelize.query('SELECT * FROM parans LIMIT 1');
  // const getdata = await paranoid.findOne();
  res.status(200).json({
    msg: "done",
    status: dlt,
  });
};


// -------------Insert Review------
const reviewRecord = async (req, res) => {
  const review = await Reviews.create({
    user_id:2,
    title:"news",
    Description:"This is news",
    active:false
  });
  res.status(200).json({
    msg: "done",
    status: review, 
  });
};

module.exports = {
  userRecord,
  postRecord,
  tagRecord,
  post_tagRecord,
  paranoidRecord,
  reviewRecord
};
