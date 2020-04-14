import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl'
class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src={process.env.PUBLIC_URL + '/img/background.jpg'}
                            alt='avatar'
                            className='avatar-img img-fluid rounded-circle' roundedCircle/>                           
                        <div className='banner-text'>
                            <h3 style={{color: 'white', paddingTop:'10px', marginBottom:'5px'}}>Lounis Makhloufi</h3> 
                            <h3 style={{paddingTop:'0px', marginTop:'0px', color: 'white'}}>Développeur Web Full Stack</h3>
                            <hr/>
                            <p>HTML/CSS | Boostrap | JavaScript | React | PHP | Zend/Symfony | SQL/MYSQL | NOSQL/MongoDB</p>
                            <div className='social-links'>
                                {/* LinkedIn */}
                                <a href='https://www.linkedin.com/in/lounis-makhloufi-dev-web-php/' target='_blank' rel='noopener noreferrer'>
                                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                                </a>
                                {/* Github */}
                                <a href='https://github.com/makhloufi-lounis' target='_blank' rel='noopener noreferrer'>
                                    <i className='fa fa-github-square' aria-hidden='true' />
                                </a>
                                {/* Freecodecamp */}
                                <a href='https://www.freecodecamp.org/fccded76335-3d33-40eb-b9e4-3f5cdb5e751a' target='_blank' rel='noopener noreferrer'>
                                    <i className='fa fa-free-code-camp' aria-hidden='true' />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div> 
        )
    }
}

export default Landing;