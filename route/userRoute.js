const express=require('express');
const userControlle=require('../Controller/user_c')
const router=express.Router();

router.get('/add',userControlle.addUser)
router.get('/crud',userControlle.crudOpetion)
router.get('/query',userControlle.query)
router.get('/finder',userControlle.finderData)
router.get('/setter-getter',userControlle.setterGetter)
router.get('/utilitymethod',userControlle.utilityMethods)
router.get('/validation',userControlle.validation)
router.get('/rawquery',userControlle.rawQuery)
router.get('/oneToOne',userControlle.oneToOne)
router.get('/belongsTo',userControlle.belongsTo)
router.get('/oneToMany',userControlle.oneToMany)
router.get('/manyToMany',userControlle.manyToMany)

module.exports=router