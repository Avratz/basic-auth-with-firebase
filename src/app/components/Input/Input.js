import React from 'react'
import PropTypes from 'prop-types'

import s from './Input.module.scss'

const Input = ({ className = '', error, ...props }) => {
	return (
		<React.Fragment>
			<input
				className={`${s.input} ${error !== undefined ? s.errorInput : ''} ${className}`}
				{...props}
			/>
			{error !== undefined ? <p className={s.error}>{error}</p> : null}
		</React.Fragment>
	)
}

Input.propTypes = {
	className: PropTypes.string,
	error: PropTypes.string,
}

export default Input
