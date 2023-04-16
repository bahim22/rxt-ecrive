import { Suspense, Lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from 'screens/NotFound'

const Portfolio = lazy(() => import('screens/Portfolio'))

export function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={<NotFound />}>
                <Switch>
                    <Route component={Portfolio} path='/portfolio' />
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
