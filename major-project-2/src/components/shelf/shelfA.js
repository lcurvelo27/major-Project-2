import React, {Component} from 'react';
import HeaderComponent from '../header-component/header-component';
import Bins from '../bins/bins';
import {Link} from 'react-router-dom'

class ShelfA extends Component{ 
    render(){
        return(
            <div>
                <div>                
                    <HeaderComponent 
                    title='Shefl A'/>
                </div>
                <Bins bin='A'
                bin1='A1'
                bin2='A2'
                bin3='A3'
                bin4='A4'
                bin5='A5'
                />
            </div>
        )
    }
}

export default ShelfA