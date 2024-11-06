import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/courses/${id}`)
      .then(response => {
        setCourse(response.data);
        setError(false);
      })
      .catch(error => {
        console.error("Error fetching course details:", error);
        setError(true);
      });
  }, [id]);

  if (!course) return <h2>Course not found!</h2>;

  return (
    <div className="course-detail">
      <img src={course.image || "https://via.placeholder.com/150"} alt={course.title} />
      <h1>{course.title}</h1>
      <h5>{course.category}</h5>
      <h3>Instructor: {course.instructor}</h3>
      <p>{course.description}</p>
      <h3>Modules</h3>
      <ul>
        {course.modules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
      <button>Enroll Now</button>
    </div>
  );
}

export default CourseDetail;