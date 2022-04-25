import React, { useState, createContext } from 'react';

export const ContactsContext = createContext();

export const ContactsContextProvider = props => {
    const [contacts, setContacts] = useState([])

    const addContacts = (contact) => {
            setContacts([...contact, contacts])
    } 

    return ( 
        < ContactsContext.Provider  value={ { contacts, setContacts,addContacts } }> 
            { props.children } 
        </ContactsContext.Provider>
    )
}