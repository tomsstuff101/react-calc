import React from 'react';
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




const Operators = (props)=> {



    return(
      <div className="operatorWrapp">
        <div className="operator but">
          <button className="centButValue" onClick = {() => props.theHandler('+')}>+</button>
        </div>

        <div className="operator but">
          <button className="centButValue" onClick = {() => props.theHandler('/')}>/</button>
        </div>

        <div className="operator but">
          <button className="centButValue" onClick = {() => props.theHandler("*")}>*</button>
        </div>

        <div className="operator but">
          <button className="centButValue" onClick = {() => props.theHandler("-")}>-</button>
        </div>

        <div className="operator but">
          <button className="centButValue" onClick = {() => props.theHandler("=")}>=</button>
        </div>
      </div>
  )
  
}


const Digits = (props) => {



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
    sum:[],
    clearKey: false,
    value: 0
  }

  operatorHandler = (param) => {
    console.log(param)
    let sumArr = this.state.sum
    if(param !== '='){
      sumArr.push(param)
      this.setState({sum: sumArr})
    }

  }

  digitHandler = () => {
    console.log('digit Handler')
  }

  clearKeyHandler = () => {
    console.log('clear key handler')
  }

  render(){
    return(
      <div className="calculator">
        <Display value={this.state.value}/>
        <ClearButt clearKey={this.state.clearKey} theHandler={this.clearKeyHandler}/>
        <Operators sum={this.state.sum} theHandler={this.operatorHandler}/>
        <Digits sum={this.state.sum} theHandler={this.digitHandler}/>
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
