import React, { useEffect,useContext ,useState} from 'react'
import ContactsBook from '../apis/ContactsBook'
import { ContactsContext } from '../context/ContactsContext';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export const ContactList = (props) => {
        const { contacts,setContacts } = useContext(ContactsContext);
        const [searchT, setSearchT ] = useState('');
        let navigate = useNavigate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(  () => {
            const fetchData = async () => {
                   try {
                    const response = await ContactsBook.get('/')
                    console.log(response)
                    setContacts(response.data.data.people)
                } catch (err) {
                    console.log(err)
                }
            };
            fetchData();
            }
             ,[])
        const handleDelete = async  (id) => {
            try {
                const response = await ContactsBook.delete(`/${id}`);
                setContacts( contacts.filter( contact => {
                    return contact.id !== id
                }))
                console.log(response);
            } catch(err) {
                console.log(err)
            }
        }

        const handleUpdate = (id) => {
            navigate(`/contacts/${id}/update`)
        }

  return (
    <div>
            <label for="exampleDataList" className="form-label ">Contacts</label>
            <Link to='contacts/newcontact'>
                <i className="fa-solid fa-user-plus  new-contact"></i>
            </Link>    
        <input 
            className='form-control  mb-3' 
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."  
            onChange={ (event)  => { setSearchT(event.target.value) }}/>
        <table className='table  table-hover'>
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                { contacts && contacts.filter((val) => {
                    if( searchT ===''){
                        return val
                    }else if (val.name.toLowerCase().includes(searchT.toLowerCase())){
                        return val
                    }
                }).map( contact  =>  {
                    return(
                        <tr key={ contact.id }>
                            <td>{ contact.name }</td>
                            <td>{ contact.last_name}</td>
                            <td>{ contact.phone_number }</td>
                            <td>
                                <button onClick={ () => handleUpdate( contact.id ) }  className='btn btn-primary'>Update</button> 
                            </td>
                            <td> 
                                <button 
                                    onClick={ () => handleDelete( contact.id) }  
                                    className='btn  btn-danger'><i className="fa fa-trash" ></i></button> 
                            </td>
                        </tr>
                    )

                })}
            </tbody>
        </table>
    </div>
  )
}
