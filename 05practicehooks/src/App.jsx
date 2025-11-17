
// This project shows real visual effect of:
// without useCallback (child re-renders every time)
// with useCallback (child re-renders only when needed)
// useEffect (runs when state changes)
// useRef (stores value without re-render)
// useState (normal state update)


import { useState, useEffect, useCallback, useRef } from "react";

//child component
function Child({ onClick }) {
  console.log("Child Component Re-rendered ❗");
  return (
    <button onClick={onClick} style={{ padding: "10px", marginTop: "10px" }}>  
      Click Child Button
    </button>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  // Track how many times App component re-renders
  renderCount.current += 1;

  // WITHOUT useCallback → function created again every render
  const normalFunction = () => {
    console.log("Normal Function Called");
  };

  // WITH useCallback → function is memoized & stable
  const memoizedFunction = useCallback(() => {
    console.log("Memoized Function Called");
  }, []);

  // useEffect runs every time "count" changes
  useEffect(() => {
    console.log("useEffect triggered because COUNT changed:", count);
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Hooks Demo</h2>

      <h3>Render Count (useRef): {renderCount.current}</h3>

      <h3>Count (useState): {count}</h3>

      <button onClick={() => setCount(count + 1)} style={{ marginRight: "10px" }}>
        Increase Count
      </button>

      <hr />

      <h3>Without useCallback ❌</h3>
      <Child onClick={normalFunction} />

      <hr />

      <h3>With useCallback ✔️</h3>
      <Child onClick={memoizedFunction} />

      <hr />
    </div>
  );
}


