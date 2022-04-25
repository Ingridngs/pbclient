import React , { useState, useContext } from 'react'
import ContactsBook from '../apis/ContactsBook';
import { ContactsContext } from '../context/ContactsContext';
import { useNavigate } from 'react-router-dom';



export const AddContact = () => {
  const  { addContacts }  =  useContext(ContactsContext);
   let navigate = useNavigate()
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [phone_number, setPhoneNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const response = await ContactsBook.post( "/", {
              name: name,
              last_name: last_name ,
              phone_number: phone_number,
          });
          addContacts(response.data.data.people)
         
        } catch (err){    
              alert('Contact Saved Successfully')
              navigate('/')
        }
    }
  return (
    <div className='mb-3 container'>
        <form action="" method="post">
            <div className="form-group">
                <div className="row mb-4">
                    <input 
                      value={ name }  
                      onChange={ e => 
                      setName(e.target.value) }  
                      type="text"
                      className='form-control'  
                      placeholder='First name'/>
                </div>
                <div className="row mb-4">
                      <input 
                        value={ last_name }  
                        onChange={ e => 
                        setLastName(e.target.value) } 
                        type="text"
                        className='form-control'
                         placeholder='Last Name' />
                </div>
                <div className="row mb-4">
                      <input 
                        value={ phone_number }  
                        onChange={ e => setPhoneNumber(e.target.value) } 
                        type="text"className='form-control' 
                        placeholder='Phone Number' />
                </div>
            </div> 
            <button  onClick={ handleSubmit }   type='submit' className='btn btn-primary '>Add</button>      
        </form>
    </div>
  )
}
