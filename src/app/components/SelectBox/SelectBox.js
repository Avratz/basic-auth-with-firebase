import React from 'react'
import PropTypes from 'prop-types'

import styles from './SelectBox.module.scss'

const SelectBox = ({ options, placeholder, name, handleChange, error, disabled = false }) => {
	return (
		<React.Fragment>
			<select
				className={`${styles.selectBox} ${error !== undefined ? styles.errorSelectBox : ''}`}
				disabled={disabled}
				name={name}
				onChange={handleChange}
			>
				<option className={styles.option} value="">
					{placeholder !== undefined ? placeholder : "Selecciona"}
				</option>
				{options.map((option) => (
					<option key={option.id} className={styles.option} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
			{error !== undefined ? <p className={styles.error}>Error</p> : null}
		</React.Fragment>
	)
}

SelectBox.propTypes = {
	options: PropTypes.array.isRequired,
	placeholder: PropTypes.string,
	name: PropTypes.string,
	handleChange: PropTypes.func,
	error: PropTypes.string,
	disabled: PropTypes.bool,
}
export default SelectBox
