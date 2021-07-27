import React from 'react'
import PropTypes from 'prop-types'

import api from './api/client'

const AuthContext = React.createContext({})

const AuthProvider = ({ children }) => {
	const [user, setUser] = React.useState(undefined)
	const [loading, setLoading] = React.useState(true)

	React.useEffect(() => {
		const lsUser = JSON.parse(window.localStorage.getItem('USER'))

		if (lsUser !== null) {
			setUser(lsUser)
		}
		setLoading(false)
	}, [])

	React.useEffect(() => {
		if (user) {
			window.localStorage.setItem('USER', JSON.stringify(user))
		}
	}, [user])

	const signup = React.useCallback(
		async (form) => {
			setLoading(true)
			try {
				const { data, status } = await api.signup(form)
				if (status !== 200) throw new Error('An Error has occur')
				let newUser = { ...form, ...data }
				setUser(newUser)
			} catch (e) {
				//eslint-disable-next-line
				console.error(e)
			}
			setLoading(false)
		},
		[],
	)

	const actions = React.useMemo(
		() => ({
			signup,
		}),
		[signup],
	)

	const stateMemo = React.useMemo(
		() => ({
			state: {  user },
			actions,
		}),
		[user, actions],
	)

	if (loading)
		return (
			<p>Loading..</p>
		)
		
	return <AuthContext.Provider value={stateMemo}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export { AuthProvider as Provider, AuthContext as default }
