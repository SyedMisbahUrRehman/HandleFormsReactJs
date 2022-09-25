import './App.css';
import React, { useState } from "react";

function App() {

  const [name,setName]=useState("");
  const [tnc,setTnc]=useState(false);
  const [gender,setGender]=useState('');
  const [data,setData]=useState('');
  function getFormData(e)
  {
    console.warn(name,tnc,gender,data)
    e.preventDefault()
  }
  return (
    <div className="App">
     <h1>Handle Form in React</h1>
     <form onSubmit={getFormData}>
     <label htmlFor="fname"><b>Fullname </b></label>
       <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} name="fname"/> <br /><br />
       
       <label htmlFor="gender"><b>Gender </b></label>
        <select name ="gender" onChange={(e)=>setGender(e.target.value)}>
         <option>Male</option>
         <option>Female</option>
         <option>Other</option>

       </select> <br /><br />
       <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Agree to Terms and Conditions</span>
       <br /><br />

     
     <div className="uploadimage">
                <label htmlFor="imgs"><b>Upload Files</b></label>
            </div>
            <input id="imgs" type="file" accept="image/png, image/jpeg,.txt,.doc,.pdf" onChange={(e)=>setData(e.target.files)} />
            <button type="submit">Submit</button>
            </form>
    </div>
    
  );
}
  

export default App;
