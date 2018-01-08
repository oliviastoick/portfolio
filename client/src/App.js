
import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
