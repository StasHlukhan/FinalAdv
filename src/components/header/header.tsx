import React, { useState } from 'react';
import './header.scss';
import Logo from '../../img/logo.png'
import Popup from 'reactjs-popup';
import { render } from 'react-dom';
import './login.scss'
import { Link } from 'react-router-dom';


export default function Modal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
    setModal(!modal);
  };
  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
        <header>
            <div className="nav">
                <div className="nav_link">
                    <Link to={''} className="button2"><span className="button__line2 button__line--bottom2"></span>Home</Link>
                    <a href="" className="button2"><span className="button__line2 button__line--bottom2"></span>Main</a>
                    <a href="" className="button2"><span className="button__line2 button__line--bottom2"></span>About us</a>
                    <a href="" className="button2"><span className="button__line2 button__line--bottom2"></span>Partners</a>
                    <a href="" className="button2"><span className="button__line2 button__line--bottom2"></span>Contacts</a>
                    <a href="" className="button2"><span className="button__line2 button__line--bottom2"></span>Features</a>
                </div>
                <div className="nav_reg">
                    <a  className="button2" onClick={toggleModal}><span className="button__line2 button__line--bottom2"></span>Login</a>
                    <a href="" className="button2"><span className="button__line2 button__line--bottom2"></span>Registration</a>
                </div>
            </div>
            
            {modal && (
            <div id="id01" className="modal">
            <span onClick={()=>document.getElementById('id01')!.style.display='none'}
            className="close" title="Close Modal">&times;</span>
            <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button onClick={()=>document.getElementById('container')!.classList.remove('right-panel-active')} className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button onClick={()=>document.getElementById('container')!.classList.add('right-panel-active')} className="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          )}
        </header>
        
  )
}


