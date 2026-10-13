import React, { useEffect, useState } from 'react'

const App = () => {
  const [formData,setformData] = useState({
    name:'',
    email:'',
    password:''
  })
  // using formdata as promps
  useEffect(() => {
    console.log("Form Data Updated:", formData); 
  }, [formData])
  const handleChange=(e)=>{
    setformData({
      ...formData,
      [e.target.name]: e.target.value ,
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert("Registration Successful");
    console.log(formData);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Enter Name' value={formData.name} onChange={handleChange} />
        <br />
        <input type="email" name="email" placeholder='Enter Email' value={formData.email} onChange={handleChange} />
        <br />
        <input type="password" name="password" placeholder='Enter Password' value={formData.password} onChange={handleChange} />
        <br />
        <button type='submit'>Registration</button>
      </form>
    </div>
  )
}

export default App
