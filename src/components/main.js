import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route  exact path="/" component={LandingPage} />
        <Route  path="/aboutme" component={AboutMe} />
        <Route  exact path="/contact" component={Contact} />
        <Route  exact path="/projects" component={Projects} />
        <Route  exact path="/resume" component={Resume} />
    </Switch>
)

export default Main;