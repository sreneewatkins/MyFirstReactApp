import React, {useState} from 'react';

const Button = () => {
    //let count = 0;
    const [count, setCount] = useState(0);

    //onClick event defined as an attibute that uses a fn reference on the target element. onClick={fn}
    return (
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
    );
  };
  
export default Button;