import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './config'
import ScrollToTop from './ScrollToTop'

const RouterIndex = (props) => {
    return (
        <>
        <ScrollToTop>
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
        </ScrollToTop>
        </>
    )
}
export default RouterIndex