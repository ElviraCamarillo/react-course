import React,{ Component } from 'react'
import './CurrencyConverter.css'

export default class  CurrencyConverter extends Component{
    constructor(props){
        super(props)
        this.state = {
            mexicanCoin:0
        }
        this.handleInputMexicanCoins = this.handleInputMexicanCoins.bind(this)
    }

    handleInputMexicanCoins(event){
        this.setState({
            mexicanCoin: event.target.value
        })
    }
    render(){
        const{mexicanCoin} = this.state
        let usdCoin= mexicanCoin * 23.68
        return(
        <div>
          <form>
            <input className='convertidor-input'
              value={mexicanCoin}
              onChange={this.handleInputMexicanCoins}
              placeholder={'MNX pesos'}
            />
          </form>
          <p> Los {mexicanCoin} MNX son igual a {usdCoin} </p>              
        </div>
        )
    }
}