import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/courses';

function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) return <h2>Course not found!</h2>;

  return (
    <div className="course-detail">
      <img src={course.image || "https://via.placeholder.com/150"} alt={course.title} />
      <h1>{course.title}</h1>
      <p>{course.detailedDescription}</p>
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