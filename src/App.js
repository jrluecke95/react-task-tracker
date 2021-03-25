import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "appt",
      day: 'today',
      reminder: true
    },
    {
      id: 2,
      text: "appt",
      day: 'today',
      reminder: true
    },
    {
      id: 3,
      text: "appt",
      day: 'today',
      reminder: false
    }
  ])
  return (
    <div className="container">
      <Header title='this is a prop'/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
