import { Link } from 'react-router-dom'




const About = () => {
    return (
        <about>
            <h3>My First React Project</h3>
            <p>This is my first project using React and NodeJS.</p>
            <Link to='/' style={{display: 'flex', justifyContent:'center', alignItems:'center', marginTop: '100px'}}>Go Back</Link>
        </about>
        
    )
}



/* use this for the below to work
<h1 style={headingStyle}>{title}</h1>     
const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
} */

export default About
