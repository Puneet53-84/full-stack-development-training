// src/App.js
import React from 'react';
// import about from about.js file
import About from './About';
// import Skills from Skills.js file
import Skills from './Skills';
// import Contact from Contact.js file
import Contact from './Contact';

function App() {
  return (
    <div>
      <h1>My Portfolio</h1>
      {/* importing functions */}
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;