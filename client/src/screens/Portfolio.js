import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Formik } from "formik";
import styles from './Portfolio.module.scss'
import stespsComposer from 'components/StepsRouter'
import NotFound from "./NotFound";

const initialFormValues = {
    portfolioName: ' ',
    marketplaces: {},
}

function Portfolio({ match: { url }}) {
    return (
        <div>
            <Formik>
                <BrowserRouter>
                <Suspense>
                    <Swtich>
                        <StepsRouter>
                            < Route />
                            < Route />
                            < Route />
                        </StepsRouter>
                    </Swtich>
                </Suspense>
                </BrowserRouter>
            </Formik>
        </div>
    )
}