import React from 'react';
import TeamDetails from './TeamDetails';
import { useParams,useNavigate } from 'react-router-dom';

const MemberTasksPage = () => {

  const teamMembers = TeamDetails;
  const navigate=useNavigate();

  const { memberId } = useParams(); 
  
  const member = teamMembers.find((m) => m.id === parseInt(memberId));


  if (!member) {
    return <h2>Member not found!</h2>;
  }

  const groupedTasks = member.tasks.reduce(
    (acc, task) => {
      acc[task.status].push(task);
      return acc;
    },
    { open: [], "in progress": [], completed: [] }
  );


  const isEditable = member.id === 4;

  const handleEditClick = (taskId) => {
    navigate(`/edit-task/${taskId}`);
  };

  return (
    <div className="member-tasks">
      <h1>{member.name}'s Tasks</h1>
      <div className="task-container">
        {["open", "in progress", "completed"].map((status) => (
          <div key={status} className={`task-box ${status}`}>
            <h2>{status.charAt(0).toUpperCase() + status.slice(1)}</h2>
            {groupedTasks[status].length === 0 ? (
              <p>No tasks in this status</p>
            ) : (
              groupedTasks[status].map((task) => (
                <div key={task.id} className="task">
                    <h3>{task.task}</h3>
                    <p>Description : {task.description}</p>
                    <p>Status : {task.status}</p>  

                    {isEditable && (
                    <button onClick={() => handleEditClick(task.id)} className="edit-button">
                      Edit
                    </button>
                  )} 
                </div>
              )))}
              </div>
        ))}
      </div>
    </div>
  );
}

export default MemberTasksPage;