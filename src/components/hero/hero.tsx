import React from 'react';
import './hero.scss';
import Video1 from '../../video/videoplayback.webm'
import  './animation.js'
import { AddAnim} from './animation.js';
import GlowEffect from '../glowEffect/GlowEffect';
interface IProps {
	
}

interface IState {
	employee: IUserInfo[];
}

export default class Hero extends React.Component<IProps, IState> {
      componentDidMount(){AddAnim()}
      
	render() {
		return (
        <div className="hero">
            <div className="hero_main">
                <GlowEffect>
                    <video preload="auto"   muted autoPlay playsInline loop>
                        <source src={Video1} type="video/webm" />
                    </video>   
                    <div  className="hero_info">
                        <h1>Become a better <span className='h_text'>version</span> of yourself</h1>
                    </div>
                </GlowEffect>
            </div>
            
        </div>
        )
	}
}
