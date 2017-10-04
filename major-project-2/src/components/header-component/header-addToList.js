import React, {Component} from 'react';
import {Link} from 'react';
import './headerComponent.css';

export default class HeaderAddToList extends Component {
    render(){
        return(
            <div>
                <nav className='header'>
                        <p>go back</p>
                    <p>{this.props.bin}</p>
                    <p>{this.props.addToBin}</p>
                </nav>
            </div>
        )
    }
}