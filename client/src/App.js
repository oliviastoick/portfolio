
import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Route exact path='/portfolio' component={Home} />
          <Route path='/portfolio/about' component={About} />
          <Route path='/portfolio/projects' component={Projects} />
          <Route path='/portfolio/contact' component={Contact} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
