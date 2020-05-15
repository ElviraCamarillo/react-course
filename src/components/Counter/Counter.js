import React, { Component} from "react";

export default class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
          counter: 0
        }
    }

    componentDidMount(){
      this.countInterval = setInterval(() => this.count(6) , 1000)
    }
    
    componentDidUpdate(){
      if(this.state.counter < 20 ){
        if( this.state.counter % 8 === 0){
          console.log(`EL numero ${this.state.counter} es múltiplo de 8`)
        }
      }else{
        clearInterval(this.countInterval)
      }
    }

    count(countNumber = 1){
      // incrementar state.counter + 1
      this.setState({
        counter: this.state.counter + countNumber
      })
    }

    render () {
      return (
          <div>
              <p>Tiempo transcurrido: {this.state.counter}</p>
          </div>
      )
    }
}


//Ejercicio:
/**
 * Crear un nuevo componente <Counter/>
 * El couenter iniciar en 0.
 * Cuanto el couenter pase por un numero multiplo de 8 imprimir en  cl
 * Hard--> Deterner el  contador cuando  llegue a 20
 * Adicional -  El contador puede ir de N en N
 */