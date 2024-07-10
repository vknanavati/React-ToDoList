
import { useState } from 'react';
function App() {

  /*state variable that stores the task
  entered in the input box*/
  const [task, setTask] = useState("");
  //array that stores the tasks
  const [list, setList] = useState([]);

  const handleClick = e => {
    e.preventDefault();

    console.log(`Task variable: ${task}`)

    const taskObject = {
      id: Math.floor(Math.random() * 1000),
      value: task
    };
    //adds task to the list of tasks
    setList([...list, taskObject]);

    console.log("useState variable 'list': ", list)
    console.log("taskObject:", taskObject)

    setTask("");

  }
  return (
    <>
      <h2>To Do List</h2>
      <form>
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button
          onClick={e => handleClick(e)}
        >Add Task</button>
      </form>
      <ul>
        {list.map(taskObject => {
          return (
            <li
              key={taskObject.id}
            >
              {taskObject.value}</li>
          )
        })}
      </ul>

    </>
  );
}

export default App;