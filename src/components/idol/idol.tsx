import React from 'react';
import './idol.scss';
import { Link, Route } from 'react-router-dom';
import Nuke from '../../img/nuke1.png'
import Mirage from '../../img/mirage 2.png'
import Vertigo from '../../img/vertigo.png'
import Overpass from '../../img/overpass.png'
import SmallMap from '../map/small_map';
import Bg1 from '../../img/backg2.png'



interface IProps {
   Maps:IMap[]
}

interface IState {
	employee: IUserInfo[];
}
export default class Idol extends React.Component<IProps, IState> {

	render() {
      const MapsArray = [Mirage,Overpass,Nuke,Vertigo]
		return (
         
         <div className='idol_page'>
            <div className="idol_content">
               <div className="idol_info">
                  <h2>Pick the map</h2>
               </div>
            </div>
            {/* <div className="bg1">
               <img src={Bg1} />
            </div> */}
            <div className="map_pick">
               
               <div id='down'></div>
                  <div className="map">
                     {MapsArray.map(map=>(
                        <Link to={'/About/Mirage'}> <SmallMap img={map}></SmallMap>     </Link>
                     ))}
                     
                  </div>
            </div>
         </div>
            
        
        )
	}
}