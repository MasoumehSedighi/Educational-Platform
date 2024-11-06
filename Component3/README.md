#Technologies Used

Installation

To run this project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/MasoumehSedighi/Educational-Platform.git

cd Educational-Platform

```

2. Backend Setup:

    * Navigate to the backend folder: cd backend
    * Install dependencies:

    ```
    npm install
    ```

    * Set up environment variables:
    * Create a .env file in the root of the backend folder and add the following:
    ```
    DATABASE_URL=your_mongodb_connection_string
    PORT=3000
    ```
    * Start the backend server:
    ```
    npm start
    ```

3. Frontend Setup:

    * Open a new terminal and navigate to the frontend folder: cd front_end

    * Install dependencies:

    ```
    npm install
    ```

    * Start the frontend server:
    ```
    npm run dev

    ```

4. Access the Application:

    * Backend server runs at: http://localhost:3000
    * Frontend server runs at: http://localhost:5173

```
mern-educational-platform/
├── backend/
│   ├── models/
│   │   └── course.js
│   ├── routes/
│   │   └── courses.js
│   ├── server.js
│   └── .env
├── front_end/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── CourseDetail.jsx
│   │   │   └── Navbar.jsx   
│   │   ├── App.js
│   │   └── index.js
└── README.md

```