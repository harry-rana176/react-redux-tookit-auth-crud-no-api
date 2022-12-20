import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../features/auth/authSlice'
import { Button } from 'antd'
import '../styles/header.css'

const Header = () => {
	const dispatch = useDispatch()

	return (
		<header>
			<nav className='navigation'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/user-profile'>Profile</NavLink>
			</nav>
			<Button onClick={() => dispatch(logout())} style={{ float: 'right', marginRight: '24px', marginTop: '15px' }} type='primary'>Logout</Button>
		</header>
	)
}

export default Header
