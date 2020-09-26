import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LoginModal from "./LoginModal";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function ButtonAppBar() {
    //this.openLoginModel = this.openLoginModel.bind(this);
    const [render, setRender] = React.useState(false);
    const [test, setTest] = React.useState("hi");
    const classes = useStyles();

    const openLoginModel = () => {
        console.log("login clicked")
        console.log(test)
        setRender(true)
        setTest("new hi")
        console.log("render =" + render)
        console.log(test)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Chautari
                    </Typography>
                    <Button color="inherit" onClick={openLoginModel}>Login
                        <LoginModal render={render}/>
                    </Button>
                    <Button color="inherit">Sign Up</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}