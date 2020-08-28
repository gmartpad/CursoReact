import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, useLocation, useHistory } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import APIs from './pages/APIs';

export default () => {

    const location = useLocation();
    const history = useHistory();

    const dispatch = useDispatch();

    const setAPILoading = (newAPILoading) => dispatch({
        type: 'SET_API_LOADING',
        payload: {
            loading: newAPILoading,
        }
    });

    useEffect(() => {
        setAPILoading(true);
    }, [location]);

    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/sobre">
                <Sobre/>
            </Route>
            <Route exact path="/apis">
                <APIs/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
}