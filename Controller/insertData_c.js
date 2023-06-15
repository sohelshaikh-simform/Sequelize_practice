const db = require("../models");
const { Sequelize, Op, QueryTypes } = require("sequelize");

const User = db.user;
const Posts = db.posts;
const Tags = db.tags;
const Post_Tag = db.post_tag;

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
  const post_tag = await Post_Tag.create();
  res.status(200).json({
    msg: "done",
    status: post_tag,
  });
};

module.exports = { userRecord, postRecord, tagRecord, post_tagRecord };
