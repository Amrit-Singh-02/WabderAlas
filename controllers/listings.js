const Listing = require('../models/listing');
const {listingSchema} = require('../schema.js');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({accessToken : mapToken});

module.exports.index = async (req,res)=>{
    const allListings = await Listing.find({});
    // console.log(allListings);
    // res.render("C:/Users/Asus/Documents/MajorProject/views/listings/index.ejs",{allListings});
    res.render("listings/index.ejs",{allListings});
}

module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path : "reviews",
        populate : {
            path : "author"
        },
    }).populate("owner");
    if(!listing){
        req.flash("error" , "Listing Not Found!");
         res.redirect("/listings");
    }
    
    res.render("listings/show.ejs",{listing});
}

module.exports.createListing = async(req,res,next) => {
    let response = await geocodingClient
    .forwardGeocode({
        query : req.body.listing.location,
        limit : 1
    }) .send();
  
   let url = req.file.path;
    let filename = req.file.filename;

   const newListing =  new Listing(req.body.listing);
   newListing.owner = req.user._id;
   newListing.image = {
       url : url,
       filename : filename,
   };
   const features = response.body.features;
if (!features || features.length === 0) {
    req.flash("error", "Location not found. Please enter a valid location.");
    return res.redirect("/listings/new");
}
    newListing.geometry = response.body.features[0].geometry;

   let savedListing = await newListing.save();
   req.flash("success","New Listing Created!");
   res.redirect("/listings");
}

module.exports.renderEditForm = async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error" , "Listing Not Found!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
     originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs",{listing, originalImageUrl});
}

module.exports.updateListing = async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id , {...req.body.listing});
    
    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image= {
        url : url,
        filename : filename,
    };
    await listing.save();
    }

    req.flash("success" , "Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async(req,res) =>{
    let {id} = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}

