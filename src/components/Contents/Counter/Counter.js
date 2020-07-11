import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './../../../actions';

const User = () => {
    const count = useSelector(state => state.counterReducer);
    const users = useSelector(state => state.userReducer);
    const dispatch = useDispatch();  
      
    return (
      <div>
        <Paper>
          <Container>
            <h1>Chautari!!!</h1>
            <h3>Counter</h3>
            <button onClick={()=> dispatch(increment())}>+</button>
            {count}
            <button onClick={()=> dispatch(decrement())}>-</button>
          </Container>
        </Paper>        
      </div>
    );
  }
  
  export default User;