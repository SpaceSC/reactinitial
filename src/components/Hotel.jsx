import React, { useState, useEffect } from "react";
import Subscription from "./Subscription";

function Hotel({hotel}) {
  const [ show, setShow ] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  
  return (
    <div>
      <p>{hotel.name}</p>
      {show ? <button onClick={() => {setShow(false)}}>Show less</button>: <button onClick={() => {setShow(true)}}>Show more</button>}
      {show && <p>{hotel.city} ({hotel.stars})</p>}
      {show && <button onClick={() => {setSubscribe(true)}}>Request more info</button>}
      {subscribe && 
      <div>
        <h2>Request more info about {hotel.name}</h2>
        <Subscription key={hotel.name} hotel={hotel} setSubscribe={setSubscribe}/>
      </div>
      }
      
    </div>
  )
}

export default Hotel;
