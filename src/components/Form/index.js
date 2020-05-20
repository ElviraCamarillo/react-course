import React,{ Component } from 'react'
import './Form.css'

export default class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            firtsName: '',
            lastName: '',
        }
        this.handleInputFirtsName = this.handleInputFirtsName.bind(this)
        this.handleInputLastName = this.handleInputLastName.bind(this)
    }

    handleInputFirtsName(event){
        console.log(event.target.value)
        this.setState({
            firtsName: event.target.value
        })

    }
    handleInputLastName(event){
        console.log(event.target.value)
        this.setState({
            lastName: event.target.value
        })
    }

    render() {
      const{firtsName, lastName}  = this.state
        return(
              <div className='form-container'>
                <form>
                  <input className='form-input'
                    value={firtsName}
                    onChange={this.handleInputFirtsName} 
                    placeholder={'Firts Name'}
                  />
                  <input className='form-input'
                    value={lastName}
                    onChange={this.handleInputLastName} 
                    placeholder={'Last Name'}
                  />
                </form>
                 <p>Hola {firtsName}  {lastName}</p>
              </div>
        );
    }
}
