import React from 'react'
import Student1 from './components/Student1'
import Student2 from './components/Student2'
const App = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1>MY STUDENT RECORDS</h1>
      <div style={{display:'flex',gap:'20px'}}>
      <Student1 rollno="101" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOJ4IZbkwwyJD4dq7MObC7x1gpYN0xVkTOV_X9T9ZCMQ&s=10" name="Alice" class="B.Tech" address="Delhi" />
      <br />
      <Student1 rollno="102" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICmPX7HVrXVG2gS_IWLY_caJf42RHkS3GgaBlU_cUAQ&s=10" name="Bob" class="B.Tech" address="Mumbai" />
      {/* <Student2 /> */}
      </div>
    </div>
  )
}

export default App