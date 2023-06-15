const express=require('express');
const app=express();
const uesrRouter=require('./route/userRoute')
const insertRouter=require('./route/insertRoute')
// require('./DBconnection/connection')
app.use(express.json());
app.use(express.urlencoded({extended:false}));
require('./models')

app.use('/',uesrRouter)
app.use('/insert',insertRouter)

app.get('/',(req,res)=>{
    res.json({
        msg:"hi sohel"
    })
})
app.listen(3000,()=>{
    console.log("app is runnig on post 3000")
})