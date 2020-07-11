import React, {useRef} from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset, add, remove} from './actions';
import User from './components/Contents/User/User.js';
import Counter from './components/Contents/Counter/Counter.js';

function App() {
  
  return (
    <div>
      <Counter />
      <User/>      
    </div>
  );
}

export default App;
