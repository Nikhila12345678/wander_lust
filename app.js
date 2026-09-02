require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

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

app.get("/testListing", async (req, res) => {
let sampleListing = new Listing({
    title: "My New Villa",
    description: "By the beach",
    price: 1200,
    location: "Goa",
    country: "India",
});
   await sampleListing.save();
   console.log("sample saved");
   res.send("tested successfully");
})

app.listen(8080, () => {
    console.log("Server is listening to port 8080");
});