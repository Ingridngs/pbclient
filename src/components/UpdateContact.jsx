import React , { useState,useContext,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ContactsBook from '../apis/ContactsBook';
import { ContactsContext } from '../context/ContactsContext';
import { useNavigate } from 'react-router-dom';


export const UpdateContact = (props) => {
    const { id } = useParams();
    let navigate = useNavigate()
    const { people } = useContext(ContactsContext);
    const [name,setName] = useState('')
    const [last_name,setLastName] = useState('')
    const [phone_number, setPhoneNumber] = useState('')

        useEffect(() => {
            const fetchData = async() => {
                const response = await ContactsBook.get(`/${id}`);
                setName(response.data.data.people.name);
                setLastName(response.data.data.people.last_name);
                setPhoneNumber(response.data.data.people.phone_number);
            }
            fetchData();
        }, []);

        const handleSubmit = async(e) => {
            e.preventDefault()
            const updatedContact = await ContactsBook.put(`/${id}`, {
                name,
                last_name,
                phone_number,
               
            })
             navigate('/')
           
        }
  
  return (
    <div className='mb-4'>
        <form>
            <div className="form-group">
                <label  htmlFor='name'>Name</label>
                <input 
                    value={name}  
                    onChange={ e => setName(e.target.value)} 
                    id="name" 
                    className='form-control mb-2'
                    type="text"/>
            </div>
            <div className="form-group">
                <label  htmlFor='last_name'>Last Name</label>
                <input 
                    value={last_name}
                    onChange={ e => setLastName(e.target.value)} 
                    id="last_name" 
                    className='form-control mb-2' 
                    type="text"/>
            </div>
            <div className="form-group">
                <label  htmlFor='phone_number'>Phone Number</label>
                <input 
                    value={ phone_number } 
                    onChange={ e => setPhoneNumber(e.target.value)} 
                    id="phone_number" 
                    className='form-control mb-3' 
                    type="number"/>
            </div>
            <button  type="submit" onClick={ handleSubmit } className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}
