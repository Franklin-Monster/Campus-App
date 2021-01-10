import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './config'
const RouterIndex = (props) => {
    return (
        <>
            <Switch>
                {
                    routes.map(route =>
                        <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact={route.exact} />
                    )
                }
            </Switch>

        </>
    )
}
export default RouterIndex