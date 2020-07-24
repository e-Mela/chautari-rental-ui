import React from 'react';
import Counter from './container/Counter.js';
import User from './container/User.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SideMenu from './sideMenu/SideMenu.js'

const MainContainer = () => {
      
    return (
      <div>
         <Grid container spacing={3}>       
          <Grid item xs={12} sm={3}>
            <Paper>
              <SideMenu/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper >
              <h1>Container</h1>
              <Counter />
              <User /> 
            </Paper>
          </Grid>        
        </Grid>
              
      </div>
    );
  }
  
  export default MainContainer;