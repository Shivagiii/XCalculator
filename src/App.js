
import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';



function App() {
  const [showAns,setShowAns] = useState(false);
  const [ans,setAns]=useState('');
  const [total,setTotal]=useState(0);

  function handleButtons(e){
  
   
    if(e.target.value === "=")
    { handleDisplay()}
    else
    setAns(ans+e.target.value)
    console.log(ans)
  }
  function handleDisplay(){
    console.log("handleDisplays");

    if(ans === "")
     setTotal('Error')
    else
    setTotal(evaluate(ans));

    setShowAns(true)
  }
  function handleClear(){
    setAns('')
    setShowAns(false)
  }
  return (
    <div className="App">
      <h2>React Calculator</h2>
      <input value={ans} type="text"/>
      {showAns?(<div>{total}</div>):<></>}
      
      <div className='layout'>
        <button onClick={handleButtons} value="7" type="button">7</button>
        <button onClick={handleButtons} value="8" type="button">8</button>
        <button onClick={handleButtons} value="9" type="button">9</button>
        <button onClick={handleButtons} value="+" type="button">+</button>
      </div>
      <div className='layout'>
        <button onClick={handleButtons} value="4" type="button">4</button>
        <button onClick={handleButtons} value="5" type="button">5</button>
        <button onClick={handleButtons} value="6" type="button">6</button>
        <button onClick={handleButtons} value="-" type="button">-</button>
      </div>
      <div className='layout'>
        <button onClick={handleButtons} value="1" type="button">1</button>
        <button onClick={handleButtons} value="2" type="button">2</button>
        <button onClick={handleButtons} value="3" type="button">3</button>
        <button onClick={handleButtons} value="*" type="button">*</button>
      </div>
      <div className='layout'>
        <button onClick={handleClear}>C</button>
        <button onClick={handleButtons} value="0">0</button>
        <button onClick={handleButtons} value="=">=</button>
        <button onClick={handleButtons} value="/">/</button>
      </div>
     
    </div>
  );
}

export default App;
