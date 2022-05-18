//this line used to be required, not anymore
// import React from 'react' 
import PropTypes from 'prop-types' //type impt for shortcut
import Button from './Button'
// const Header = (props) => {

//todo propTypes
const Header = ({ title }) => {

  return (
    <header className='header'>
      <h1 style={{ color: 'red', backgroundColor: 'blue' }}>
        {title}
        <br />
        <Button backgroundColor= 'green' text= 'ADD' />
        <Button backgroundColor= 'brown' text= 'DELETE' />

      </h1>
    </header>
  )
}

// const headingStyle = {
//   color: 'red'
// }

Header.defaultProps = {
  title: 'Task tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header //you can only have one default export per file