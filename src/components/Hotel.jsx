import React, { useState, useEffect } from "react";

function Hotel({hotel}) {
  const [ show, setShow ] = useState(false);

  return (
    <div>
      <p>{hotel.name}</p>
      {show && <p>{hotel.city} ({hotel.stars})</p>}
      {show ? <button onClick={() => {setShow(false)}}>Show less</button>: <button onClick={() => {setShow(true)}}>Show more</button>}
    </div>
  )
}

export default Hotel;
