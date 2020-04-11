import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }   

    toggleCategories() {       

        switch (this.state.activeTab) {
            case 0 :
                return (
                    <div className='projects-grid'>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle 
                                style={
                                        {
                                            color: '#fff',
                                            height: '176px', 
                                            background: 'url(/logos/ReactLogo.jpg) center / cover'
                                        }
                                    }>
                                        React project #1

                            </CardTitle>
                            <CardText>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}> 
                                    <IconButton name='share' />
                            </CardMenu>
                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle 
                                style={
                                        {
                                            color: '#fff',
                                            height: '176px', 
                                            background: 'url(/logos/ReactLogo.jpg) center / cover'
                                        }
                                    }>
                                        React project #2

                            </CardTitle>
                            <CardText>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}> 
                                    <IconButton name='share' />
                            </CardMenu>
                        </Card>
                    </div>
                );
            case 1 :
                return (
                    <div className='projects-grid'>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle 
                                style={
                                        {
                                            color: 'black',
                                            height: '176px', 
                                            background: 'url(/logos/php-logo.svg.png) center / cover'
                                        }
                                    }>
                                        PHP project #1

                            </CardTitle>
                            <CardText>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}> 
                                    <IconButton name='share' />
                            </CardMenu>
                        </Card>
                    </div>
                );
            case 2 :
                return (
                    <div className='projects-grid'>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle 
                                style={
                                        {
                                            color: '#fff',
                                            height: '176px', 
                                            background: 'url(/logos/symfony-logo.png) center / cover'
                                        }
                                    }>
                                        SYMFONY project #1

                            </CardTitle>
                            <CardText>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}> 
                                    <IconButton name='share' />
                            </CardMenu>
                        </Card>
                    </div>
                );
            case 3 :
                return (
                    <div className='projects-grid'>
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle 
                                style={
                                        {
                                            color: '#fff',
                                            height: '176px', 
                                            background: 'url(/logos/zend-logo.jpg) center / cover'
                                        }
                                    }>
                                        ZEND project #1

                            </CardTitle>
                            <CardText>
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>CodePen</Button>
                                <Button colored>LiveDemo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}> 
                                    <IconButton name='share' />
                            </CardMenu>
                        </Card>
                    </div>
                );
            default :
            return (
                <div className='projects-grid'>
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle 
                            style={
                                    {
                                        color: '#fff',
                                        height: '176px', 
                                        background: 'url(/logos/ReactLogo.jpg) center / cover'
                                    }
                                }>
                                    React project #1

                        </CardTitle>
                        <CardText>
                            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}> 
                                <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            );             

        }
    }
    render() {
        return(
            <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}>
                    <Tab>React</Tab>
                    <Tab>PHP</Tab>
                    <Tab>SYMFONU</Tab>
                    <Tab>ZEND</Tab>
                </Tabs>
                
                <Grid>
                    <Cell col={12}>
                        <div className='content'>
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>                     
            </div>
        )
    }
}

export default Projects;