import Contact from "../Contact/Contact";

const ContactList = ({contacts, onRemove}) => {
    return <ul>
        {contacts.map((contact) => <li key={contact.id}><Contact contact={contact} onRemove={onRemove}/></li>)}
    </ul>
};

export default ContactList;
