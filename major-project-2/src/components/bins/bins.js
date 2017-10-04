import React, {Component} from 'react';
import './bins.css';
import {Link} from 'react-router-dom';

export default class Bins extends Component{



    render(){
        var bin1= this.props.bin1;
        var bin2= this.props.bin2;
        var bin3= this.props.bin3;
        var bin4= this.props.bin4;
        var bin5= this.props.bin5;

        return(
            <div className='centerBins'> 
                <Link to={`/bins/${bin1}`}>               
                    <div className='list'>Bin 1</div>
                </Link>          
                <Link to={`/bins/${bin2}`}>    
                    <div className='list'>Bin 2</div>
                </Link>
                <Link to={`/bins/${bin3}`}>
                    <div className='list'>Bin 3</div>
                </Link>
                <Link to={`/bins/${bin4}`}>
                    <div className='list'>Bin 4</div>
                </Link>
                <Link to={`/bins/${bin5}`}>
                    <div className='list'>Bin 5</div>
                </Link>
            </div>
        )
    }
}