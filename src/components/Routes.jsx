import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import ChannelSpecific from '../pages/Products'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/settings' component={ChannelSpecific}/>
        </Switch>
    )
}

export default Routes
