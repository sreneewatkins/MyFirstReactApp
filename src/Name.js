import React from 'react';

// const Name = () => {
//     const myName = 'Renee';

//     //return using jsx. there can only be one parent element. not a list of elements
//     return( <h1>{myName}</h1>    )
// } 
//above is the original way to display the name

//this is a way to have many components with different names.
const Name = (props) => {

    //return using jsx. there can only be one parent element. not a list of elements
    return( <h1>{props.FirstName} {props.LastName}</h1>    )
}

export default Name;