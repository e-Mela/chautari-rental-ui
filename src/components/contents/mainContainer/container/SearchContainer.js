import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: 400,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
            align: 'center',
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
        searchBar: {
            padding: 0,
            alignItems: 'center'
        }
    }),
);

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (

        <React.Fragment>
            <CssBaseline/>
            <Container classes={classes.searchBar}>
                <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '40vh'}}>
                    <div>
                        <Paper component="form" className={classes.root}>
                            <InputBase
                                className={classes.input}
                                placeholder="Search Item"
                                inputProps={{'aria-label': 'search your needs...'}}
                            />
                            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon/>
                            </IconButton>
                            <Divider className={classes.divider} orientation="vertical"/>
                        </Paper>
                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
