import React from 'react'
import Student1 from './components/Student1'
import Student2 from './components/Student2'
const App = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <h1>MY STUDENT RECORDS</h1>
      <div style={{display:'flex',gap:'20px'}}>
      <Student1 />
      <br />
      <Student1 />
      <br />
      <Student1 />
      <br />
      {/* <Student2 /> */}
      </div>
    </div>
  )
}

export default App