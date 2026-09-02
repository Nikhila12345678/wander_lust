const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image:{
      type: String,
      default: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb258ZW58MHx8MHx8fDA%3D",
      set: (v) => v === "" ? "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb258ZW58MHx8MHx8fDA%3D" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;