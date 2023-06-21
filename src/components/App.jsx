import { useEffect } from 'react'
import { nanoid } from 'nanoid'
import initialContacts from '../data/contacts.json'
import './App.scss'
import { selectContacts } from '../redux/selectors'
import Section from './Section'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import Filter from './Filter'
import { fetchContacts } from '../redux/operations'
import { useSelector, useDispatch} from 'react-redux'

const App = () => {
	const contacts = useSelector(selectContacts)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchContacts())
	}, [])

	return (
		<>
			<Section title="Phonebook">
				<ContactForm />
			</Section>
			<Section title="Contacts">
				{contacts.length ? (
					<>
						<Filter />
						<ContactList contacts={contacts} />
					</>
				) : (
					<p>Not found</p>
				)}
			</Section>
		</>
	)
}

export default App
