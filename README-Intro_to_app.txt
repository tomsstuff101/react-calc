This is the first React app created by the author, Tom Ormiston

There are many aspects which could be improved upon.

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