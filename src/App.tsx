import React from "react";
import "./App.scss";
import { ApplicationRouter } from './Router'


export const App: React.FC = () => {
    return <div className={ `container` }>
        <div className={ `row` }>
            <div className="col-xs-12">
                <ApplicationRouter />
            </div>
        </div>
    </div>

}
