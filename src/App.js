import React, {useRef} from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset, add, remove} from './actions';
import Header from './components/contents/header/Header.js'
import Footer from './components/contents/footer/Footer.js';
import MainContainer from './components/contents/mainContainer/MainContainer.js';


function App() {
  
  return (
    <div>
      <Container>
        <Header />
        <MainContainer />
        <Footer />
      </Container>
                 
    </div>
  );
}

export default App;
