# Prerequisites
Ensure you have the following installed:

Node.js

MongoDB

# Getting Started
Follow these steps to set up the project on your local machine.

1. Clone the Repository

```
  git clone https://github.com/MasoumehSedighi/Educational-Platform.git

  cd Educational-Platform

```

2. Install Dependencies
You need to install the dependencies

```
  cd Component2

  npm install
```
3. Set up the environment variables by creating a .env file in the root directory and adding the following:

```
DATABASE_URL = # MongoDB connection string
```

4. Start the server

```
npm start
```

5. The API will be running at

```
http://localhost:3000/
```


# Testing the API

You can use Postman to test the API endpoints. Documentation for all endpoints is provided below.



GET /courses

  * Fetches all courses.

GET /courses/:id

  * Fetches a course by its ID.

POST /courses

  * Creates a new course. Requires title, description, instructor, duration, and category in the request body.
```
{
  "title": "Intro to Node.js",
  "description": "A beginner's guide to Node.js",
  "instructor": "John Doe",
  "duration": 10,
  "category": "Programming"
}
```

PUT /courses/:id

 * Updates a course by its ID.

DELETE /courses/:id

 * Deletes a course by its ID.


# Technologies Used
Express.js: A web application framework for Node.js.

MongoDB: NoSQL database for storing courses.

Mongoose: ODM for MongoDB, used for schema and model creation.

dotenv: For environment variable management.


```
Educational-Platform/
│
├── Component2/         # Backend application
    ├── models
    │   └── course.js        # Course schema
    ├── routes
    │   └── courses.js       # API route handlers for courses
    ├── .env.example         # Environment variables example(.env file ignored by Git)
    ├── .gitignore           # Ignored files for Git
    ├── package.json         # Dependencies and scripts
    ├── server.js            # Main entry point for the app
    └── README.md            # Project documentation

```
