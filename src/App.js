import React from 'react';
import Course from './components/Course.jsx';
import './App.css';

const App = ({ courses }) => {
  return <Course courses={courses} />;
};

export default App;
