
import Counter from './Components/counter/Counter';
import Todolist from './Components/todolist/Todolist';

function App() {
  return (
    <div className="App">
     <Counter i={10} c={2}/>
     <Counter i={20} c={4}/>
     <Todolist/>
    </div>
  );
}

export default App;
