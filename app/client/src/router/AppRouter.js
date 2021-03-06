import React from '../../node_modules/react';
import { BrowserRouter as Router, Route, Link } from '../../node_modules/react-router-dom'

import Home from '../components/Home';
import Watchout from '../components/Watchout';
import About from '../components/About';
import Results from '../components/Results';
import Services from '../components/Services';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ToolsContainer from '../containers/ToolsContainer';
import Tool from '../containers/Tool';

function AppRouter() {
    return (
        <Router>
            <nav>
                <Link to='/tools/'>Tools</Link>
                <Link to='/'>Home</Link>
                <Link to='/about/'>About</Link>
                <Link to='/services'>Services</Link>
                <Link to='/results'>Results</Link>
                <Link to='/watchout/'>Community</Link>
            </nav>

            <Header/>

            <Route path='/tools/' exact component={ToolsContainer}/>
            <Route path='/' exact component={Home}/>
            <Route path='/about/' exact component={About}/>
            <Route path='/services' exact component={Services}/>
            <Route path='/results' exact component={Results}/>
            <Route path='/watchout/' exact component={Watchout}/>

            <Route path='/tools/:id' component={Tool}/>

            <Footer/>
        </Router>
    )
}

export default AppRouter;