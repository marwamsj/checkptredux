import React ,{useState}from 'react';
import './App.css';
import Add from './components/Add/Add';
import ListTask from './components/ListTask/ListTask'

function App() {
  const [status, setStatus] = useState(true)
  const HandelAll=(x)=>{
    setStatus(x);
  }

  return (
    <div className="App">
        <h1>Todo List</h1>
        <Add HandelAll={HandelAll} />
        <ListTask status={status} />
    </div>
  );
}

export default App;
