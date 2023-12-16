
import { useState } from 'react';
import './App.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { lowercasechar, numberchar, specialchar, uppercasechar } from './Password';

function App() {



let [uppercase,setuppercase]= useState(false)
let [lowercase,setlowercase]= useState(false)
let [numbers,setnumbers]= useState(false)
let [special,setspecial]= useState(false)
let [randompassword,setrandompassword] = useState('')
let [textlength,settextlegth] = useState(10)

let passwordCreate=()=>{
  let passChar='';
  if((uppercase) || (lowercase) || (numbers) || (special) ){
     if(uppercase){
      passChar+=uppercasechar;
     }
     if(lowercase){
      passChar+=lowercasechar;
     }
     if(numbers){
      passChar+=numberchar;
     }
     if(special){
      passChar+=specialchar;
     }
     let t= passChar.length;
     let finalpassword=''
     for(let i=0;i<textlength;i++){
         finalpassword+=passChar.charAt( Math.floor(Math.random()*t))
     }
     setrandompassword(finalpassword)
     NotificationManager.success('Your random password is generated')

  }
  else{
    NotificationManager.error('Select atleast one checkbox to generator password')
  }   
}
let copypassword=()=>{
  navigator.clipboard.writeText(randompassword)
}
  


  return (
    <div className="App">
      <div className='password'>
        <h3>Password-Generator</h3>
        <div class="container">
          <h2>Password Generator</h2>
          <div class="result-container">
            <span>  {randompassword}   </span>
            <button class="btn"onClick={copypassword}  id="clipboard">
              <b>copy</b>
              
            </button>
          </div>
          <div class="settings">
            <div class="setting">
              <label>Password length</label>
              <input type="number" id="length" min='4' max='14' onChange={(event)=>settextlegth(event.target.value)} value={textlength} />
            </div>
            <div class="setting">
              <label>Include Uppercase </label>
              <input type="checkbox" name='uppercase'onChange={()=>setuppercase(!uppercase)} checked={uppercase} />
            </div>
            <div class="setting">
              <label>Include Lowercase</label>
              <input type="checkbox" name='lowercase' onChange={()=>setlowercase(!lowercase)} checked={lowercase} />
            </div>
            <div class="setting">
              <label>Include Numbers</label>
              <input type="checkbox" name='numbers' onChange={()=>setnumbers(!numbers)} checked={numbers} />
            </div>
            <div class="setting">
              <label>Include SpecialChar</label>
              <input type="checkbox" name='special' onChange={()=>setspecial(!special)} checked={special} />
            </div>
          </div>
          <button class="btn btn-large" onClick={passwordCreate} >
            Generate random password
          </button>
        </div>


      </div>
      <NotificationContainer/>
    </div>
  );
}

export default App;
