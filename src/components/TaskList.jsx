import React from 'react';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span
            onClick={() => toggleTaskCompletion(index)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.description}
          </span>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
