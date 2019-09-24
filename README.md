
This is the first React app created by the author, Tom Ormiston

This has been [deployed on GitHub](https://tomsstuff101.github.io/react-calc/)

<a href="https://tomsstuff101.github.io/react-calc/">
<img src="https://github.com/tomsstuff101/react-calc/blob/master/README-Images/React%20Calc.png" >
</a>


To install locally from this repo ensure Node.js is installed; the version I used was

$ node --version
v610.6.3

And npm is up-to-date; the version I used was

$ npm --version
6.9.0


To start
$npm start


This is a basic explanation using one example

```
----------
digitHandler = (param) => {
    console.log(`digitHandler --> ${param}`)
    -
    -  set the state
    -
    }
----------
```

 is passed into --->    
``` 
<Digits theHandler={this.digitHandler}/>
```


Hence when a button (lets say digit '4') is pressed ie 'onClick'
----->
```
        const Digits = (props) => {
        return(
            -
            <div className="digits but" onClick = {() => props.theHandler('4')}>4</div>
            -
            -
          )
        }
```
so onClick it passes via an anaonymous function '4' to the digitHandler 
since (for digits) 'theHandler" is 'digitHandler'

There are many areas where this app could be improved upon.

From creating an array of keys and applying the mapping function to produce the button functionality, to simplifying the CSS.

However as a first attempt I was reasonably happy with the outcome.