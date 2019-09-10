import React from 'react';
import logo from './logo.svg';
import './App.css';




const Display = ()=>{
  return(
    <div className="displayWrapper">
      <h1 className="display">12345</h1>
    </div>
  )
}


const ClearButt = () => {
  return(
    <div className="clearButtWrapp">
      <button className="clearButt">Clear</button>
    </div>
  )
}




class Operators extends React.Component {

  render(){
    return(
      <div className="operatorWrapp">
        <div className="operator but">
          <div className="centButValue">+</div>
        </div>

        <div className="operator but">
          <div className="centButValue">/</div>
        </div>

        <div className="operator but">
          <div className="centButValue">*</div>
        </div>

        <div className="operator but">
          <div className="centButValue">-</div>
        </div>

        <div className="operator but">
          <div className="centButValue">=</div>
        </div>
      </div>
  )
  }
}


const Digits = () => {
  return(
    <div className="digitWrapp">

      <div className="digits but">
        <div className="centButValue">0</div>
      </div>

      <div className="digits but">
        <div className="centButValue">1</div>
      </div>

      <div className="digits but">
        <div className="centButValue">2</div>
      </div>

      <div className="digits but">
        <div className="centButValue">3</div>
      </div>

      <div className="digits but">
        <div className="centButValue">4</div>
      </div>

      <div className="digits but">
        <div className="centButValue">5</div>
      </div>

      <div className="digits but">
        <div className="centButValue">6</div>
      </div>

      <div className="digits but">
        <div className="centButValue">7</div>
      </div>

      <div className="digits but">
        <div className="centButValue">8</div>
      </div>

      <div className="digits but">
        <div className="centButValue">9</div>
      </div>

    </div>
  )
}




class Calculator extends React.Component {
  state = {
    value: 0
  }

  render(){
    return(
      <div className="calculator">
        <Display/>
        <ClearButt/>
        <Operators/>
        <Digits/>
      </div>
    )
  }
}




class App extends React.Component {
  render(){
    return(
      <div className="App">
        <Calculator/>
      </div>
    )
  }
}

export default App;
