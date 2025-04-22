const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: 
       "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: 
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: 
       "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: 
       "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: 
     "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: 
       "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: 
       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: 
      "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: 
       "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: 
       "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: 
       "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: 
       "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },



  
    {
      title: "Private Island Retreat",
      description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      price: 10000,
      location: "Fiji",
      country: "Fiji"
    },
    {
      title: "Luxury Safari Lodge",
      description: "Stay in a high-end lodge surrounded by wildlife in a private game reserve.",
      image: "https://images.unsplash.com/photo-1606312613244-776b7c3c8ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 8000,
      location: "Serengeti",
      country: "Tanzania"
    },
    {
      title: "Mountain Escape Chalet",
      description: "A secluded mountain chalet offering panoramic views and cozy interiors.",
      image: "https://images.unsplash.com/photo-1574288594395-0b22137fcfb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 6000,
      location: "Alps",
      country: "Switzerland"
    },
    {
      title: "Tropical Treehouse",
      description: "Immerse yourself in nature with a stay in this luxurious treehouse surrounded by lush greenery.",
      image: "https://images.unsplash.com/photo-1572225221114-bb6d6e7b45f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 4500,
      location: "Ubud",
      country: "Indonesia"
    },
    {
      title: "Desert Oasis",
      description: "An exclusive getaway in the heart of the desert with stunning dunes and luxury amenities.",
      image: "https://images.unsplash.com/photo-1518672793742-2ec6e9126ed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 7000,
      location: "Sahara Desert",
      country: "Morocco"
    },
    {
      title: "Overwater Bungalow",
      description: "Experience paradise in a luxurious overwater bungalow with crystal-clear ocean views.",
      image: "https://images.unsplash.com/photo-1560347875-aeca5e6aef1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 12000,
      location: "Bora Bora",
      country: "French Polynesia"
    },
    {
      title: "Historic Castle Stay",
      description: "Live like royalty in this beautifully preserved castle with modern comforts.",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 9500,
      location: "Edinburgh",
      country: "Scotland"
    },
    {
      title: "Beachfront Villa",
      description: "A luxurious villa just steps away from the sandy beach and turquoise waters.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 8500,
      location: "Maldives",
      country: "Maldives"
    },
    {
      title: "Forest Cabin",
      description: "Reconnect with nature in this cozy cabin nestled in a serene forest.",
      image: "https://images.unsplash.com/photo-1586035542058-73a848f898bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 4000,
      location: "Blue Ridge Mountains",
      country: "USA"
    },
    {
      title: "Cliffside Retreat",
      description: "A breathtaking retreat perched on a cliff with sweeping ocean views.",
      image: "https://images.unsplash.com/photo-1573408409060-f99f5f4915bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 11000,
      location: "Santorini",
      country: "Greece"
    },
    {
      title: "Ice Hotel",
      description: "Stay in an artistic ice hotel for a unique and unforgettable experience.",
      image: "https://images.unsplash.com/photo-1552543847-6aa6f684f735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 5000,
      location: "Jukkasjärvi",
      country: "Sweden"
    },
    {
      title: "Urban Penthouse",
      description: "A sleek and modern penthouse offering skyline views and top-tier amenities.",
      image: "https://images.unsplash.com/photo-1548191265-cc70d3d45ba1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 13000,
      location: "New York City",
      country: "USA"
    },
    {
      title: "Island Villa with Infinity Pool",
      description: "A secluded villa with an infinity pool and stunning ocean views.",
      image: "https://images.unsplash.com/photo-1601233817482-c7e8d8fc9af8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 15000,
      location: "Phuket",
      country: "Thailand"
    },
    {
      title: "Rainforest Retreat",
      description: "Immerse yourself in the sounds of the rainforest with this luxurious retreat.",
      image: "https://images.unsplash.com/photo-1585647340547-1450e5e1a1e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 6000,
      location: "Amazon",
      country: "Brazil"
    },
    {
      title: "Wine Country Estate",
      description: "Stay in an elegant estate surrounded by rolling vineyards and lush landscapes.",
      image: "https://images.unsplash.com/photo-1562084360-5b4b6761ba76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 7000,
      location: "Napa Valley",
      country: "USA"
    },
    {
      title: "Ski-in/Ski-out Chalet",
      description: "A cozy chalet offering direct access to world-class ski slopes.",
      image: "https://images.unsplash.com/photo-1540922023620-7d9e776155dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 10000,
      location: "Aspen",
      country: "USA"
    },
    {
      title: "Floating House",
      description: "A unique stay in a modern floating house on calm waters.",
      image: "https://images.unsplash.com/photo-1501167716773-87e3b35ed7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 5000,
      location: "Halong Bay",
      country: "Vietnam"
    },
    {
      title: "Eco-Lodge",
      description: "An eco-friendly lodge in the wilderness for sustainable travelers.",
      image: "https://images.unsplash.com/photo-1574169208507-843761648eea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 5500,
      location: "Patagonia",
      country: "Chile"
    },
    {
      title: "Palace Stay",
      description: "A luxurious stay in a historic palace with exquisite interiors.",
      image: "https://images.unsplash.com/photo-1548736972-d96e8f53101b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
      price: 14000,
      location: "Jaipur",
      country: "India"
    }
];
module.exports = { data: sampleListings };
  