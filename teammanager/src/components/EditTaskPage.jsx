import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TeamDetails from './TeamDetails';

const EditTaskPage = () => {
  const { taskId } = useParams(); 
  const navigate = useNavigate(); 


  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [task, setTask] = useState(null); 

 
  const member = TeamDetails.find((m) => m.id === 4); 

  useEffect(() => {
    if (member) {
     
      const currentTask = member.tasks.find((t) => t.id === parseInt(taskId));
      if (currentTask) {
        setTask(currentTask);
        setTaskDescription(currentTask.description);
        setTaskStatus(currentTask.status);
      } else {
        console.error('Task not found');
      }
    }
  }, [taskId, member]);

  
  if (!member) {
    return <h2>Member not found!</h2>;
  }

  if (!task) {
    return <h2>Task not found!</h2>;
  }

 
  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

 
  const handleStatusChange = (e) => {
    setTaskStatus(e.target.value);
  };

  
  const handleSave = () => {
   
    const updatedTasks = member.tasks.map((t) =>
      t.id === task.id
        ? { ...t, description: taskDescription, status: taskStatus }
        : t
    );

    
    member.tasks = updatedTasks;

    
    navigate(`/member/${member.id}`); 
  };

  return (
    <div className="edit-task">
      <h1>Edit Task</h1>
      <div className='description'>
        <label>Description:</label>
        <textarea
          value={taskDescription}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className='status'>
        <label>Status:</label>
        <select value={taskStatus} onChange={handleStatusChange}>
          <option value="open">Open</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button onClick={handleSave} className="save-button">Save</button>
    </div>
  );
};

export default EditTaskPage;
