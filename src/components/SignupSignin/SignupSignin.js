import React, { useState } from 'react'
import logo from '../../assets/svg/signup_logo.svg';
import './style.css';

const SignupSignin = (props) => {
    const [mode, setMode] = useState(props.mode);
    function showSignupForm() {
        setMode('signup-mode');
    }

    function showSigninForm() {
        setMode('');
    }
  return (
      <div className={`container ${mode}`}>
          <div className='forms-container'>
              <div className='signin-signup'>
                  <form className='signin-form'>
                      <h2 className='title'>Signin</h2>
                      <div className='input-field'>
                          <i className='fas fa-user'></i>
                          <input type='text' placeholder='username' />
                      </div>
                      <div className='input-field'>
                          <i className='fas fa-lock'></i>
                          <input type='password' placeholder='password' />
                      </div>
                      <input type='button' value='Signin' className='btn solid' />
                      <p className='solid-text'>Or Sign in with social plateforms</p>
                      <div className='social-media'>
                          <a href='' className='social-icon'>
                              <i className='fab fa-facebook-f'></i>
                          </a>
                          <a href='' className='social-icon'>
                              <i className='fab fa-twitter'></i>
                          </a>
                          <a href='' className='social-icon'>
                              <i className='fab fa-google'></i>
                          </a>
                          <a href='' className='social-icon'>
                              <i className='fab fa-linkedin-in'></i>
                          </a>
                      </div>
                  </form>

                  <form className='signup-form'>
                      <h2 className='title'>Sign Up</h2>
                      <div className='input-field'>
                          <i className='fas fa-user'></i>
                          <input type='text' placeholder='username' />
                      </div>
                      <div className='input-field'>
                          <i className='fas fa-envelope'></i>
                          <input type='text' placeholder='email' />
                      </div>
                      <div className='input-field'>
                          <i className='fas fa-lock'></i>
                          <input type='password' placeholder='password' />
                      </div>
                      <input type='button' value='Signup' className='btn solid' />
                      <p className='solid-text'>Or Sign up with social plateforms</p>
                      <div className='social-media'>
                          <a href='' className='social-icon'>
                              <i className='fab fa-facebook-f'></i>
                          </a>
                          <a href='' className='social-icon'>
                              <i className='fab fa-twitter'></i>
                          </a>
                          <a href='' className='social-icon'>
                              <i className='fab fa-google'></i>
                          </a>
                          <a href='' className='social-icon'>
                              <i className='fab fa-linkedin-in'></i>
                          </a>
                      </div>
                  </form>


              </div>
              <div className='panels-container'>
                  <div className='panel left-panel'>
                      <div className='content'>
                          <h3>New here ?</h3>
                          <p>If you don't have an account then you have to first create to login</p>
                          <button className='btn transparent' id='signup-btn' onClick={showSignupForm}>Sign up</button>
                      </div>
                      <img src={logo} className='image' alt='' />
                  </div>

                  <div className='panel right-panel'>
                      <div className='content'>
                          <h3>One of us ?</h3>
                          <p>If you are already registered then no need to create another account just sign in</p>
                          <button className='btn transparent' id='signin-btn' onClick={showSigninForm}>Sign in</button>
                      </div>
                      <img src={logo} className='image' alt='' />
                  </div>
              </div>
          </div>
      </div>
  )
}

export default SignupSignin
