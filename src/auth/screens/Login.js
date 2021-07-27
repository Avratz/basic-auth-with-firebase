import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'app/components/Button/Button'
import Input from 'app/components/Input/Input'
import s from 'auth/styles/Auth.module.scss'

const Login = () => {
	return (
		<div className={s.formBox}>
			<form className={s.form}>
				<Input placeholder="ejemplo@empresa.com" type="text" />
				<Input placeholder="Tu contraseña" type="password" />
				<Button>Iniciar Sesión</Button>
				<Link to="/register">¿No tenés cuenta? ¡Registrate!</Link>
			</form>
		</div>
	)
}

export default Login
