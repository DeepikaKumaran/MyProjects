import React from 'react';

function HoverGreeting() {
  const hover = (name) => {
    alert("You hovered over " + name);
  };

  return (
    <>
      <h1>Hover over my name!</h1>
      <h2 onMouseOver={() => hover("Deepika")}>Deepika</h2>
    </>
  );
}

export default HoverGreeting;
