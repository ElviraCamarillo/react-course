// import React, { Component} from "react"

// //Import CSS
// import './Notes.css'

// export default class Note extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             notes:[],
//             newNote:{}
//         };
//     }

//     _renderNotes(){
//         const { notes } = this.state
//         return notes.map(({title,content})=>{
//             return()
//         })
//     }

//     handleChange = (event, from) => {
//         console.log(event.target.value, from)
//         let { newNote } = this.state
//         newNote[from] = event.target.value
//         this.setState({
//             newNote:newNote
//         })
//     }    
//     addNote = () => {
//         let { newNote, notes } = this.state
//         notes.push(newNote)
//         this.setState({
//             notes:notes
//         })
//     }

//     render () {
//         return(
//             <div>
//                 <div className='notes'>
//                     <p>Nota 1</p>
//                     <p>Nota 2</p>
//                 </div>
//                 <div>
//                     <input onChange={event => this.handleChange(event,'title')} placeholder={"Titulo"} />
//                     <input onChange={event => this.handleChange(event,'content')} placeholder={"Contenido"}/>
//                     <button onClick={this.addNote}>Add</button>
//                 </div>
//             </div>
//         )
//       }
// }