import React from 'react'
import { useState } from 'react'



function App() {
  const [inputs, setInputs] = useState({});
  const [save, setSave] = useState([])


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  // when the handlechange is console.log, our inputs
  // will be of the form {ridername: " ", tier: "10000"}
  // in our console


  const handleSubmit = (event) => {
    if (inputs) {
      setSave(values => [...values, { inputs }])
    }

    console.log(save)
    event.preventDefault();
  }

  // our save is the array storing up the object's data
  // save will be of the format
  // save = [
  //  {ridername: "", tier: "10000"},
  //  {ridername: "", tier: "10000"},
  //  {ridername: "", tier: "10000"},
  //  {ridername: "", tier: "10000"},
  //  ]
  // depending on the inputted data from users
  const totalMoneySaved = () => {
    for (let i = 0; i < save.length; i++) {
      const [moneysave, setMoneysave] = useState([])
      setMoneysave(data => [...data, parseInt(save[i].tier)])
      moneysave.reduce((prev, cur) => prev + cur)
    }
    // the save[i].tier targetted the tier's values
    // the parseInt convert its string to number
    // moneysave is the array of the tires total number
    // which can be calculated by using the javascript reduce method
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        // input for rider's name
        <label>Rider's name:
          <input
            type="text"
            name="ridername"
            value={inputs.ridername || ""}
            onChange={handleChange}
          />
        </label>
        <p>Select your tier:</p>
        <select name="tier" value={inputs.tier || "10000"} onChange={handleChange}>
          <option value="10000">Save 10,000 naira for 10%:{0.07 * 10000} cashback in a week </option>
          <option value="20000">Save 20,000 naira for 12%:{0.12 * 20000} cashback in a week</option>
          <option value="30000">Save 30,000 naira for 25%:{0.25 * 30000} cashback in a week</option>
        </select>
        <input type="submit" />
      </form>

      <h2 className='Data page'>Data Page of the Saving App</h2>
      <p>The total money saved by all riders is {totalMoneySaved}</p>
      <p>The breakdown per member is {save} </p>

        // save consist of the numbers of rider that saved with the amount they save.
    </div >
  )
}
export default App;
