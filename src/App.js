
import { useState } from 'react';
function App() {

  /* task is a state variable that stores the task
  entered into the input box*/
  const [task, setTask] = useState("");
  /*list is an array that stores the taskObject*/
  const [list, setList] = useState([]);

  /*event handler for Add Task button */
  const handleClick = e => {
    e.preventDefault();

    console.log(`Task variable: ${task}`)

    const taskObject = {
      id: Math.floor(Math.random() * 1000),
      value: task
    };
    /*adds new task added to the taskObject
    to the list array*/
    setList([...list, taskObject]);

    console.log("useState variable 'list': ", list)
    console.log("taskObject:", taskObject)

    /*sets useState variable task 
    back to an empty string so user sees
    empty input box after pressing the Add button*/
    setTask("");
  }
  /*event handler for the - button */
  const removeTask = (e, id) => {
    e.preventDefault();
    const updatedList = list.filter((taskObject) => taskObject.id !== id);

    setList(updatedList)

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
            <>
              <li
                key={taskObject.id}
              >
                {taskObject.value}</li>
              <button
                onClick={(e) => removeTask(e, taskObject.id)}
              >-</button>
            </>
          )
        }
        )
        }
      </ul>

    </>
  );
}

export default App;