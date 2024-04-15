//Function for rendering the progress of the course(gray and yellow circles).
//It renders a specified number of yellow circles based on the input number.

export const renderCircles = (number) => {
  const circles = [];
  for (let i = 0; i < 5; i++) {
    circles.push(
      <div
        key={i}
        style={{
          backgroundColor: i < number ? "#ffd432e8" : "#3033303b",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          marginRight: "5px",
        }}
      ></div>
    );
  }
  return circles;
};
