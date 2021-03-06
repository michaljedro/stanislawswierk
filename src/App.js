import React from 'react';
import styled,{ThemeProvider} from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import About from './pages/About';
import GlobalStyles from './styles/Global';
import {device} from './styles/Breakpoints.styled';

const theme = {
  colors: {
    bgc: 'black',
    font: 'white',
    test: 'green',
  }
}
const Bloczek = styled.div`
  // border: 10px solid yellow;
  display:flex;
  flex-direction:column;
  height:100vh;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Bloczek>
      <GlobalStyles />
        <Router>
          <Navbar />
            <Switch>
              <Route exact path='/' component={Home}>
                <Home />
              </Route>
              <Route path='/contact' component={Contact} />
              <Route path='/gallery' component={Gallery} />
              <Route path='/about' component={About} />
            </Switch>
        </Router>
      </Bloczek>
    </ThemeProvider>
  );
}

export default App;