import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../data/courses';

function Home() {
  return (
    <div className="course-list">
      {courses.map(course => (
        <div className="course-card" key={course.id}>
          <img src={course.image || "https://via.placeholder.com/150"} alt={course.title} />
          <h2>{course.title}</h2>
          <p>{course.briefDescription}</p> 
          <p>{course.hours} hours</p>
          <Link to={`/course/${course.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;