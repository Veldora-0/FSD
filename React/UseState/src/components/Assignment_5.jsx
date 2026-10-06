import React from "react";

const Assignment_5 = () => {
  const [row, setRow] = React.useState(300);
  const [col, setCol] = React.useState(300);
  function increaseRow() {
    setRow(row + 5);
  }
    function decreaseRow() {
    if (row <= 1) {
      alert("Row cannot be less than 1");
      return;
    }
    setRow(row - 5);
    }
    function increaseCol() {
    setCol(col + 5);
  }
    function decreaseCol() {
    if (col <= 1) {
      alert("Col cannot be less than 1");
      return;
    }
    setCol(col - 5);
  }
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ border: "2px solid black", width: "600px", height: "600px" }}>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvM0G3Kg2D1iGpKktmtGlGWDHXTcfszkQROHhA0NxdAQ&s=10"
          alt="Cat"
          style={{ width: `${row}px`, height: `${col}px` }}
        />
        <br />
        <div style={{ marginTop: "10px" }}>
          <button onClick={increaseRow} style={{ marginRight: "10px" }}>Row +</button>
          <button onClick={decreaseRow}>Row -</button>
        </div>
        <br />
        <div style={{ marginTop: "10px", marginRight: "10px" }}>
          <button onClick={increaseCol} style={{ marginRight: "10px" }}>Col +</button>
          <button onClick={decreaseCol}>Col -</button>
        </div>
      </div>
    </div>
  );
};

export default Assignment_5;
