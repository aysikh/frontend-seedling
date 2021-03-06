import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';
import { CssBaseline } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Logo from '../assets/logo6.png'
import Navbar2 from './Navbar2'
import InfoContainer from '../containers/InfoContainer'
import TopLogo from '../assets/logo8.png'

import DailyEntryForm from './DailyEntryForm'
// import BG from '../assets/bg.jpg'
import LogContainer from '../containers/LogContainer'

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            boxShadow: 'none',
            margin: '0',
            border: '0',
            overflowX: 'hidden'
        },
        appbar: {
            backgroundColor: 'transparent',
            boxShadow: '0px 0px 0px 0px',
            margin: '0',
            border: '0'
        },
        appbarWrapper: {
            width: '80%',
            margin: '0 auto',
            boxShadow: 'none'
        },
        appbarTitle: {
            flexGrow: '1',
            boxShadow: 'none'
        },
        icon: {
            color: 'black',
            fontSize: '2rem',
        },
        colorText: {
            color: '#1a904b',
        },
        container: {
            textAlign: 'center',
        },
        title: {
            color: 'black',
            fontSize: '4.5rem',
        },
        div:{
            margin: '0',
            border: '0'
        }
        }));

    export default function Header() {
        const classes = useStyles();
        const [checked, setChecked] = useState(false);
        useEffect(() => {
            setChecked(true);
        }, []);


    return (
        <div className={classes.div}>
            <CssBaseline />
            <div className={classes.root} id="homepage">
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.appbarWrapper} >
                    <h1 className={classes.appbarTitle}>
                        <img src={TopLogo} style={{marginLeft: '80rem', height: '8rem'}}/> 
                    </h1>
                    <Navbar2 />
                </Toolbar>
            </AppBar>

            <Collapse
                in={checked}
                {...(checked ? { timeout: 2000 } : {})}
                collapsedHeight={50}
                >
                <div className={classes.container}>
                <h1 className={classes.title}>
                    watch yourself  <br />
                    <span style={{color: '#1b5e20'}}>grow</span>
                </h1>
                <h3>learn more below </h3>
                <Scroll to="info-image" smooth={true}>
                    <IconButton>
                        <KeyboardArrowDownIcon style={{color: '#006064', fontSize: '5rem'}} />
                    </IconButton>
                </Scroll>
                </div>
            </Collapse>

            </div>
        <LogContainer /> 
        <InfoContainer /> 
        </div>
    );
    }

