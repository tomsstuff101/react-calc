This is the first React app created by the author, Tom Ormiston

There are many aspects which could be improved upon.




This has been deployed on GitHub at    https://tomsstuff101.github.io/react-calc/


To install locally from this repo ensure Node.js is installed; the version I used is

$ node --version
v610.6.3

And npm is up-to-date; the version I used is

$ npm --version
6.9.0


To start
$npm start



This is a basic explanation using one example

----------
digitHandler = (param) => {
    console.log(`digitHandler --> ${param}`)
    -
    -  set the state
    -
    }
----------
 is passed into --->     <Digits theHandler={this.digitHandler}/>



Hence when a button (lets say digit '4') is pressed ie 'onClick'
----->
        const Digits = (props) => {
        return(
            -
            <div className="digits but" onClick = {() => props.theHandler('4')}>4</div>
            -
            -
          )
        }

so onClick it passes via an anaonymous function '4' to the digitHandler 
since (for digits) 'theHandler" is 'digitHandler'