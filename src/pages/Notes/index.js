import React, { Component } from 'react'

// Components
import Header from '../../components/Header'
import Note from '../../components/Note'

// CSS
import './Notes.css'
export default class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      title: "",
      content: ""
    }
    this._renderNotes = this._renderNotes.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.addNote = this.addNote.bind(this)
  }
  _renderNotes() {
    const { notes } = this.state;
    return notes.map(({ title, content }) => {
      return <Note title={title} content={content} />
    });
  }
  handleInput({ target: {name,value} }) {
    this.setState({
      [name]: value,
    });
  }
  addNote(event) {
    event.preventDefault()
    const { notes, title, content } = this.state
    const note = {
      title,
      content
    }
    this.setState({
      notes: [...notes, note]
    })
  }
  render() {
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
            <div>
              <form onSubmit={this.addNote}>
                <div className="Notes-form-content">
                  <div className="Notes-inputs-content">
                    <input
                      value={this.state.title}
                      onChange={this.handleInput}
                      placeholder={"Titulo de la nota"}
                      name={"title"}
                    />
                    <input
                      value={this.state.content}
                      onChange={this.handleInput}
                      placeholder={"Contenido de la nota"}
                      name={"content"}
                    />
                  </div>
                  <button type="submit">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}