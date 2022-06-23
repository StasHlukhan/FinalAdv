import React from 'react'
import './partners.scss'
import Kontik from '../../img/superkontik.png'
import Lipton from '../../img/lipton.png'
import Logitech from '../../img/logitech.png'
import Nvidia from '../../img/Nvidia.png'
function partners() {
  return (
    <div className="partners">
      
        <div className="partners_info">
            <a className="button2 show_up element-animation" href=""><span className="button__line2 button__line--bottom2"></span><span className="button__line3 button__line--bottom3"></span>Trusted by</a>
        </div>
        <div className="partners_img">
            <a href="" ><img className='kontik show_right element-animation' src={Kontik} alt="" /></a>
            <a href="" ><img className='lipton show_up element-animation' src={Lipton} alt="" /></a>
            <a href="" ><img className='logitech show_up element-animation' src={Logitech} alt="" /></a>
            <a href="" ><img className='nvidia show_left element-animation' src={Nvidia} alt="" /></a>
        </div>
        <div className="line line show_up element-animation"></div>
    </div>
  )
}

export default partners