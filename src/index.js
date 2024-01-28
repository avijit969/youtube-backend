// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from './app.js'
dotenv.config(
    {path:'./env'}
)
connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("MONGO db connection failed !!! ", err);
})




/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DBNAME}`);
    app.on("error",(error)=>{
        console.log("Error",error)
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port number ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("Error in db connection", error);
    throw error;
  }
})();
*/
