import React from 'react';

const Course = ({ courses }) => {
  const total = (course) => {
    return course.parts.reduce((oldVal, newVal) => {
      console.log(oldVal, newVal);
      return { exercises: oldVal.exercises + newVal.exercises };
    });
  };
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <h1>{course.name}</h1>
            {course.parts.map((part) => {
              return (
                <p key={part.id}>
                  {part.name}
                  {part.exercises}
                </p>
              );
            })}
            <h2>total of {total(course).exercises} exercises </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Course;
