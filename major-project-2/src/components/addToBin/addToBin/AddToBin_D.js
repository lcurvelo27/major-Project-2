import React,{Component} from 'react';
import HeaderAddToList from '../../header-component/header-addToList';
import Form from '../addToBinStructure';
import axios from 'axios';

export default class AddToBinD extends Component{    
    constructor(props){
        super(props)

        this.state={
            name:'',
            price: 0
        }
    }

    changeName = (value) => {
        this.setState({
            name: value
        })
    }
    changePrice = (value) => {
        this.setState({
            price: value
        })
    }

    submitValues = (name, price) => {
        axios.post('http://localhost:3001/api/shelf', {
            name,
            price
        })
    }

    render(){
        return(
            <div>
                <nav>
                    <HeaderAddToList 
                    bin='Bin D'
                    addToBin='Add To Bin D'
                    />
                </nav>
                <Form 
                name= {(e)=> this.changeName(e.target.value)}
                price={(e)=> this.changePrice(e.target.value)}
                click={()=> this.submitValues(this.state.name, this.state.price)}
                />
            </div>
        )
    }
}