import React, {useRef} from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import {useSelector, useDispatch} from 'react-redux';
// import {add, remove} from '../../../../actions';

const User = () => {
    const count = useSelector(state => state.counterReducer);
    const users = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const userRef = useRef(null);
    
    const handleSubmit=(e)=>{
      e.preventDefault();
      // dispatch(add(userRef.current.value));
      userRef.current.value = "";
    }
  
    return (
      <div>        
        <Paper>
          <Container>
            <h1>User Add and Remove</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Type UserName and Press Enter" ref={userRef}></input>
            </form>
            <ul>
              {
                users.map((user, index)=>(
                  <li key={index}>
                    {user.name}
                  {/* <button onClick={()=>dispatch(remove(index))}>Remove</button> */}
                  </li>    
                              
                ))}
            </ul>
          </Container>
        </Paper>
      </div>
    );
  }
  
  export default User;