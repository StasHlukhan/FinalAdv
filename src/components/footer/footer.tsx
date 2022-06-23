import React from 'react';
import './footer.scss';
import Logitech from '../../img/logitech.png'
import Twitter from '../../img/twitter.png'
import Instagram from '../../img/inst.png'
import Telegram from '../../img/telegram.png'
interface IProps {
	
}

interface IState {
	employee: IUserInfo[];
}
export default class Footer extends React.Component<IProps, IState> {

	render() {
		return (
            <footer >
                <div className="lower">
                    <div className="lower_links">
                        <div className="links1">
                            <a href="" className="">Home</a>
                            <a href="" className="">Main</a>
                            <a href="" className="">About us</a>
                        </div>
                        <div className="links1">
                            <a href="" className="">Partners</a>
                            <a href="" className="">Contacts</a>
                            <a href="" className="">Features</a>
                        </div>
                    </div>
                    <div className="contact">
                        <h3>Left any questions?</h3>
                        <div className="contact_form">
                            <form action="">
                                <label className="custom-field">
                                    <input type="text" required/>
                                    <span className="placeholder">Enter Email</span>
                                </label>
                                <label className="custom-field">
                                    <input type="text" required/>
                                    <span className="placeholder">Name</span>
                                </label>
                                <input className='submit' type="submit" value="Send"></input>
                            </form>
                        </div>
                    </div>
                    <div className="navigation_links">
                        <a href="https://www.instagram.com/stasglukhan/"><img src={Instagram}/></a>
                        <a href="https://t.me/stas_glukhan"><img src={Telegram} alt="" /></a>
                        <a href="https://twitter.com/elonmusk"><img src={Twitter} alt="" /></a>
                    </div>
                </div>
            </footer> 
        )
	}
}