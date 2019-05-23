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
            <nav className='menu'>
                {/* <div class='menu-item'><Link to='/'>Home</Link></div> */}
                <div className='menu-item'><Link to='/about/'>About</Link></div>
                <div className='menu-item'><Link to='/tools/'>Tools</Link></div>
                <div className='menu-item'><Link to='/services'>Services</Link></div>
                <div className='menu-item'><Link to='/results'>Results</Link></div>
                <div className='menu-item'><Link to='/watchout/'>Community</Link></div>
                
                <div className='menu-label'><span></span></div>

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