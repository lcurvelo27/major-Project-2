import React, {Component} from 'react';
import './headerComponent.css';
import {Link} from 'react-router-dom';


class HeaderComponent extends Component {
    render(){
        return(
            <div>
                <div className='headerComponent'>
                    <img src={require("./../homepage/logo.png")} alt="logo"/>
                    <Link to='/'>
                       <h3>Go Back</h3>        
                    </Link>
                <h3>{this.props.title}</h3>
                </div>
            </div>
        )
    }
}

export default HeaderComponent