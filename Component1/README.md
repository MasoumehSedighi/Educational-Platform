# Overview

This component is designed to display a home page listing various courses and a detailed view page for each individual course.
The goal is to provide users with an accessible, responsive interface to explore and learn more about the courses offered.

# Prerequisites
Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

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
  cd Component1

  npm install
```
3. Run the Application
In the Component1 directory, start the Vite development server
```
  npm run dev
```
This will launch at  http://localhost:5173/ .


# Application design

Components

Home Component : This Component displays a list of cources. This Component gets the data from courses.jsx in data folder

CourseDetails Component : This Component Displays the details of the selected course. This Component gets the data from courses.jsx in data folder as well.

Navbar Component : This Component helps users navigate the app and provides a link back to the home page.

```
Educational-Platform/
│
├── Component1/         # Frontend React application
|   ├── public
│   ├── src/
│   │   ├── components/ # React components
|   |   |   ├── Home.jsx
|   |   |   ├── CourseDetails.jsx
|   |   |   ├── Navbar.jsx
│   │   ├── data/     # Course data file
|   |   |    ├──courses.jsx
│   │   ├── App.jsx   # Main App component
|   |   ├── index.css # Style file
│   │   ├── main.jsx  # React entry point
│   ├── index.html    # HTML template
│   ├── .gitignore    # Ignored files
|   ├── README.md     # Documentation
|   ├── package.json  # Dependencies and scripts
|   └── ...           // Configuration Files
```
