import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {actions} from './store/index'; 

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBY = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <div className="App">
      <h2>This New h2 Tag </h2>
      <h1>Counter App</h1>
      <h1>{counter}</h1>
     
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBY}>Add Value By 10</button>
    </div>
  );
}

export default App;
