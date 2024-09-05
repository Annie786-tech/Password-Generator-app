
import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './data/passChar';

function App() {
  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [number, setNumber] = useState(false)
  let [symbols, setSymbols] = useState(false)
  let[passwordlen, setPasswordLen]=useState(10)
  let[fpass, setFpass]=useState('')
  let [copied, setCopied] = useState(false);
  let createpassword = () => {
    let charSet = ''
    let finalPass=''
    if (uppercase || lowercase || number || symbols) {
      if (uppercase) charSet += UC
      if (lowercase) charSet += LC

      if (number) charSet += NC
      if (symbols) charSet += SC
      for(let i=0; i<passwordlen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setFpass(finalPass)

    }
    else {
      alert("please select atleast one checkbox!")
    }

  }
  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
    setCopied(true); 
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className='passwordBoxIn' >
          <input type='text'value={fpass}  readOnly  /> <button onClick={copyPass} 
            className={copied ? 'copied' : ''} >{copied ? 'Copied' : 'Copy'}
</button>
        </div>
        <div className='passlength'>
          <label>Password Length</label>
          <input type='number' max={20} min={10}value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)}/>

        </div>
        <div className='passlength'>
          <label>Include uppercase letters</label>
          <input type='checkbox' checked={uppercase} onChange={() => setUppercase(!uppercase)} />

        </div>
        <div className='passlength'>
          <label>Include lowercase letters

          </label>
          <input type='checkbox' checked={lowercase} onChange={() => setLowercase(!lowercase)} />

        </div>
        <div className='passlength'>
          <label>Include numbers</label>
          <input type='checkbox' checked={number} onChange={() => setNumber(!number)} />

        </div>
        <div className='passlength'>
          <label>Include symbols</label>
          <input type='checkbox' checked={symbols} onChange={() => setSymbols(!symbols)} />


        </div>
        <button className='btn' onClick={createpassword}>Generate Password</button>

      </div>
    </>
  );
}

export default App;
