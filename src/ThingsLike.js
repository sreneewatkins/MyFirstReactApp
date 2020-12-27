import React from 'react';

const ThingsLike = () => {
    
    const myThingsArr = ['coding', 'biking', 'running']

    //added the index key per error code in the console and the following website https://reactjs.org/docs/lists-and-keys.html#keys
    const listItems = myThingsArr.map((currentThing, index) => 
        <li key={index}>{currentThing}</li>
    );

    return (
    <div>
        <h3>Things I Like:</h3>
        <ol>{listItems}</ol>
    </div> )
}

export default ThingsLike;