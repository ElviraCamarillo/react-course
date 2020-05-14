import React, {  Component} from 'react';
import logo from './logo.svg';
import './Fonts.css';
import './App.css';

//Import components
// import Clock from './components/Clock/Clock'
import Card from './components/Card/Card'

const data = [
  {
    'category' : 'PROGRAMMING',
    'title' : 'What is Deno and will it Replace NodeJS?',
    'description' : 'Deno v1.0.0 is scheduled for release on May 13. Here are a few interesting facts that may play a role in determining that',
    'author' : 'Fernando Doglio',
    'publicationDate' : 'May 12',
    'readTime' : '6 min read',
    'imgURL' : 'https://miro.medium.com/max/1400/1*GzfZZNWFeQ3kKJsKeKy7_A.jpeg'
  },{
    'category' : 'BASED ON YOUR READING HISTORY',
    'title' : 'Dashboards in Python for Beginners and Everyone Else using Dash',
    'description' : 'Build a basic and advanced dashboard with this beginner tutorial on Dash in Python',
    'author' : 'Eric Kleppen',
    'publicationDate' : 'Jan 6',
    'readTime' : '13 min read',
    'imgURL' : 'https://miro.medium.com/max/1400/1*-EohlJNban9XZiyuw_AXuA.png'
  },{
    'category' : 'BASED ON YOUR READING HISTORY',
    'title' : 'Using Class Decorators in Python',
    'description' : 'An example-led guide to using Class decorators in Python',
    'author' : 'Stephen Fordham',
    'publicationDate' : 'April 10',
    'readTime' : '5 min read',
    'imgURL' : 'https://miro.medium.com/max/1400/1*7LdjvXlTQ4kKXtX5wBGcuA.png'
  }
]


export default class App extends Component {

  _rendersCards(){
    return data.map(({
        category,
        title,
        description,
        author,
        publicationDate,
        readTime,
        imgURL
      }) => {
        return (
          <Card
            category ={category}
            title = {title}
            description = {description}
            author = {author}
            publicationDate = {publicationDate}
            readTime = {readTime}
            imgUrl = {imgURL}
          />
        )
      }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>      
        <div className= 'Cards-container'>
          {this._rendersCards()}
        </div>
    </div>
    );
  }
}



