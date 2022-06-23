import React, { useEffect, useState } from 'react';
import { BrowserRouter, useParams, withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import { isObjectBindingPattern } from 'typescript';
import { Link } from 'react-router-dom';
import './map.scss'

import Balcony_Mir from '../../video/mir_balcony.mp4'
import Kitchen_Mir from '../../video/mir_kitchen.mp4'
import Arch_Mir from '../../video/mir_arch.mp4'
import Window_Mir from '../../video/mir_window.mp4'
import Short_Mir from '../../video/mir_short.mp4'
import Jungle_Mir from '../../video/mir_jungle.mp4'
import Start_Mir from '../../video/mir-start.mp4'
import Stairs_Mir from '../../video/mir_stairs.mp4'
import City_Mir from '../../video/mir-city.mp4'
import City from '../../img/smoke-city.jpg'
import { AddAnim } from '../hero/animation';
import MirageBG from '../../video/mirageback.mp4'
import Arrow from '../../img/arrow.png'
import Header from '../../components/header/header'
import ArrowL from '../../img/arrow-left.png'
import GlowEffect from '../glowEffect/GlowEffect';
import { GetMapById, GetMirage } from '../../axios/map';
import VideoMap from '../../video/videoMap';


interface IProps {
  Maps:IMap[]
}


function Map(props:IProps) {
  const {MapID,Team}=useParams<any>()
  const MapData = props.Maps.filter((Map)=>Map.side===Number(Team)).find((Map)=>Map.name===(MapID))
  console.log(props.Maps,MapData)
  useEffect(()=>{
    AddAnim();
  },[])
 console.log('currentvideo')
 console.log(VideoMap['Jungle_Mir']);
 
 console.log(MapID,Team)

 
if (MapData)
  return (
    
    <div className='mir'>
      <Header/>
      
        <section className='mirage'>
          <div className="mirage_about">
              <GlowEffect>
                <div className="mirage_main">
                    <video preload="auto"   muted autoPlay playsInline loop>
                        <source src={VideoMap[MapData.mainVideo.url]} type="video/webm" />
                    </video>   
                    <div  className="mirage_info">
                        <h2><span className='h_text'>Mirage</span></h2>
                    </div>
                    <div className="mirage_mover">
                      
                      <h3>Try it now</h3>
                      <a href="#down"><img src={Arrow} alt="" /></a>
                    </div>
                    <div className="mirage_changer">
                      <Link to={`/About/Mirage`}>
                        <img src={ArrowL} alt="" />
                        <h4>Change side</h4>
                      </Link>
                    </div>
                </div>  
              </GlowEffect>  
          </div>
        </section>
      
      <section className='Smokes'>
        {
          MapData.sections.map(section=>(<>
            <div id='down' className="smokes-A_about">
            <h2 className='show_up element-animation'>{section.title}</h2>
          </div>
          <div className="smokes-A">
            {section.sections.map((SubSection,index)=>(

            
          <div  className="smokes_city">
            {index%2===0 && <div className="smokes_city_about show_right element-animation">
              <h3>{SubSection.title}</h3>
              <p>{SubSection.description}</p>
            </div>}
            <div className={`smokes_city_img  ${index%2===0?'show_left':'show_right'}  element-animation`}>
                <video preload="auto"   muted autoPlay playsInline loop>
                  <source src={VideoMap[SubSection.video.url]} type="video/mp4" />
                </video>
            </div>
            {index%2===1 && <div className="smokes_city_about show_left element-animation">
              <h3>{SubSection.title}</h3>
              <p>{SubSection.description}</p>
            </div>}
          </div>))
        }
          
        </div>
        </>))
        }
        {/*
          <div id='down' className="smokes-A_about">
            <h2 className='show_up element-animation'>Smokes A</h2>
          </div>
        <div className="smokes-A">

          <div  className="smokes_city">
            <div className="smokes_city_about show_right element-animation">
              <h3>Smoke City</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aspernatur quasi iure? Minus tenetur molestias eveniet in nulla. Amet blanditiis velit id ullam laudantium, sequi dolores fugiat? Reprehenderit delectus explicabo quidem velit, nobis numquam sed?</p>
            </div>
            <div className="smokes_city_img show_left element-animation">
                <video preload="auto"   muted autoPlay playsInline loop>
                  <source src={City_Mir} type="video/mp4" />
                </video>
            </div>
          </div>

          <div className="smokes_city">
            <div className="smokes_city_img show_right element-animation">
                <video preload="auto"   muted autoPlay playsInline loop>
                  <source src={Stairs_Mir} type="video/mp4" />
                </video>
            </div>
            <div className="smokes_city_about show_left element-animation">
              <h3>Smoke Stairs</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aspernatur quasi iure? Minus tenetur molestias eveniet in nulla. Amet blanditiis velit id ullam laudantium, sequi dolores fugiat? Reprehenderit delectus explicabo quidem velit, nobis numquam sed?</p>
            </div>
          </div>

          <div className="smokes_city">
            <div className="smokes_city_about show_right element-animation">
              <h3>Smoke Jungle</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aspernatur quasi iure? Minus tenetur molestias eveniet in nulla. Amet blanditiis velit id ullam laudantium, sequi dolores fugiat? Reprehenderit delectus explicabo quidem velit, nobis numquam sed?</p>
            </div>
            <div className="smokes_city_img show_left element-animation">
                <video preload="auto"   muted autoPlay playsInline loop>
                  <source src={Jungle_Mir} type="video/mp4" />
                </video>
            </div>
          </div>
        </div>




        <div className="smokes-A_about">
            <h2 className='show_up element-animation'>Smokes Middle</h2>
          </div>
        <div className="smokes-A">

          <div className="smokes_city">
            <div className="smokes_city_about show_right element-animation">
              <h3>Smoke Start</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aspernatur quasi iure? Minus tenetur molestias eveniet in nulla. Amet blanditiis velit id ullam laudantium, sequi dolores fugiat? Reprehenderit delectus explicabo quidem velit, nobis numquam sed?</p>
            </div>
            <div className="smokes_city_img show_left element-animation">
                <video preload="auto"   muted autoPlay playsInline loop>
                  <source src={Start_Mir} type="video/mp4" />
                </video>
            </div>
          </div>

          <div className="smokes_city">
            <div className="smokes_city_img show_right element-animation">
                <video preload="auto"   muted autoPlay playsInline loop>
                  <source src={Window_Mir} type="video/mp4" />
                </video>
            </div>
            <div className="smokes_city_about show_left element-animation">
              <h3>Smoke Window</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aspernatur quasi iure? Minus tenetur molestias eveniet in nulla. Amet blanditiis velit id ullam laudantium, sequi dolores fugiat? Reprehenderit delectus explicabo quidem velit, nobis numquam sed?</p>
            </div>
          </div>

          <div className="smokes_city">
            <div className="smokes_city_about show_right element-animation">
              <h3>Smoke Short</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aspernatur quasi iure? Minus tenetur molestias eveniet in nulla. Amet blanditiis velit id ullam laudantium, sequi dolores fugiat? Reprehenderit delectus explicabo quidem velit, nobis numquam sed?</p>
            </div>
            <div className="smokes_city_img show_left element-animation">
                <video preload="auto"   muted autoPlay playsInline loop>
                  <source src={Short_Mir} type="video/mp4" />
                </video>
            </div>
          </div>
        </div>


        <div className="smokes-A_about">
            <h2 className='show_up element-animation'>Smokes B</h2>
          </div>
        <div className="smokes-A">

          <div className="smokes_city ">
            <div className="smokes_city_about show_right element-animation">
              <h3>Smoke Arch</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aspernatur quasi iure? Minus tenetur molestias eveniet in nulla. Amet blanditiis velit id ullam laudantium, sequi dolores fugiat? Reprehenderit delectus explicabo quidem velit, nobis numquam sed?</p>
            </div>
            <div className="smokes_city_img show_left element-animation">
                <video preload="auto"   muted autoPlay playsInline loop>
                  <source src={Arch_Mir} type="video/webm" />
                </video>
            </div>
          </div>

          <div className="smokes_city">
            <div className="smokes_city_img show_right element-animation">
                <video preload="auto"   muted autoPlay playsInline loop>
                  <source src={Kitchen_Mir} type="video/webm" />
                </video>
            </div>
            <div className="smokes_city_about show_left element-animation">
              <h3>Smoke Kitchen</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aspernatur quasi iure? Minus tenetur molestias eveniet in nulla. Amet blanditiis velit id ullam laudantium, sequi dolores fugiat? Reprehenderit delectus explicabo quidem velit, nobis numquam sed?</p>
            </div>
          </div>

          <div className="smokes_city">
            <div className="smokes_city_about show_right element-animation">
              <h3>Smoke Balcony</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius aspernatur quasi iure? Minus tenetur molestias eveniet in nulla. Amet blanditiis velit id ullam laudantium, sequi dolores fugiat? Reprehenderit delectus explicabo quidem velit, nobis numquam sed?</p>
            </div>
            <div className="smokes_city_img show_left element-animation">
                <video preload="auto"   muted autoPlay playsInline loop>
                  <source src={Balcony_Mir} type="video/webm" />
                </video>
            </div>
          </div>
        </div>*/}
      </section>
   </div>
   
  )
  return(
    <div>Loading...</div>
  )
}

export default Map ;