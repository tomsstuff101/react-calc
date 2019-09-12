import React from 'react';
import './App.css';




const Display = (props)=>{
  return(
    <div className="displayWrapper">
      <h1 className="display">{props.value}</h1>
    </div>
  )
}


const ClearButt = (props) => {
  return(
    <div className="clearButtWrapp">
      <button className="clearButt" onClick = {() => props.theHandler('Clear')}>Clear</button>
    </div>
  )
}




const Operators = (props)=> {


  return(
    <div className="operatorWrapp">
      <div className="operator but" onClick = {() => props.theHandler('+')}>+</div>
      <div className="operator but" onClick = {() => props.theHandler('/')}>/</div>
      <div className="operator but" onClick = {() => props.theHandler("*")}>*</div>
      <div className="operator but" onClick = {() => props.theHandler("-")}>-</div>
      <div className="operator but" onClick = {() => props.theHandler("=")}>=</div>
    </div>
)


  
}


const Digits = (props) => {

  return(
    <div className="digitWrapp">

      <div className="digits but" onClick = {() => props.theHandler('0')}>0</div>
      <div className="digits but" onClick = {() => props.theHandler('1')}>1</div>
      <div className="digits but" onClick = {() => props.theHandler('2')}>2</div>
      <div className="digits but" onClick = {() => props.theHandler('3')}>3</div>
      <div className="digits but" onClick = {() => props.theHandler('4')}>4</div>
      <div className="digits but" onClick = {() => props.theHandler('5')}>5</div>
      <div className="digits but" onClick = {() => props.theHandler('6')}>6</div>
      <div className="digits but" onClick = {() => props.theHandler('7')}>7</div>
      <div className="digits but" onClick = {() => props.theHandler('8')}>8</div>
      <div className="digits but" onClick = {() => props.theHandler('9')}>9</div>
      <div className="digits but" onClick = {() => props.theHandler('.')}>.</div>
      <div className="digits but" onClick = {() => props.theHandler('d')}>&laquo;</div>
    </div>
  )
}








class Calculator extends React.Component {
  state = {
    sum:[],
    value: 0
  }

  operatorHandler = (param) => {
    console.log(` oeratorHandler -->  ${param}`)
    let sumArr = this.state.sum
    if(param === '='){
      console.log('calculate')
      let result = eval(sumArr.join(""))
      this.setState({value: result})
      this.setState({sum: []})
      console.log(`sumArr --> ${sumArr}`)
    }
    else if(param === "Clear"){
      this.setState({value: 0})
      this.setState({sum: []})
      console.log(`sumArr --> ${sumArr}`)
    } 
    else {
      console.log(`operator  -->  ${param}`)
      sumArr.push(param)
      this.setState({sum: sumArr})
      this.setState({value: (sumArr.join(""))})
      console.log(`sumArr --> ${sumArr}`)
  }
  }

  digitHandler = (param) => {
    console.log(`digitHandler --> ${param}`)
    if(param === 'd'){
      let sumArr = this.state.sum
      sumArr.pop()
      let display = sumArr.join("")
      this.setState({value: display})
      this.setState({sum: sumArr})
      console.log(`sumArr --> ${sumArr}`)
    }
    else {
    let sumArr = this.state.sum
    sumArr.push(param)
    this.setState({sum: sumArr})
    this.setState({value: (sumArr.join(""))})
    console.log(`sumArr --> ${sumArr}`)
    }

  }


  render(){
    return(
      <div className="calculator">
        <Display value={this.state.value}/>
        <ClearButt theHandler={this.operatorHandler}/>
        <Operators theHandler={this.operatorHandler}/>
        <Digits theHandler={this.digitHandler}/>
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
