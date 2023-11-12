import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './components/taskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    // Fetch tasks from an API
    const fetchTasks = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} onToggle={handleToggle} />
    </div>
  );
};

export default App;