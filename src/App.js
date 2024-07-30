
import { useState } from 'react';
import {Container, Typography, Grid, Button, TextField, Box} from '@mui/material'

function App() {
  /* task is a state variable that stores the task
  entered into the input box*/
  const [task, setTask] = useState("");
  /*list is an array that stores the taskObject*/
  const [list, setList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(true);

  /*event handler for Add Task button */
  const handleClick = e => {
    e.preventDefault();

    console.log(`Task variable: ${task}`)
    console.log(`Task length: ${task.length}`)

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
    setErrorMessage(true)
  }

  const handleChange = e => {
    console.log("input text:>>> ", e)
    if (e.length < 1) {
      console.log('Input is less than 1')
      setErrorMessage(true)
    } else {
      console.log('Input is more than 1')
      setErrorMessage(false)
    }

    setTask(e)
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
        sx={{marginTop: 5, marginBottom: 4}}
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
                    },
                    fieldset: {borderColor: "black"}
                  }}
                type={"text"}
                value={task}
                onChange={e => handleChange(e.target.value)}
                />
            </Grid>
            <Grid item>
              <Button
                sx={{
                  border: "2px #4FBF8D solid",
                  color: "#4FBF8D",
                  "&:hover": {
                    border: "2px #4FBF8D solid",
                  },
                  fontWeight: 700
                }}
                //
                disabled={errorMessage}
                helperText={errorMessage}
                error={errorMessage}

                //
                variant="outlined"
                onClick={e => handleClick(e)}
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
        </form>
        <ul>
          {list.map((taskObject, i) => {
            return (
              <>
              <Container>
                <Box
                display={"flex"}
                gap={2}
                my={2}
                alignItems={"center"}
                >
                  <li
                    key={taskObject.id}
                    >
                    {taskObject.value}
                  </li>
                  <Button
                    sx={{
                      height:30,
                      minWidth: 0,
                      color: "#ff7474",
                      border: "3px #ff7474 solid",
                      "&:hover": {
                        border: "3px #ff7474 solid",
                      },
                    }}
                    onClick={(e) => removeTask(e, taskObject.id)}
                    variant="outlined"
                    >
                    -
                  </Button>
                </Box>
              </Container>
              </>
            )})}
        </ul>
      </Grid>
    </Container>
  );
}

export default App;