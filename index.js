const express=require('express')
const app =express()
const PORT=process.env.PORT||8000
app.get('/',(req,res)=>{
    res.send('hii am deployed')
})
app.listen(PORT,console.log('app is running'))