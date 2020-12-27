import React, {useState, useEffect} from 'react';
import './Example.css';

//simple counter
const Example = () => {

    //utilize usestate. JS says you can use deconstructed array in declaration
    //first variable is an arbitrary name, a getter
    //second is a setter, what you do
    //useState(0) is where you start
    const [count, setCount] = useState(0);
    
    //similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        alert(`This is to alert you have clicked the button ${count} times`);
        console.log("This is useEffect in Example.js");
    })

    return ( //this in here is JSX
        <div>
            <button onClick={() => setCount(count + 1)}>
                Click Me 
            </button>
            <p>You clicked {count} times</p> 
        </div>
    )
}
export default Example;