import React, { useState } from 'react';

function MyComponentUseState() {

  const [count, setCount] = useState(0);

  return (

    <div>

      <p>Contador: {count}</p>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>

    </div>

  );

}

export default MyComponentUseState