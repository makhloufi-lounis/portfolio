import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content }  from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className='header-coler' title={<Link style={{textDecoration: 'none', color: 'white', fontWeight:'bold'}} to="/">Mon PROTFOLIO</Link>}  scroll>
              <Navigation style={{fontWeight:'bold'}}>
                  <Link to="/" style={{fontWeight:'bold'}}>Accueil</Link>
                  <Link to="/resume" style={{fontWeight:'bold'}}>CV</Link>
                  <Link to="/projects" style={{fontWeight:'bold'}}>Projets</Link>
                  <Link to="/contact" style={{fontWeight:'bold'}}>Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Mon PROTFOLIO</Link>}>
              <Navigation style={{fontWeight:'bold'}}>
                  <Link to="/" style={{fontWeight:'bold'}}>Accueil</Link>
                  <Link to="/resume" style={{fontWeight:'bold'}}>CV</Link>
                  <Link to="/projects" style={{fontWeight:'bold'}}>Projets</Link>
                  <Link to="/contact" style={{fontWeight:'bold'}}>Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
    </div>
  );
}

export default App;
