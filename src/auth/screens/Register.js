import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'app/components/Button/Button'
import Input from 'app/components/Input/Input'
import SelectBox from 'app/components/SelectBox/SelectBox'
import styles from 'auth/styles/Auth.module.scss'
import useForm from 'auth/hooks/useForm'
import { COUNTRIES, PROVINCES } from 'auth/constants'

const Register = () => {
	const { form, handleSubmit, error, disable, handleChange } = useForm({
		name: '',
		surname: '',
		email: '',
		country: '',
		province: '',
		telephone: '',
		password: '',
		repeatPassword: '',
	})
	return (
		<div className={styles.formBox}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<Input
					error={error.name}
					name="name"
					placeholder="Nombre"
					type="text"
					onChange={handleChange}
				/>
				<Input
					error={error.surname}
					name="surname"
					placeholder="Apellido"
					type="text"
					onChange={handleChange}
				/>
				<Input
					error={error.email}
					name="email"
					placeholder="Email"
					type="email"
					onChange={handleChange}
				/>
				<SelectBox
					error={error.country}
					handleChange={handleChange}
					name="country"
					options={COUNTRIES}
					placeholder="Seleccioná tu país"
				/>
				<SelectBox
					disabled={form.country ? false : true}
					error={error.province}
					handleChange={handleChange}
					name="province"
					options={form.country ? PROVINCES[form.country] : []}
					placeholder="Seleccioná tu provincia"
				/>
				<Input
					error={error.telephone}
					name="telephone"
					placeholder="Teléfono"
					type="tel"
					onChange={handleChange}
				/>
				<Input
					error={error.password}
					name="password"
					placeholder="Contraseña"
					type="password"
					onChange={handleChange}
				/>
				<Input
					error={error.repeatPassword}
					name="repeatPassword"
					placeholder="Repetir contraseña"
					type="password"
					onChange={handleChange}
				/>
				<Button theme={disable ? 'disabled' : 'default'}>Registrarte</Button>
				<Link to="/login">¿Ya tenés cuenta? ¡Inicia sesión!</Link>
			</form>
		</div>
	)
}

export default Register
