import { BrowserRouter } from 'react-router-dom'
import LoginScreen from './pages/LoginScreen'
import './App.css'
import LayoutComponent from './components/LayoutComponent'
import AppRouter from './utils/AppRouter'
import { useSelector } from 'react-redux'
import RegisterScreen from './pages/RegisterScreen'
import { Routes, Route } from 'react-router-dom'

function App() {
	const { userToken } = useSelector((state) => state.auth)
	return (
		<BrowserRouter>
			<main className='container content'>
				<LayoutComponent>
					{!userToken ?
						<Routes>
							<Route exact={true} path={'/'} element={<LoginScreen />} />
							<Route exact={true} path={'/register'} element={<RegisterScreen />} />
						</Routes>
						: <AppRouter />
					}
				</LayoutComponent>
			</main>
		</BrowserRouter>
	)
}

export default App
