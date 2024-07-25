
import { useState } from 'react';
import {Container, Typography, Grid, Button, TextField} from '@mui/material'

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
    <Container>
      <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      >
        <Typography
        variant="h5"
        sx={{marginTop: 5, marginBottom: 2}}
        >
          To Do List
        </Typography>
        <form>
          <Grid
            container
            spacing={2}
            alignItems={"center"}
          >
            <Grid item>
              <TextField
                  sx={{
                    width: 200,
                    "& .MuiInputBase-root":{
                      height: 45
                    }
                  }}
                type="text"
                value={task}
                onChange={e => setTask(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
              variant="outlined"
                onClick={e => handleClick(e)}
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
        </form>
        <ul>
          <Grid
            container
            alignItems={"center"}

          >
          {list.map(taskObject => {
            return (
              <>
                <li
                  key={taskObject.id}
                  >
                  {taskObject.value}</li>
                <Button
                  onClick={(e) => removeTask(e, taskObject.id)}
                  variant="outlined"
                >
                  -
                </Button>
              </>
            )})}
          </Grid>
        </ul>
      </Grid>
    </Container>
  );
}

export default App;