const express=require('express');
const insertContoller=require('../Controller/insertData_c')
const router=express.Router();
router.post('/userRecord',insertContoller.userRecord);
router.post('/postRecord',insertContoller.postRecord);
router.post('/tagRecord',insertContoller.tagRecord);
router.post('/post_tagRecord',insertContoller.post_tagRecord);
router.get('/paranoidRecord',insertContoller.paranoidRecord);
router.get('/reviewRecord',insertContoller.reviewRecord);
module.exports=router