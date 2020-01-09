import React, { Component } from 'react';
import Menu from './components/Menu/menu';
import './App.css';
import routes from './routes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
    showMenuContent = () => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main} />
            })
        }
        return <Switch>{result}</Switch>
    }
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        <div className="row">
                            {this.showMenuContent(routes)}
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
