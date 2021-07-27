import React from 'react'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import Route from 'router/components/Route'
import Loading from 'app/components/Loading/Loading'

import 'styles/global.scss'

const LoginPage = React.lazy(() => import('pages/Login'))
const RegisterPage = React.lazy(() => import('pages/Register'))

function App() {
	return (
		<Router>
			<React.Suspense
				fallback={<Loading />}
			>
				<Switch>
					<Route component={LoginPage} path="/login" />
					<Route component={RegisterPage} path="/register" />
				</Switch>
			</React.Suspense>
		</Router>
	)
}

export default App
