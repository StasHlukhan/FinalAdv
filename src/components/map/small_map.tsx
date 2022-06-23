import React from 'react';

import { Link, Route } from 'react-router-dom';





interface IProps {
    img:any;
	
}

interface IState {
	employee: IUserInfo[];
}
export default class SmallMap extends React.Component<IProps, IState> {

	render() {
		return (
            
                <img src={this.props.img} />
            
            )
	}
}