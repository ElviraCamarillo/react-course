import React,{ Component } from 'react'

export default class ConditionalRendering extends Component{
  constructor(props){
    super(props)
    this.state = {
      firtsName: '',
      lastName: '',
    }
  }
  render(){
    const { firtsName, lastName } = this.state
    let saludo = null
    if (firtsName !== '' & lastName !=='') {
    saludo = <p>Hola {firtsName}  {lastName}</p>
    }
    return(
    <div>
      <h1>Conditional  Rendering</h1>
      {saludo}
    </div>
    )
  }
}

// Al dar click a  un boton, renderizar  un cuadrado de color.
// Al dar un segundo clik,  desaparecer  este div.