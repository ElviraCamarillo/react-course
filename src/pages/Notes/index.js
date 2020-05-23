import React, { Component } from 'react'

// Components
import Header from '../../components/Header'
import Note from '../../components/Note'

import NewNote from './components'


// CSS
import './Notes.css'
export default class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: []
    }
    this._renderNotes = this._renderNotes.bind(this)
    this.handleNewNote = this.handleNewNote.bind(this)
  }

  componentDidMount () {
    console.log('Mount')
    fetch("https://reactsessions-ac545.firebaseio.com/.json")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      var notesArray = []
      for (let key in data.notes) {
        // if (!data.notes.hasOwnProperty(key)) continue;
        notesArray.push({
          key,
          title: data.notes[key].title,
          content: data.notes[key].content,
        })
      }
      this.setState({
        notes: notesArray
      })
    })
  }

  _renderNotes() {
    const { notes } = this.state;
    return notes.map(({key, title, content }) => {
      return <Note key= {key} title={title} content={content} />
    });
  }

  handleNewNote(note){
    const { notes } = this.state
    fetch("https://reactsessions-ac545.firebaseio.com/notes.json",
    {
      method: 'POST',
      body: JSON.stringify(note),
      headers:{
        'Content-type':'application/json'
      }
    }
    )
    .then(response => response.json())
    .then(({name}) => {
      note['key'] = name
      this.setState({
        notes: [...notes, note]
      })
    })
  }

  render() {
    console.log('render')
    return (
      <div className="Container">
        <div>
          <Header
            title={"Blog de notas"}
            description={
              "Aqui aprenderemos a manejar el estado interno y subir el estado del hijo al padre"
            }
          />
          <div className="Notes-container">
            <ul>{this._renderNotes()}</ul>
            <NewNote
              handleNewNote={this.handleNewNote}
            />
          </div>
        </div>
      </div>
    )
  }
}

// componentDidMount () {
//   console.log('Mount')
//   fetch("https://reactsessions-ac545.firebaseio.com/.json")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     var newObject = []
//     for (let key in data.notes) {
//       if (!data.notes.hasOwnProperty(key)) continue;
//       newObject.push({
//         id: key,
//         title: data.notes[key].title,
//         content: data.notes[key].content,
//       })
//     }
//     console.log(newObject)
//   })
// }