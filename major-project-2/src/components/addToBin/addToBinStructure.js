import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HeaderAddToList from '../header-component/header-addToList';
import logo from '../homepage/logo.png';

export default class Form extends Component{
    render(){
        return( 
            <div>
                    Name
                    <input type="text" onChange={this.props.name}/>
                    Price
                    <input type="text" onChange={this.props.price}/>
                    <button onClick={this.props.click}> Save</button>
                
            </div>
        )
    }
}
