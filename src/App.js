
import { useState } from 'react';
function App() {

  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);


  const handleChange = e => {
    setTask(e.target.value)
  }

  const handleClick = e => {
    e.preventDefault();

    console.log(`Task variable: ${task}`)

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: task
    };

    setItems(prevList => [...prevList, item]);
    console.log(items)

    setTask("");

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
        {items.map(item => {
          return (
            <li
              key={item.id}
            >
              {item.value}</li>
          )
        })}
      </ul>

    </>
  );
}

export default App;