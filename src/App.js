import { useState } from 'react';
function App() {

  const [task, setTask] = useState("")

  const handleChange = e => {
    setTask(e.target.value)
  }

  const handleClick = (e) => {


  }
  return (
    <>
      <h2>To Do List</h2>
      <input
        type="text"
        value={task}
        onChange={e => handleChange(e)}
      />
      <button
        onClick={e => handleClick(e)}
      >Add Task</button>

      <p>{task}</p>
    </>
  );
}

export default App;
