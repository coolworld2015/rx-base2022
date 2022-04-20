import React, {useContext, useEffect, useState} from "react";
import {AppContext} from "./app";
import {Redirect} from "react-router-dom";

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import NavigationIcon from '@material-ui/icons/Navigation';
import FavoriteIcon from '@material-ui/icons/Favorite';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';

const Test = () => {
    const {state, setContextState} = useContext(AppContext);
    const [isClicked, setIsClicked] = useState(false);
    const [open, setOpen] = useState(false);

    console.log('Test - ', state);

    useEffect(() => {
        setContextState({...state, ...{name: 'Test', itemsCount: 0}});
    }, []);


    const clickHandler = (event) => {
        event.preventDefault();
        setContextState({...state,...{isLoggedIn: false}});
        //setIsClicked(true)
    };

    if (isClicked) {
        return <Redirect to="/cool"/>
    }

    return (
        <div>
            <br/>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <hr/>

            <Fab color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
            <Fab color="secondary" aria-label="edit">
                <EditIcon/>
            </Fab>
            <Fab variant="extended">
                <NavigationIcon/>
                Navigate
            </Fab>
            <Fab disabled aria-label="like">
                <FavoriteIcon/>
            </Fab>
            <hr/>

            <form noValidate>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <hr/>

            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                            onClick={() => open? setOpen(false): setOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        </Typography>
                        <Button color="inherit" onClick={(e) => clickHandler(e)}>
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <hr/>

            <Container maxWidth="sm">
                <Box
                    sx={{
                        width: 300,
                        height: 300,
                        margin: 'auto',
                        bgcolor: '#cfe8fc',
                        '&:hover1': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <TextField error1 helperText="Value is requred" label="Login"
                               variant="standard"
                               autoComplete="off"/>
                    <br/>
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
                <Drawer
                    sx={{
                        width: '50px',
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: '40px',
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </Drawer>
            </Container>
        </div>
    )
        ;
};

export default Test;
