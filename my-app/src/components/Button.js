import React from 'react'

const onClick = () => {
  console.log('you clicked')
}

const Button = (props) => {
  
  return (
    <button onClick={onClick} style={{backgroundColor: props.backgroundColor }}>{props.text}</button>
  )
}

export default Button