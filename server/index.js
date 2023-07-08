require("dotenv").config();
const cookieParser=require('cookie-parser')
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(cookieParser())
app.use(express.json())
const profile=require("./routes/profile.js");
const project=require("./routes/project.js")
const task=require("./routes/tasks.js")
const creatProject=require("./routes/createproject.js");
const projectpage=require("./routes/projectpage.js")
app.use("/api/v1",profile)
app.use("/api/v1",project)
app.use("/api/v1",task)
app.use("/api/v1",creatProject)
app.use("/api/v1",projectpage)
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", (req, res) => {
  res.send("connection established");
});
const PORT=8080;
const CONNECTION_URL='mongodb+srv://nandini584:aHaaanRJOHHWNU77@team-workspace.gv6iam0.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));



process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});
