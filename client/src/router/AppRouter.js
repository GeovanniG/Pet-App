import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Home/Header';
import Browse from '../components/Browse/Browse';
import Search from '../components/Search/Search';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';

const AppRouter = () => (
    <BrowserRouter basename="/Pet-App">
        <Switch>
            <Route path="/" component={Header} exact />
            <Route path="/browse" component={Browse} />
            <Route path="/search" component={Search} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter;