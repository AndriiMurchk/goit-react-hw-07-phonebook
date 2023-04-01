import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectFilteredContacts, selectIsLoading } from "redux/selectors";
import { fetchContacts, deleteContact } from "redux/operations";
import { Contact, ContactInfo, DeleteButton } from "./ContactList.styled";

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    
    const deleteContactById = (contactId) => {
        dispatch(deleteContact(contactId));
    };
    
    return (
        <div>
            {isLoading && !error && <p>Loading contacts...</p>}
            {error && <b>{error}</b>}
            {!isLoading && filteredContacts.length !== 0 && <ul>{filteredContacts.map(({ id, name, phone }) => (
                <Contact key={id}>
                    <ContactInfo>{name}: {phone}</ContactInfo>
                    <DeleteButton onClick={() => { deleteContactById(id) }}>Delete</DeleteButton>
                </Contact>))}
            </ul>}
        </div>
    )
}

export default ContactList;