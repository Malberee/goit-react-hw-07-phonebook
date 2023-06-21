import { useEffect } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectError,
	selectFilteredContacts,
	selectIsLoading,
} from '../../redux/selectors'
import { deleteContact, fetchContacts } from '../../redux/operations'
import { List, ListItem, TrashIcon } from './ContactList.styled'

const ContactList = () => {
	const dispatch = useDispatch()

	const filteredContacts = useSelector(selectFilteredContacts)
	const isLoading = useSelector(selectIsLoading)
	const error = useSelector(selectError)

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>{console.log(error) }</p>}
			{!isLoading && !error && filteredContacts.length < 1 && (
				<p>Ничё не нашли</p>
			)}
			{!isLoading && !error && (
				<List>
					{filteredContacts.map(({ id, name, number }) => {
						return (
							<ListItem key={id}>
								<p>{name}</p>
								<p>{number}</p>
								<TrashIcon onClick={() => dispatch(deleteContact(id))}>
									<FaRegTrashAlt size={18} />
								</TrashIcon>
							</ListItem>
						)
					})}
				</List>
			)}
		</>
	)
}

export default ContactList
