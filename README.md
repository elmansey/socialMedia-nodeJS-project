# socialMedia-nodeJS-project
This is a Node.js project that implements a Social Media Backend Server. It includes user authentication and authorization, CRUD operations for users, posts, comments, and reviews, and image uploading for user profile pictures.

## Technologies Used
* Node.js
* Express
* Mongoose
* Cloudinary
* Multer
* Joi
* dotenv
* cors
* bcrypt
* jsonwebtoken

## Features
* User authentication and authorization with role-based access control.
* User model with CRUD operations.
* Post model with CRUD operations.
* Comment model with CRUD operations.
* Review model with CRUD operations.
* Image uploading using Multer and Cloudinary.
* Request validation using Joi.
* Image uploading using Multer and Cloudinary.
* Encrypt user stord password in database.

## Prerequisites
* Node.js installed on your system
* A text editor or an IDE of your choice
* MongoDB installed on your system or access to a MongoDB Atlas account

## Installation
* Clone the repository to your local machine.
* Run npm install to install the required dependencies.
* Create a .env file in the project's root directory and set your environment variables (such as the database URL, JWT secret).
* Run npm start to start the server.

## API Endpoints
### User Routes
* POST /users - Register a new user.
* POST /users/login - sign in a user.
* GET /users - Get all users.
* GET /users/:id - Get a specific user
* DELETE /users/:id - Delete a specific user by ID.
* PUT /users/:id - Update a specific user by ID.
* POST /users/uploadimg - Add profile image to a user.

### Posts Routes
* POST /posts - Create a new post.
* GET /posts - Get all posts to specific user.
* GET /posts/:id - Get a specific post by ID.
* DELETE /posts/:id - Delete a specific post by ID.
* PUT /posts/:id - Update a specific post by ID.

### reviews Routes
* POST /comments - Create a new comment.
* GET /comments - Get all comment for a specific user.
* GET /comments/:id - Get a specific comment by ID.
* DELETE /comments/:id - Delete a specific comment by ID.
* PUT /comments/:id - Update a specific comment by ID.

### reviews Routes
* POST /reviews - Create a new review.
* GET /reviews - Get all review for a specific user.
* GET /reviews/:id - Get a specific review by ID.
* DELETE /reviews/:id - Delete a specific review by ID.
* PUT /reviews/:id - Update a specific review by ID.
