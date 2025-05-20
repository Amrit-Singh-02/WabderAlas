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
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner : "6812e5d67f3199b54e5daa6c",
    }));
    
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();
