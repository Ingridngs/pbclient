import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { ContactsContextProvider } from './context/ContactsContext';
import { ContactsDetailPage } from './routes/ContactsDetailPage';
import { CreateNewContact } from './routes/CreateNewContact';
import { Home } from './routes/Home';
import { NewUser } from './routes/NewUser';
import { UpdatePage } from './routes/UpdatePage';
  


function App(){
        return(
           <ContactsContextProvider>
               <div className='container'>
               <Router>
                    <Routes>
                            <Route exact  path='/login' element={ <NewUser/> }/>
                            <Route exact  path='/' element={ <Home/> }/>
                            <Route exact  path='/contacts/:id' element={<ContactsDetailPage/>}/>
                            <Route exact  path='/contacts/:id/update' element={<UpdatePage/>}/>
                            <Route exact  path='/contacts/newcontact' element={<CreateNewContact/>}/>
                    </Routes>
                </Router>
                </div>
           </ContactsContextProvider>
        )
}

export default App;