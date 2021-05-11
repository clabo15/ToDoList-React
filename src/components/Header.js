import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

//{title} is the destructure of object props
const Header = ({title, onAdd, showAdd }) => {

    const location =useLocation()

    return (
        <header className='header'>
            
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)}
               
        </header>
    )
}

//default prop
Header.defaultProps = {
    title: 'To Do List'
}

//Sets the prop type of the object 'title' to string
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in js
/* use this for the below to work
<h1 style={headingStyle}>{title}</h1>     
const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
} */

export default Header
