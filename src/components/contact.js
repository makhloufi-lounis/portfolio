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
                            src={process.env.PUBLIC_URL + '/img/0.jpeg'}
                            alt='avatar'
                            style={{height: '200px'}} />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. 
                        </p>
                    </Cell>
                    <Cell col={6}> 
                        <h2>Contact Me</h2>
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
                                        MySkipeId
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