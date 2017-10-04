import React,{Component} from 'react';
import HeaderAddToList from '../../header-component/header-addToList';
import Form from '../addToBinStructure';
import axios from 'axios'

export default class AddToBinA extends Component{

    changeName = value => {
        this.setState({
            name: value
        })
    }    

    changePrice = value => {
        this.setState({
            price:value
        })
    }

    submitValues = (name, price) => {
        axios.post('http://localhost:3001/api/shelfB', {
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
                    bin='Bin B'
                    addToBin='Add To Bin B'
                    />
                </nav>
                <Form 
                name={(e) => this.changeName(e.target.value)}
                price={(e) => this.changePrice(e.target.value)}
                click={() => this.submitValues(this.state.name, this.state.price)}
                />
            </div>
        )
    }
}