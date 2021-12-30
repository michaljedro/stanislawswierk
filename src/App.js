import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import About from './pages/About';
 
function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home}>
              <Home />
            </Route>
            {/* <Route path='/' exact component={Home} /> */}
            <Route path='/contact' component={Contact} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/about' component={About} />
          </Switch>
      </Router>
    </>
  );
}

export default App;