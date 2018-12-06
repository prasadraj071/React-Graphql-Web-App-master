import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Link } from 'react-router-dom'
import promiseMiddleware from 'redux-promise';


import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';

import reducers from './reducers';
import App from './components/app';
import Reservation from './containers/reservation';



const createStoreWithMiddleware =  applyMiddleware(promiseMiddleware)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
        <div>
        <header>
        <nav className="navbar navbar-expand-md bg-success navbar-success">
                <a className="navbar-brand txtwhite">Hotel Reservation</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link txtwhite">Hotels Available</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/reservation'} className="nav-link txtwhite">Check Reservation</Link>
                    </li> 
                    </ul>
                </div> 
        </nav>
                
                
                
            </header>
            <div>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/reservation" component={Reservation}></Route>
            </div>
        </div>
        </BrowserRouter>
    </Provider>
    
    , document.getElementById('root'));
