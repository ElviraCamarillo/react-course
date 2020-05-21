// import react, { Component } from "react"

// import Header from '../../components/Header'

// export  default class CurrencyConverter extends Component {
//   constructor(props){
//     super(props)
//     this.state= {
//       currencyMNX:0,
//       currencyUSD:0.
//       currencyEUR:0,
//     }
//     this.handlerInput  = this.handlerInput.bind(this)
//   }

//   handlerInput({ target: {name, value}}){
//     console.log(name, value)
//     let _currencyMNX = 0,
//     let _currencyUSD = 0,
//     let _currencyEUR = 0,

//     if( name === 'currencyMNX'){
//       _currencyMNX = value
//       _currencyUSD = value / 23.24
//       _currencyEUR = value / 25.49
//     }

//   }

//   rennder(){
//     const { currencyMNX, currencyUSD, currencyEUR} = this.state
//     return(
//       <div className='Container'>
//         <Header
//         title={'Currency Converter'}
//         description={'Conversos de divisas'}
//         />
//         <div>
//           <form>
//             <input
//             placeholder={'MNX'}
//             value={currencyMNX}
//             onClick={}
//             />

//           </form>
//         </div>

//       </div>
//     )
//   }
// }

