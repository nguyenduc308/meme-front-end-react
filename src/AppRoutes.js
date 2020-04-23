import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import { routes } from './routes'

export default function AppRoutes() {
    return (
        <Switch>
            {
                routes && routes.map((route, i)=> {
                    return(
                        <Route
                            key={i}
                            exact={route.exact}
                            path={route.path}
                        >
                        <route.component />
                        </Route>
                    )
                })
            }
        </Switch>
    )
}