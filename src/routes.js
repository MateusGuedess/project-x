import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


//components
import Sign from './components/Sign/'

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/sign" exact component={Sign} />
        </Switch>
    </Router>
)

export default Routes;