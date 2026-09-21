import React from 'react'

const Card = () => {
  return (
    <div>
      <h1>ABES HOTEL</h1>
      <div style={{display:'flex',gap:'20px'}}>
        <div style={{border:'2px solid black',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <p>Pizza</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVslk4qkIZsA9HALbwM2udbPmjYtux6I6RzjvLAg1Cw&s" alt=""  height="100" width="100"/>
          <p>100$</p>
        </div>
        <div style={{border:'2px solid black',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <p>Burger</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqOhRuRlkj8hrkWewpf1RtjXmZaCKYEWkwqnUW_qBIA&s=10" alt="" height="100" width="100" />
          <p>200$</p>
        </div>
        <div style={{border:'2px solid black',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <p>Momo</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3VjzUS29x3dVCkRJ_UUWpA4Ma8mL9dHJ2LRxbox8K0g&s=10" alt="" height="100" width="100"/>
          <p>50$</p>
        </div>
      </div>
    </div>
  )
}

export default Card
