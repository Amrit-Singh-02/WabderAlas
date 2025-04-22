const mongoose = require("mongoose");
const initData = require("../init/data");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";
main().then(()=>{
    console.log("Connected to Database")
}).catch((e)=>{
    console.log(e)
})
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();