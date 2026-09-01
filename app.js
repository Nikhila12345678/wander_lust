require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to db");
   })
   .catch((err) => {
    console.log(err);
   });

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
}
app.get("/", (req, res) => {
    res.send("im root");
});

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});