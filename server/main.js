const express = require("express");
const app = express();

const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { Socket } = require("dgram");
const mongoose = require("mongoose");
const userRoute = require("./Routs/userRoute");
const chatRoute = require("./Routs/chatRoute");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("welcome to our minichat...");
});
app.use("/api/users", userRoute);
app.use("/api/chats",chatRoute);
const port = process.env.PORT || 3001;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`server running on port${port}`);
});

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("monogodb conected"))
  .catch((error) => console.log("mongodb conection failed", error.massage));

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://abolfazl35353535:4GlSJKYS58H6L4Ln@cluster0.gshhonw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// const server=http.createServer(app);
// const io=new Server(server,{

//     cors:{
//         origin: "http://localhost:3000",
//         methods: ["GET", "POST"]
//     }
// })
// io.on("connection",(Socket)=>{
//     console.log(`user conected:${Socket.id}`)
//     Socket.on("send_massage", (data)=>{
//         console.log(data)
//        Socket.broadcast.emit("receive_massage",data)
//     })
// })
// server.listen(3001,()=>{
//     console.log("Server running")
// })
