import React from 'react';
import Button from '@material-ui/core/Button';
import Modal from "@material-ui/core/Modal";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';


export default function LoginModal(props) {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            paper: {
                position: 'absolute',
                width: 400,
                backgroundColor: theme.palette.background.paper,
                border: '2px solid #000',
                boxShadow: theme.shadows[5],
                padding: theme.spacing(2, 4, 3),
            },
        }),
    );
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    //const [render, setRender] = React.useState(props.render);
    const [confirmPassword, setConfirmPassword] = React.useState("");

    function login() {
        console.log("submit clicked")
    }

    let localRender = props.render;

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    function disableLoginModal() {
        console.log("log out")
        localRender = false;
        console.log("localRender", localRender)
    }

    return (
        <div>
            <Modal
                open={localRender}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <h1>Login</h1>
                    <label>User Name</label>
                    <input type="text"
                           value={userName}
                           onChange={event => setUserName(event.target.value)}/>
                    <label> Password</label>
                    <input type="text"
                           value={password} onChange={event => setPassword(event.target.value)}/>
                    <label>Confirm Password</label>
                    <Button variant="contained" color="primary" onClick={login}>
                        Login
                    </Button>

                    <Button variant="contained" color="primary" onClick={disableLoginModal}>
                        Cancel
                    </Button>
                </div>
            </Modal>
        </div>
    );
}