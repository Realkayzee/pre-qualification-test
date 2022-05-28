import React from 'react'
import { useState } from 'react'



function App() {
  const [inputs, setInputs] = useState({});
  const [moneysave, setMoneysave] = useState([])

  let dataArray = []

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  // when the handlechange is console.log, our inputs
  // will be of the form {ridername: " ", tier: "10000"}
  // in our console


  const handleSubmit = (event) => {
    if (localStorage.getItem('riderinput')) {
      let dataArray = JSON.parse(localStorage.getItem('riderinput'));
      if (dataArray.length <= 15) {
        dataArray.push(inputs)
        localStorage.setItem('riderinput', JSON.stringify(dataArray));
      } else {
        alert("we have reached the limit of numbers of dataArrayrs")
      }
      console.log(dataArray)
      for (let i = 0; i < 15; i++) {
        // breakdown per members i.e the review of ridernames and the tiers they opt in for
        let data = dataArray[i]
        console.log(data)

      }

      // the dataArray[i].tier targetted the tier's values
      // the parseInt convert its string to number
      // moneysave is the array of the tires total number
      // which can be calculated by using the javascript reduce method
    } else {
      dataArray.push(inputs)
      localStorage.setItem('riderinput', JSON.stringify(dataArray));

    }

    event.preventDefault();
  }
  const TotalMoneySaved = () => {
    for (let i = 0; i < 15; i++) {
      // this will calculate the total money saved
      setMoneysave(data => [...data, parseInt(dataArray[i].tier)])
      moneysave.reduce((prev, cur) => prev + cur)
    }
  }

  // our dataArray is the array storing up the object's data
  // dataArray will be of the format
  // dataArray = [
  //  {ridername: "", tier: "10000"},
  //  {ridername: "", tier: "10000"},
  //  {ridername: "", tier: "10000"},
  //  {ridername: "", tier: "10000"},
  //  ]
  // depending on the inputted data from users

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* input for rider's name */}
        <label>Rider's name
          <input
            type="text"
            name="ridername"
            value={inputs.ridername || ""}
            onChange={handleChange}
          />
        </label>
        <p>Select your saving type</p>
        <select name="tier" value={inputs.tier || "10000"} onChange={handleChange}>
          <option value="10000">dataArray 10,000 naira for {Math.round(0.07 * 10000)} cashback in a week </option>
          <option value="20000">dataArray 20,000 naira for 12%:{Math.round(0.12 * 20000)} cashback in a week</option>
          <option value="30000">dataArray 30,000 naira for 25%:{Math.round(0.25 * 30000)} cashback in a week</option>
        </select>
        <input type="submit" />
        <p>{TotalMoneySaved}</p>
      </form>
    </div>
  )
}
export default App;


// It is advisable to check localhost for the  app datastorage
