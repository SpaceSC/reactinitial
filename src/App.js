import './App.css'
import React, { useState, useEffect } from "react";
import LoadingMask from './components/LoadingMask';
import Hotel from './components/Hotel';

const App = () => {

  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ hotels, setHotels ] = useState([]);

  useEffect(() => {
    fetch("api/hotels")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setHotels(result);
      },
      (error) => {
        console.log(error);
        setIsLoaded(true);
      }
    )
  }, [])

  return (
    <div className="App">
      <h1>Hotels</h1>
      {!isLoaded && <LoadingMask/>}
      {hotels.map((hotel) => (<Hotel key={hotel.name} hotel={hotel}/>))}
    </div>
  )
}

export default App
