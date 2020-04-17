import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Portofolio from "./component/Portofolio";
import HireMe from "./component/HireMe";
import Article from "./component/Article";

function App() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route path="/hireme">
                        <HireMe/>
                    </Route>
                    <Route path="/article">
                        <Article/>
                    </Route>
                    <Route path="/portfolio">
                        <Portofolio/>
                    </Route>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
