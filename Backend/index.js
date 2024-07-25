import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route.js/book.route.js"
import userRoute from "./route.js/user.route.js"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT= process.env.PORT || 4000;
//connect to Mongo db
const Uri =process.env.MongoDbUri
try{
  mongoose.connect(Uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true

  });
  console.log("Connected to mongodb");

}catch(error){
  console.log("Error: ",error)    
}

//defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})