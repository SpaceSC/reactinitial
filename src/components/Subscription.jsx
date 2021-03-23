import React, { useState, useEffect } from "react";

function Subscription() {
  const [ valid, setValid ] = useState(false);
  const [ userEmail, setUserEmail ] = useState("");

  function validate(e) {
    setUserEmail(e.target.value);
    if(e.target.value.includes(".") && e.target.value.includes("@")){
      setValid(true);
    }else{
      setValid(false);
    }
  }

  return (
    <div>
      <form>
      <input type="email" id="email" name="email" onInput={validate}/>
      {valid ? <button>Subscribe</button> : <button disabled>Subscribe</button>}
      </form>
    </div>
  )
}

export default Subscription;
