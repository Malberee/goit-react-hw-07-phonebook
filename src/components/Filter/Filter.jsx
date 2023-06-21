import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter } from '../../redux/selectors'
import { setFilter } from '../../redux/filterSlice'
import Input from '../Input'

const Filter = () => {
	const filter = useSelector(selectFilter)

	const dispatch = useDispatch()

	const onFilterChange = ({ target }) => dispatch(setFilter(target.value))

	return (
		<label>
			Find contacts by name
			<Input
				type="text"
				name="filter"
				title=""
				value={filter}
				onChange={onFilterChange}
			/>
		</label>
	)
}

export default Filter
