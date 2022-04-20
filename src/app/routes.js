import React from 'react'
import { Route, Switch } from 'react-router'

import Test from './Test';
//import Cool from './Cool';
//import CoolEdit from './CoolEdit';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Test} exact/>
{/*            <Route path="/test" component={Test}/>
            <Route path="/cool" component={Cool}/>
            <Route path="/cool_edit" component={CoolEdit}/>*/}
        </Switch>
    )
};

export default Routes;
