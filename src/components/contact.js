import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}> 
                        <h2>Lounis Makhloufi</h2>
                        <img
                            src={process.env.PUBLIC_URL + '/img/photoeffets.com_.jpg'}
                            alt='avatar'
                            style={{height: '200px'}} />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                        Développeur web disposant de plus de 4 ans d'expériences autonome, discipliné et curieux. passionné par le code et le développement des applications web.
                        </p>
                    </Cell>
                    <Cell col={6}> 
                        <h2>Contactez moi</h2>
                        <hr />
                        <div className='contact-list'>                        
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className='fa fa-phone-square' aria-hidden='true' />
                                        +33 7 60 80 26 42
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className='fa fa-fax' aria-hidden='true' />
                                        +33 7 60 80 26 42
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className='fa fa-envelope' aria-hidden='true' />
                                        makhloufi.lounis@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className='fa fa-skype' aria-hidden='true' />
                                        lounisbba34
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>                    
                </Grid>
            </div>
        )
    }
}

export default Contact;