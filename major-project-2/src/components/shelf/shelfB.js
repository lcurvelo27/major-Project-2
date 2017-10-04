import React, {Component} from 'react';
import HeaderComponent from '../header-component/header-component'
import Bins from '../bins/bins';

class ShelfB extends Component{ 
    render(){
        return(
            <div>
                <div>                
                    <HeaderComponent 
                    title='Shefl B'/>
                </div>
                <Bins 
                bin1='B1'
                bin2='B2'
                bin3='B3'
                bin4='B4'
                bin5='B5'
                />
            </div>
        )
    }
}

export default ShelfB