import React, { useState } from 'react'

const Signup = () => {
    const [credentials, setCredentials] = useState({
        name: '',
        phoneNo: '',
        altNo: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => { 
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => { 
        event.preventDefault();

        if(credentials.altNo === credentials.phoneNo){
            alert('Alternate number cannot be same as phone number');
            return;
        }

        if(credentials.password !== credentials.confirmPassword){
            console.log("triggered")
            alert('Passwords and confirm password must be same');
            return;
        }
       

        console.log(credentials);


    }
  return (
      <form className='signup-form' onSubmit={handleSubmit}>
          <h2 className='title'>Sign Up</h2>
          <div className='input-field'>
              <i className='fas fa-user'></i>
              <input type='text' placeholder='full name' name='name' onChange={handleChange} value={credentials.name}/>
          </div>
          <div className='input-field'>
              <i className='fas fa-phone'></i>
              <input type='text' placeholder='phone number' name='phoneNo' onChange={handleChange} value={credentials.phoneNo} />
          </div>
          <div className='input-field'>
              <i className='fas fa-phone'></i>
              <input type='text' placeholder='Alternate number' name='altNo' onChange={handleChange} value={credentials.altNo} />
          </div>
          <div className='input-field'>
              <i className='fas fa-envelope'></i>
              <input type='text' placeholder='email' name='email' onChange={handleChange} value={credentials.email} />
          </div>
          <div className='input-field'>
              <i className='fas fa-lock'></i>
              <input type='password' placeholder='password' name='password' onChange={handleChange} value={credentials.password} />
          </div>
          <div className='input-field'>
              <i className='fas fa-key'></i>
              <input type='text' placeholder='repeat password' name='confirmPassword' onChange={handleChange} value={credentials.confirmPassword} />
          </div>
          <input type='submit' value='Signup' className='btn solid' />
      </form>
  )
}

export default Signup
