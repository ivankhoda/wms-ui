import React from 'react';
import {Route, Routes} from 'react-router';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';

import {useToken} from './Auth/useToken';
import {Login} from './Auth/Login';
import {Header} from './Header/Header';
import {Dropdown} from './Header/Dropdown/Dropdown';
import {WorkingPanel} from './WorkingPanel/WorkingPanel';
import {Main} from './Main/Main';
import {locationStore} from '../store/global';
import './App.style.scss';

const routes = [
    {Component:
        <Provider locationStore={locationStore}><Main /></Provider>,
    name: 'Main',
    path: '/'}
];

export const App = (): JSX.Element => {
    const {token, setToken} = useToken();

    return (
        <div className="paper">
            <HashRouter>
                {token
                    ? <>
                        <Dropdown />
                        <WorkingPanel>

                            <Routes>
                                {routes
                                    .map(({path, Component}) => <Route key={path} path={path} element={Component} />)}
                            </Routes>

                        </WorkingPanel>
                        <Header />
                    </>
                    : <Login setToken={setToken} />
                }
            </HashRouter>
        </div>
    );
};
