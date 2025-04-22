const  express =  require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const Listing = require("C:/Users/Asus/Documents/MajorProject/models/listing.js");
const path = require("path");
const methodOverride  =  require("method-override");
const ejsMate = require("ejs-mate");
const { engine } = require("express/lib/application");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema,reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");



const MONGO_URL = "mongodb://localhost:27017/wanderlust";
main().then(()=>{
    console.log("Connected to Database")
}).catch((e)=>{
    console.log(e)
})
async function main() {
    await mongoose.connect(MONGO_URL);
}
app.set("view engine", "ejs");
app.set ("views" ,path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs" , ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//root route
app.get("/" , (req,res) =>{
    res.send("Working fine ");
})

const validateListing = (req,res,next) =>{ 
    let { error } = listingSchema.validate(req.body);
    let errMsg = error.details.map((el) => el.message).join(",");
    if(error){
        throw new ExpressError(400 , errMsg);
    }else{
        next();
    }
}

const validateReview= (req,res,next) =>{ 
    let { error } = reviewSchema.validate(req.body);
    let errMsg = error.details.map((el) => el.message).join(",");
    if(error){
        throw new ExpressError(400 , errMsg);
    }else{
        next();
    }
}

//All listing route/Index route
app.get("/listings" , wrapAsync(async (req,res)=>{
    const allListings = await Listing.find({});
    // console.log(allListings);
    res.render("C:/Users/Asus/Documents/MajorProject/views/listings/index.ejs",{allListings});
}))

//new listing
app.get("/listings/new" , (req,res) =>{
    res.render("C:/Users/Asus/Documents/MajorProject/views/listings/new.ejs" ); 
    
})

//show route
app.get("/listings/:id" ,wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("C:/Users/Asus/Documents/MajorProject/views/listings/show.ejs",{listing});
}))

//create route
app.post("/listings" , validateListing , wrapAsync(async(req,res,next) => {
     //let {title,description,image,price,location,country} = req.body;
    //but there is another way of this also ,which is more effiecient way
    let result = listingSchema.validate(req.body);
    console.log(result);    
    if(result.error){
        throw new ExpressError(400 , result.error);
    }
    const newListing =  new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    
    })
);

//edit route
app.get("/listings/:id/edit"  ,wrapAsync(async (req,res) =>{
let {id} = req.params;
const listing = await Listing.findById(id);
res.render("C:/Users/Asus/Documents/MajorProject/views/listings/edit.ejs",{listing});

}))

//update route
app.put("/listings/:id" , validateListing, wrapAsync(async (req,res)=>{
 
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    res.redirect(`/listings/${id}`);
}))

//delete route
app.delete("/listings/:id" , wrapAsync(async(req,res) =>{
    let {id} = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");

}))

//Reviews
//POST route for reviews
app.post("/listings/:id/reviews",validateReview,wrapAsync( async (req,res) =>{
   let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log(newReview);
    console.log(listing);
    res.redirect(`/listings/${listing._id}`);
}));

// app.get("/testListing" , async (req,res) =>{
//     const sampleListing = new Listing({
//         title:"Araura Villa",
//         description:"Near the Beach",
//         price:1560,
//         location:"Goa",
//         country:"India",
//     })
//     await sampleListing.save();
//     console.log("Sample saved");
//     res.send("Successfull added");
// }) 

app.all("*" , (req, res, next) =>{
    next(new ExpressError(404 , "Page Not Found!")); 

    });

app.use((err,req,res,next) =>{
    let {statusCode = 500 , message= "Something went wrong" } = err;
    res.status(statusCode).render("error.ejs",{message});
    
})

app.listen( 8080 , ()=>{
    console.log(`app is listening on port 8080`);
})

// res.status(statusCode).send(message);