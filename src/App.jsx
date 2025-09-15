import Counter from './Counter';
import Batsman from './Batsman';
import Bowler from './Bowler';
import Users from './Users';
import './App.css'

function App() {

  function handleClick(){
    alert("I am clicked");
  }

  const handleClick3 = () =>{
    alert("Clicked 3");
  }

  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }


  return (
    <>
      <h3>Vite + React</h3>

      <Users></Users>
      <Batsman></Batsman>
      <Bowler></Bowler>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert("Clicked 2");
      }}>Click Me 2</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={() =>{
        alert("clicked 4");
      }}>Click Me 4</button>
      <button onClick={() => handleAdd5(7)}>Click Add 5</button>
    </>
  )
}

export default App
