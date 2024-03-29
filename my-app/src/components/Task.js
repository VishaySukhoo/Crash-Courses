import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
  const x = '!';
  return (
    <div className={`task ${props.task.reminder ? 'reminder' : ''}`} //2 different classes separated by a space
    onDoubleClick={() => props.onToggle(props.task.id)}>
      <h3>{props.task.text}
        <FaTimes style={{ color: 'red' }}
          onClick={() => props.onDelete(props.task.id)} />
      </h3>
      <p>{props.task.day + x}
      </p>


    </div>
  )
}

export default Task