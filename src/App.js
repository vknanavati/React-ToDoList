import { useState } from 'react';
function App() {

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState("");

  const handleChange = e => {
    setTask(e.target.value)
  }

  const handleClick = e => {
    e.preventDefault();
    setTaskList(task)
  }
  return (
    <>
      <h2>To Do List</h2>
      <form>
        <input
          type="text"
          value={task}
          onChange={e => handleChange(e)}
        />
        <button
          onClick={e => handleClick(e)}
        >Add Task</button>
      </form>
      <ul>
        <li>{taskList}</li>
      </ul>

    </>
  );
}

export default App;
