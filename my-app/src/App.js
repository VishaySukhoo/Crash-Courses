import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
function App() {
  const name = "Vishay";

  const [taskItems, setTasks] = useState([ //if we want to change any part of the state, we will use setTasks, you cant use tasks.push because state is immutable i.e 
    //you cannot directly change, you just recreate it 
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30 p.m',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30 p.m',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 8th at 7:30 p.m',
      reminder: false,
    },
  ])

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(taskItems.filter((task) => 
      task.id !== id)
    )

  }

  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      taskItems.map((task) =>
      task.id === id ? {...task, reminder:
      !task.reminder} : task)
    )

  }

  return (
    <div className="container">
      {/* <Header title='Task Service'/> */}
      {/* <Header title={1}/> */}

      <Header />
      {taskItems.length > 0 ?
      <Tasks taskItems={taskItems} onDelete={deleteTask} 
      onToggle = {toggleReminder} />
      : 'NO TASKS TO DISPLAY!'}
      <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
