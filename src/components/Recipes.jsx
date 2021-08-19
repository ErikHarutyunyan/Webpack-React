// Importing "react" is still required when using methods from it
import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click on me
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click on me
      </button>
    </div>
  );
}

export default Example;
