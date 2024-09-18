import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import PracticalExperiences from './components/PracticalExperiences';
import Education from './components/Education';
import './project.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <PracticalExperiences />
      <Education />
    </div>
  );
}

export default App;
