const sampleListings = [
 {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1608559326360-c71a9ea44bed?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Secluded Forest Cabin",
    description: "A cozy wooden cabin hidden in the Finnish forest, ideal for stargazing and sauna nights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 950,
    location: "Lapland",
    country: "Finland",
  },
  {
    title: "Modern City Loft",
    description: "Stylish loft with skyline views and smart amenities in downtown Chicago.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1713799210416-593f9734af6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsY29ueSUyMHZpZXclMjBpbiUyMGNpdHl8ZW58MHx8MHx8fDA%3D",
    },
    price: 2100,
    location: "Chicago",
    country: "USA",
  },
  {
    title: "Beachfront Bungalow",
    description: "Wake up to ocean waves and golden sands in this tropical beach hut in Bali.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571168538867-ad36fe110cc4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1300,
    location: "Canggu",
    country: "Indonesia",
  },
  {
    title: "Mountain Retreat",
    description: "Rustic alpine home with snow-covered views and hiking trails just outside.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1683121837356-f458c940f0ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1500,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Desert Dome Home",
    description: "Futuristic dome in Joshua Tree perfect for off-the-grid adventures under the stars.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1706438230048-ec7ec2347184?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "Joshua Tree",
    country: "USA",
  },
  {
    title: "Cliffside Villa",
    description: "Panoramic ocean views from a luxurious villa perched on Santorini's cliffs.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2800,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Countryside Farmhouse",
    description: "Charming French farmhouse with lavender fields and wine tastings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1677207856236-37bd1aee7011?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1100,
    location: "Provence",
    country: "France",
  },
  {
    title: "Tokyo Capsule Pod",
    description: "Experience minimalist living in a modern capsule hotel in the heart of Tokyo.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1634662593278-11d75aacab28?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 700,
    location: "Tokyo",
    country: "Japan",
  },
 
];
module.exports = { data: sampleListings };
  