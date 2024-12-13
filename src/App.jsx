import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("Parent Component is rendering..")

  return (
    <>
      <h1>useState hook in React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <hr />
      </div>
      <ChildComponent />
    </>
  )
}

const ChildComponent = ()=>{
  console.log("Child Component is rendering..");
  return(
    <>
      <h3>
        Child Component is rendering..
      </h3>
    </>
  );
}

export default App