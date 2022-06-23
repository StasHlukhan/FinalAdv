import React, { useEffect, useState } from 'react';
import { BrowserRouter, useParams, withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import { isObjectBindingPattern } from 'typescript';
import { Link } from 'react-router-dom';
import './About.scss'
import CT from '../../img/CT.png'
import T from '../../img/T.png'



function About() {
  

 const {MapID}=useParams<any>()
 console.log('data')

  return (
    <div >
      <div id='About' className="about_page"></div>
      <div className='pick'>
        <div className="pick_info">
          <h2>Pick the side</h2>
        </div>
        <div className="pick_side">
          <Link to={`/Map/${MapID}/${1}`}> <img src={CT} /></Link>
          <Link to={`/Map/${MapID}/${0}`}> <img src={T} /></Link>
        </div>
      </div>
    </div>
  )
}

export default About ;