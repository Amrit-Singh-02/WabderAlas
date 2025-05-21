# WabderAlas

WabderAlas is a full-stack web application inspired by platforms like Airbnb, allowing users to create, browse, and review property listings. Users can sign up, log in, add their own listings, leave reviews on others' listings, and manage their own content securely. The project is built using the MVC (Model-View-Controller) architectural pattern for clear separation of concerns and maintainability.

---

## Features

- **User Authentication:** Secure signup, login, and logout using Passport.js and sessions.
- **Listings Management:** Users can create, edit, and delete their own property listings with image uploads.
- **Review System:** Authenticated users can leave reviews and ratings on listings. Only review authors can delete their own reviews.
- **Authorization:** Only listing owners can edit or delete their listings. Only review authors can delete their reviews.
- **Flash Messages:** User feedback for actions (success, error) using connect-flash.
- **Map Integration:** Each listing displays its location on a Mapbox map.
- **Responsive UI:** Built with EJS templates and Bootstrap 5 for a modern, responsive interface.
- **Form Validation:** Both client-side (Bootstrap) and server-side (Joi) validation for robust data integrity.
- **Cloud Image Storage:** Images are uploaded and stored using Cloudinary.

---

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose ODM)
- **Authentication:** Passport.js, passport-local, passport-local-mongoose
- **Session Management:** express-session, connect-mongo
- **Templating Engine:** EJS, ejs-mate
- **File Uploads:** multer, multer-storage-cloudinary, Cloudinary
- **Geocoding & Maps:** Mapbox SDK
- **Validation:** Joi
- **Flash Messages:** connect-flash
- **Environment Variables:** dotenv
- **Frontend:** Bootstrap 5, Font Awesome

---

## Project Structure & MVC Pattern

This project follows the **MVC (Model-View-Controller)** architecture:

- **Models:**  
  Located in `/models/` (e.g., `user.js`, `listing.js`, `review.js`).  
  Define the data schema and interact with MongoDB.

- **Views:**  
  Located in `/views/` (EJS templates).  
  Responsible for rendering the UI, including layouts, partials, and pages for listings, users, and errors.

- **Controllers:**  
  Located in `/controllers/` (e.g., `listings.js`, `reviews.js`, `users.js`).  
  Contain the business logic for handling requests, manipulating data, and returning responses.

- **Routes:**  
  Located in `/routes/` (e.g., `listing.js`, `review.js`, `user.js`).  
  Define the application's endpoints and connect them to controller actions.

- **Middleware:**  
  Custom middleware in `middleware.js` for authentication, authorization, and validation.

---

## Getting Started

### Prerequisites

- Node.js (v20.x recommended)
- MongoDB Atlas account or local MongoDB instance
- Cloudinary account (for image uploads)
- Mapbox account (for map integration)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/WabderAlas.git
   cd WabderAlas
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add:

   ```
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_mapbox_token
   ```

4. **Run the application:**
   ```sh
   node app.js
   ```
   or for development with auto-reload:
   ```sh
   npx nodemon app.js
   ```

5. **Visit in your browser:**
   ```
   http://localhost:8080
   ```

---

## License

This project is licensed under the ISC License.

---

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Passport.js](http://www.passportjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Cloudinary](https://cloudinary.com/)
- [Mapbox](https://www.mapbox.com/)
- [Font Awesome](https://fontawesome.com/)

---

## Author

- [Your Name](https://github.com/Amrit-Singh-02)
