    const mongoose = require('mongoose');
const review = require('./review');
    const Schema = mongoose.Schema;

    const listingSchema = new Schema ({
        title : {
            type:String,
            required : true, 
        },
        description:String,
        image:{
            type:String,
            //if user didn't give the image value then default constraint will set the default image
            //and set function will work if user trying to give the value but any chance he gave the image value as empty string 
            default:"https://unsplash.com/photos/a-mountain-range-with-snow-covered-mountains-in-the-background-eo1xRUAM0Ok",
            set:(v) => v =="" 
            ? "https://unsplash.com/photos/a-mountain-range-with-snow-covered-mountains-in-the-background-eo1xRUAM0Ok" 
            : v,
        },
        price:Number,
        location:String,
        country:String,
        reviews : [{
            type : Schema.Types.ObjectId,
            ref : "Review",
        }],
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User",
        },
    })

    listingSchema.post('findOneAndDelete', async (listing) => {
        if(listing){
            //delete all the reviews of the listing
            await review.deleteMany({_id : {$in : listing.reviews}});
        }
        
    })

    const Listing = mongoose.model("Listing" , listingSchema);
    module.exports = Listing;
