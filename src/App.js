import './App.css'
import React, { useState, useEffect } from "react";
import LoadingMask from './components/LoadingMask';

const App = () => {

  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    fetch("api/hotels")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
      },
      (error) => {
        setError(true);
        setIsLoaded(true);
      }
    )
  }, [])

  return (
    <div className="App">
      <h1>Hotels</h1>
      {!isLoaded && <LoadingMask/>}
    </div>
  )
}

export default App
