import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import useLocalStorage from "./hooks/UseLocalStorage";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (description) => {
    const newTask = { description, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>DAILY TASK</h1>
      <TaskInput addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
