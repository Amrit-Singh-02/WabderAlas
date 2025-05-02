const Listing = require('../models/listing');
const {listingSchema} = require('../schema.js');

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
    //let {title,description,image,price,location,country} = req.body;
   //but there is another way of this also ,which is more effiecient way
   let result = listingSchema.validate(req.body);
   console.log(result);    
   if(result.error){
       throw new ExpressError(400 , result.error);
   }
   const newListing =  new Listing(req.body.listing);
   newListing.owner = req.user._id;
   await newListing.save();
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
    res.render("listings/edit.ejs",{listing});
}

module.exports.updateListing = async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    req.flash("success" , "Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async(req,res) =>{
    let {id} = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}

