import React from 'react';
import Container from './container/Container.js';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import HotItemContainer from "./container/HotItemContainer";
import SearchContainer from "./container/SearchContainer";

const MainContainer = () => {

    return (
        <div>
            <SearchContainer/>
            <Grid>
                <Paper>
                    <h6>Most Popular Items</h6>
                    <Container/>
                </Paper>
            </Grid>
            <Grid>
                <Paper>
                    <h6>Hot Items</h6>
                    <HotItemContainer/>
                </Paper>
            </Grid>
        </div>
    );
}

export default MainContainer;