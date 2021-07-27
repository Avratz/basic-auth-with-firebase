import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as AuthProvider } from 'auth/context'

import App from './App'

ReactDOM.render(
	<React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
	</React.StrictMode>,
	document.getElementById('root'),
)