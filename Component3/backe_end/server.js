require('dotenv').config()

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Course = require('./models/course');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: 'http://localhost:5173',
  }));

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (error) => console.error(error))

db.once('open', () => {
    console.log('Connected to Database');
    seedDatabase();
  });

app.use(express.json())

const coursesRouter = require('./routes/courses')
app.use('/courses', coursesRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


async function seedDatabase() {

    const courseCount = await Course.countDocuments();
    if (courseCount > 0) {
      console.log('Database already contains data, skipping seeding.');
      return;
    }

    try {
      await Course.insertMany([
        {
            title: "Introduction to Web Development",
            briefDescription: "Learn the fundamentals of web development.",
            description: "This course covers the basics of HTML, CSS, and JavaScript to get you started on building responsive and interactive websites.",
            image: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/oenYHimRvOZhEsEwn6PQ",
            instructor: "Alex White",
            duration: 8,
            category: "Web Development",
            modules: [

              "HTML Basics",
              "CSS Fundamentals",
              "JavaScript Introduction",
              "Building Your First Webpage"
            ]
          },
          {
            title: "Data Analysis with Python",
            briefDescription: "A beginner's guide to data analysis using Python.",
            description: "Learn to analyze and visualize data with Python, covering libraries like pandas, NumPy, and Matplotlib.",
            image: "https://digitalfloats.com/wp-content/uploads/2023/08/Python-for-data-analysis.jpg",
            instructor: "Sarah Lee",
            duration: 12,
            category: "Data Science",
            modules: [
              "Introduction to Python for Data Science",
              "Data Manipulation with pandas",
              "Data Visualization with Matplotlib",
              "Exploratory Data Analysis Techniques"
            ]
          },
          {
            title: "Machine Learning Essentials",
            briefDescription: "Understand the basics of machine learning.",
            description: "Explore core machine learning concepts and techniques using Python libraries like scikit-learn and TensorFlow.",
            image: "https://nxtgen.com/images/public.jpg",
            instructor: "Dr. Michael Chen",
            duration: 15,
            category: "Artificial Intelligence",
            modules: [
              "Introduction to Machine Learning",
              "Supervised vs. Unsupervised Learning",
              "Building Machine Learning Models",
              "Evaluating Model Performance"
            ]
          },
          {
            title: "Advanced JavaScript",
            briefDescription: "Deep dive into advanced JavaScript concepts.",
            description: "This course goes beyond basics, covering topics such as closures, async programming, and JavaScript design patterns.",
            image: "https://images.ctfassets.net/aq13lwl6616q/llkUpPk1NrKR5BMEcfyrc/42ebd1b27f3adb25c4a73fa6de52cd06/advanced_javascript_concepts_cover_photo_new.png",
            instructor: "Rachel Adams",
            duration: 10,
            category: "Programming",
            modules: [
              "Closures and Scope",
              "Asynchronous JavaScript",
              "JavaScript Design Patterns",
              "Optimizing JavaScript Code"
            ]
          },
          {
            title: "Cloud Computing with AWS",
            briefDescription: "An introduction to cloud computing using AWS.",
            description: "Learn the fundamentals of AWS and cloud computing, including services like EC2, S3, and RDS, to deploy and manage applications on the cloud.",
            image: "https://media.licdn.com/dms/image/D5612AQHcu_GS7_gCjw/article-cover_image-shrink_720_1280/0/1711346329406?e=2147483647&v=beta&t=FtClZNIzJx4zhCVRgjLzKBQpYMAc9dfRqq0JyExJGsE",
            instructor: "James Wilson",
            duration: 14,
            category: "Cloud Computing",
            modules: [
              "Introduction to AWS",
              "Setting up EC2 Instances",
              "Using S3 for Storage",
              "Database Management with RDS"
            ]
          }
      ]);
      console.log("Sample data seeded successfully.");
    } catch (error) {
      console.error("Error seeding data:", error);
    }
  }