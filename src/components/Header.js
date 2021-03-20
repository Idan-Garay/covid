import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = (e) => {
        console.log('click');
    }

    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button color="green" text="Hello" onClick={onClick}/>
        </header>
    )
}

export default Header

const headingStyle = {
    backgroundColor: 'black',
    color: 'red'
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}