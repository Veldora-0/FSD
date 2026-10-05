import React from 'react'

const Student1 = (props) => {
  return (
    <div>
        <div style={{border:'2px solid red',width:'300px',height:'400px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>{props.name}</h1>
            <img src={props.image} alt="" height='100px' width='100px'  />
            <h3>Roll No:{props.rollno}</h3>
            <h3>CLASS:{props.class}</h3>
            <h3>Address:{props.address}</h3>
        </div>
    </div>
  )
}

export default Student1
