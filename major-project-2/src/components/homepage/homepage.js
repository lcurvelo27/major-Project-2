import React, {Component} from 'react';
import './homepage.css'
import {Link} from 'react-router-dom';
import ShelfA from '../shelf/shelfA';
import ShelfB from '../shelf/shelfB';
import ShelfC from '../shelf/shelfC';
import ShelfD from '../shelf/shelfD';
import logo from './logo.png';


class Homepage extends Component {

    render(){
        return(
            <div>
                <div className='header'>
                    <div className='logo-container'>            
                        <img src={require('./logo.png')} alt='logo' className='image'/>
                        <h3>SHELFIE</h3>      
                    </div>
                </div>      
                <div className='homepage-container'>                    
                        <div className='shelf'><Link to='/bins/A'>SHELF A</Link></div>
                        <div className='shelf'><Link to='/bins/B'>SHELF B</Link></div>
                        <div className='shelf'><Link to='/bins/C'>SHELF C</Link></div>
                        <div className='shelf'><Link to='/bins/D'>SHELF D</Link></div>
                </div>
            </div>
        )
    }
}

export default Homepage