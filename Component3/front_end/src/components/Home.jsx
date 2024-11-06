import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/courses")
      .then(response => setCourses(response.data))
      .catch(error => console.error("Error fetching courses:", error));
  }, []);
  return (
    <div className="course-list">
      {courses.map((course) => (
        <div className="course-card" key={course._id}>
          <img src={course.image || "https://via.placeholder.com/150"} alt={course.title} />
          <h2>{course.title}</h2>
          <p>{course.briefDescription}</p>
          <p>{course.duration} duration</p>
          <Link to={`/course/${course._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;