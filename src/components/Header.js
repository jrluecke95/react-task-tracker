import PropTypes from 'prop-types'
import Button from './Button';


const Header = (props) => {
const onClick = () => {
  console.log('click')
}

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button text='Add' color='green' onClick={onClick}/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
