const mongoose=require('mongoose')
const connectDatabase=()=>{
    mongoose.connect(process.env.MONGO_URL).then((data)=>{
        console.log(`mongo database is connected with server:${data.connection.host}`)
    }).catch((error)=>{
        console.log("we are unable to connect mongo database ")
    })
}
module.exports=connectDatabase;