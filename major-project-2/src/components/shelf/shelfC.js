import React, {Component} from 'react';
import HeaderComponent from '../header-component/header-component';
import Bins from '../bins/bins';

class ShelfC extends Component{ 
    render(){
        return(
            <div>
                <div>            
                    <HeaderComponent 
                    title='Shefl C  '/>
                </div>
                <Bins 
                bin='C'
                bin1='C1'
                bin2='C2'
                bin3='C3'
                bin4='C4'
                bin5='C5'
                />
            </div>    
        )
    }
}

export default ShelfC