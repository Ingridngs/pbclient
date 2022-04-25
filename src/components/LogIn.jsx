import React from 'react'

export const LogIn = () => {
  return (
    <div className='mb-4'>
        <form>
            <div className="form-group">
                <label  htmlFor='name'>Username</label>
                <input 
            
                
                    id="username" 
                    className='form-control'
                    type="text"/>
            </div>
            <div className="form-group">
                <label  htmlFor='last_name'>Password</label>
                <input 
                    
            
                    id="password" 
                    className='form-control' 
                    type="password"/>
            </div>
            <button  type="submit"  className='btn btn-primary'>LogIn</button>
            
        </form>
    </div>
  )
}
