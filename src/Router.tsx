import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ViewCurrency } from './views/ViewCurrency'
import { Home } from './views/Home'

interface NavigableRoute {
    navigate: (id: string) => string
    path: string
}

interface RoutingTypings {
    root: string
    view: NavigableRoute
    home: string
}

export const routes: RoutingTypings = {
    root: '/',
    home: '/home',
    view: {
        navigate: (id: string) => `/view/${ id }`,
        path: '/view/:id'
    }
}

export const ApplicationRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <div className={ `router` }>
                <Switch>
                    <Route exact path={ routes.root } component={ Home } />
                    <Route exact path={ routes.view.path } component={ ViewCurrency } />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
