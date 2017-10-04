import React, {Component} from 'react';
import HeaderComponent from '../header-component/header-component';
import Bins from '../bins/bins';

class ShelfD extends Component{ 
    render(){
        return(
            <div>
                <div>                
                    <HeaderComponent 
                    title='Shefl D'/>
                </div>
                <Bins 
                bin='D'
                bin1='D1'
                bin2='D2'
                bin3='D3'
                bin4='D4'
                bin5='D5'/>
            </div>               
        )
    }
}

export default ShelfD