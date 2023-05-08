const { default: mongoose} = require('mongoose')
mongoose.set('strictQuery',false)
const dbConnect = async ()=>{
     try{
        const conn = await mongoose.connect(process.env.MONGOOB_URI)
        if(conn.connection.readyState ===1) console.log('DB CONNECTION IS SUCCESSFULLY!')
        else  console.log('DB Connecting')     
      }
     catch(error){
      console.log('DB CONNECTION IS FAIL')
      throw new Error(error)
     }
}
module.exports = dbConnect