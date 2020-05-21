import React from 'react'
import Header from '../../components/Header'

import './Home.css'

function Home (){
  return(
    <div className='container'>
      <div>
        <Header
          title = {'Kodemia Modulo 3'}
          description = {'Aqui aprendemos React'}
        />
      </div>
    </div>
  )
}

export default Home