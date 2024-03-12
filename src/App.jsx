
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'


function App() {

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
     alert('button clicked 2')
  }

  const addToFive = (num) => {
    alert('num+5')
  }
  return (
    <>
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click 2</button>
      <button onClick={() => { alert('third clicked') }}>click 3</button>
      <button onClick={()=>addToFive(3)}>click 5</button>
    </>
  )
}

export default App
