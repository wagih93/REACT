import React, { useState } from 'react';
import '../App.css';

function App() {
  const [name, setName] = useState('');
  const [cin, setCin] = useState('');
  const [rib, setRib] = useState('');
  const [pwd, setPwd] = useState('')
  const [nameErr, setNameErr] = useState(false);
  const [cinError, setCinError] = useState(false);
  const [ribErr, setRibErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  const nameRegex = new RegExp("[A-Z\s]+");
  const cinRegex = new RegExp("^[0-9]{8}$");
  const ribRegex = new RegExp("^[0-9]{14}$");
  const pwdRegex = new RegExp("^(?=.*?[A-Za-z])(?=.*?[A-Za-z]).{8,}$");

  const validate = () => {
    if (!nameRegex.test(name)) {
       setNameErr(true);
    }
    else{setNameErr(false);}
    if (!cinRegex.test(cin)) {
       setCinError(true);
    }
    else{setCinError(false);}
    if (!ribRegex.test(rib)) {
      setRibErr(true);
   }
   else{setRibErr(false);}
   if (!pwdRegex.test(pwd)) {
    setPwdError(true);
  }
    else{setPwdError(false);}
 };
 return (
    <div className="container">
       <input
          type="text"
          placeholder="Name..."
          value={name}
          className="input"
          onChange={(e) => setName(e.target.value)}
       />
       {nameErr && <p>Your name is invalid</p>}
       <br/>
       <input
          type="cin"
          placeholder="CIN..."
          value={cin}
          className="input"
          onChange={(e) => setCin(e.target.value)}
       />
       {cinError && <p>Your CIN must contain 8 numbers</p>}
       <br/>
       <input
          type="text"
          placeholder="RIB..."
          value={rib}
          className="input"
          onChange={(e) => setRib(e.target.value)}
       />
       {ribErr && <p>Your RIB must contain 14 numbers</p>}
       <br/>
       <input
          type="password"
          placeholder="Password..."
          value={pwd}
          className="input"
          onChange={(e) => setPwd(e.target.value)}
       />
       {pwdError && <p>Your password is invalid</p>}
       <div>
          <button onClick={validate}>Validate </button>
       </div>     
       
    </div>
 );
};
export default App;