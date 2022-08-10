import ContactListItem from 'components/ContactListItem';
import s from './ContactList.module.css';

import {
  selectContacts,
  deleteContact,
  selectFilter,
} from 'redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux/es/exports';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <ul className={s.contactList}>
      {filter
        ? contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ name, number, id }) => (
              <ContactListItem
                name={name}
                number={number}
                key={id}
                handleClick={() => dispatch(deleteContact(id))}
              />
            ))
        : contacts.map(({ name, number, id }) => (
            <ContactListItem
              name={name}
              number={number}
              key={id}
              handleClick={() => dispatch(deleteContact(id))}
            />
          ))}
    </ul>
  );
}
