// import React, { useState } from 'react'

import { useCounterStore } from "./store";

const App = () => {

  // const [count] = useState(0);

  const count = useCounterStore((state)=> state.count);

  return <OtherComponent count={count} />
};

const OtherComponent = ({count}) => {
  const IncrementAsync = useCounterStore((state) => state.Increment);
  const Decrement = useCounterStore((state) => state.Decrement);

  return <div>{count}
  <div>
    <button onClick={IncrementAsync}>IncrementAsync</button>
    <button onClick={Decrement}>Decrement</button>
    </div>
    </div>
};

export default App

