import React from 'react'
import './title.scss'
import Scope from '../../img/scope1.png'

function title() {
    
  return (
      
    <div>
        <div className="title">
            <ul>
                <div className="title_info">
                    <img className='show_right element-animation' src={Scope} alt=""></img>     
                    <li className='show_right element-animation'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, veniam!</li>
                </div>
                <div className="title_info">
                    <img className='show_up element-animation' src={Scope} alt="" />
                    <li className='show_up element-animation'  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, veniam!</li>
                </div>
                <div className="title_info">
                    <img className='show_left element-animation' src={Scope}alt="" />
                    <li className='show_left element-animation'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, veniam!</li>
                </div>
            </ul>
        </div>
        <div className="line show_up element-animation"></div>
        
    </div>
  )
}

export default title