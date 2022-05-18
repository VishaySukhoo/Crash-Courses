import React from 'react'
import Task from './Task'

const Tasks = (props) => {

    return (
        <>
            {props.taskItems.map((task) => {
                return <Task key={task.id} task={task}
                    onDelete={props.onDelete}
                    onToggle={props.onToggle} />
            })}
        </>
    )
}

export default Tasks