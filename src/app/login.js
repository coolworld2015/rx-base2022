'use strict';

import React, {useState, useContext, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {AppContext} from './app';

const Login = () => {
    const {state, setContextState} = useContext(AppContext);
    const [showProgress, setShowProgress] = useState(false);
    const [badCredentials, setBadCredentials] = useState(false);
    const [name, setName] = useState('1');
    const [pass, setPass] = useState('1');

    useEffect(() => {
        return () => {
            console.log('logged in ');
        }
    }, []);

    let errorCtrl;
/*    if (badCredentials) {
        errorCtrl = <Text style={styles.error}>
            That username and password combination did not work
        </Text>;
    }*/

    const onLogin = () => {
        if (name === undefined || name === '' ||
            pass === undefined || pass === '') {
            setBadCredentials(true);
            return;
        }

        setShowProgress(true);
        fetch(state.url + 'api/login', {
            method: 'post',
            body: JSON.stringify({
                name,
                pass,
                description: 'iOS',
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log('SET_TOKEN ', responseData);
                if (responseData.token) {
                    setContextState({...state, ...{token: responseData.token, isLoggedIn: true}});
                    setBadCredentials(false);
                } else {
                    this.setState({
                        badCredentials: true,
                        showProgress: false,
                    });
                }
            })
            .catch(() => {
                setBadCredentials(true);
                setShowProgress(false);
            });
    };

    return (
        <Button variant="contained" color="primary" onClick={() => onLogin()}>
            Submit
        </Button>
    );
};

export default Login;
