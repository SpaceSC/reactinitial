import React, { useState, useEffect } from "react";
import LoadingMask from './LoadingMask';

function Subscription({hotel}) {
  const [ valid, setValid ] = useState(false);
  const [ userEmail, setUserEmail ] = useState("");
  const [ showSubscribe, setShowSubscribe ] = useState(true);
  const [ result, setResult ] = useState(false);

  function validate(e) {
    setUserEmail(e.target.value);
    if(e.target.value.includes(".") && e.target.value.includes("@")){
      setValid(true);
    }else{
      setValid(false);
    }
  }

  function submitted(e){
    e.preventDefault();
   
    const data = { 
      email: userEmail, 
      hotel: hotel.name, 
    };
    
    setShowSubscribe(false);
    
    fetch('api/hotels/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then((data) =>{
        if(data) {
        setResult("Subscribed");
        } else {
          setResult("Already subscribed");
        }
      })
      .finally(()=> setTimeout(() => {setShowSubscribe(false)}, 5000));
    }

  return (
    <>
    {showSubscribe ?
      <div>
        <form onSubmit={submitted}>
        <input type="email" id="email" name="email" onInput={validate}/>
        {valid ? <button>Subscribe</button> : <button disabled>Subscribe</button>}
        </form>
      </div>
      : !result ? <LoadingMask/> : <p>{result}</p>
    }
    </>
    
  )
}

export default Subscription;
