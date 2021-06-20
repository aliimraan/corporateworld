const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors')
const body_parser=require('body-parser')
require('dotenv').config();
const userRouter=require('./routes/user')
const applicationRouter=require('./routes/application')


mongoose.connect(process.env.DB_CONN,{ useNewUrlParser: true ,useUnifiedTopology: true}).then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log(err)
})

app.use(cors())
app.use(body_parser.json())
app.use('/api',userRouter)
app.use('/application',applicationRouter)

const PORT=process.env.PORT || 5000

if(process.env.NODE_ENV="production"){
    app.use(express.static('client/build'))
    
    app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}


app.listen(PORT,()=>{
    console.log('server started')
})