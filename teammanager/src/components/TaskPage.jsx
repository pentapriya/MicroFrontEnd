import React from 'react'
import { Link } from 'react-router-dom'
import TeamDetails from './TeamDetails'

const TaskPage = () => {

    const teamMembers = TeamDetails
  return (
    <div><div>
    <h1>Team Task Management</h1>
    <div className="team-members">
      {teamMembers.map((member) => (
        <div key={member.id} className="team-member">
          <Link to={`/member/${member.id}`}><h2>{member.name}</h2></Link>
          <div className="tasks">
            {member.tasks.map((task) => (
              <div key={task.id} className="task">
                <p><strong>Task:</strong> {task.task}</p>
                <p><strong>Status:</strong> {task.status}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div></div>
  )
}

export default TaskPage