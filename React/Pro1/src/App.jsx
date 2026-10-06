// import React from 'react'
// import Student1 from './components/Student1'
// import Student2 from './components/Student2'
// const App = () => {
//   return (
//     <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
//       <h1>MY STUDENT RECORDS</h1>
//       <div style={{display:'flex',gap:'20px'}}>
//       <Student1 rollno="101" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJ4IZbkwwyJD4dq7MObC7x1gpYN0xVkTOV_X9T9ZCMQ&s=10" name="Alice" class="B.Tech" address="Delhi" />
//       <br />
//       <Student1 rollno="102" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10" name="Bob" class="M.Tech" address="Mumbai" />
//       {/* <Student2 /> */}
//       </div>
//     </div>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Home() {
  return <h1>This is my Home page</h1>;
}
function About() {
  return <h1>This is my About page</h1>;
}

function Phone() {
  return <h1>This is my Phone page</h1>;
}

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> {/*  "/" reserves for home */}
        <Link to="/about">About Us</Link>
        <Link to="/phone">Phone</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/phone" element={<Phone />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
