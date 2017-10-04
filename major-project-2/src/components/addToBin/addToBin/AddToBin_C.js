import React,{Component} from 'react';
import HeaderAddToList from '../../header-component/header-addToList';
import Form from '../addToBinStructure';
import axios from 'axios';

export default class AddToBinC extends Component{

changeName = name => this.setState({name})
changePrice = price => this.setState({price})
submitValues = (name, price) => {
    axios.post('http://localhost:3001/api/shelfC', {
        name,
        price
    })
}


    render(){
        console.log('im rendered!')
        return(
            <div>
                <nav>
                    <HeaderAddToList 
                    bin='Bin C'
                    addToBin='Add To Bin C'
                    />
                </nav>
                <Form 
                name={(e) => {this.changeName(e.target.value)}}
                price={(e) => {this.changePrice(e.target.value)}}
                click= {()=> {this.submitValues(this.state.name, this.state.price)}}
                />
            </div>
        )
    }
}