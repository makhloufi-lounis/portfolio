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
                        <Grid>
                            <Cell col={4}>    
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                    <CardTitle 
                                        style={
                                                {
                                                    color: '#fff',
                                                    height: '176px', 
                                                    background: 'url(/logos/ReactLogo.jpg) center / cover'
                                                }
                                            }>
                                                Projet Storybook #1

                                    </CardTitle>
                                    <CardText className='card-text'>
                                        Ce projet a été réaliser pour découvrire Storybook l'outil le plus populaire de développement de composants d'interface utilisateur. Il vous aide à développer et à concevoir des composants d'interface utilisateur en dehors de votre application dans un environnement isolé.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/makhloufi-lounis/taskbox" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button colored>CodePen</Button>
                                        <Button colored>
                                            <a href="https://condescending-shaw-852be9.netlify.com/?path=/story/tasklist--default" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                LiveDemo
                                            </a>
                                        </Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}> 
                                            <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                            <Cell col={4}>    
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                    <CardTitle 
                                        style={
                                                {
                                                    color: '#fff',
                                                    height: '176px', 
                                                    background: 'url(/logos/ReactLogo.jpg) center / cover'
                                                }
                                            }>
                                                Projet Storybook #1

                                    </CardTitle>
                                    <CardText className='card-text'>
                                        Projet Boite à Recette avec une base de données firebase.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/makhloufi-lounis/recette-app" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button colored>CodePen</Button>
                                        <Button colored>
                                            <a href="https://recette-app.makhloufilounis.now.sh/" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                LiveDemo
                                            </a>
                                        </Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}> 
                                            <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                            <Cell col={4}>
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                    <CardTitle 
                                        style={
                                                {
                                                    color: '#fff',
                                                    height: '176px', 
                                                    background: 'url(/logos/ReactLogo.jpg) center / cover'
                                                }
                                            }>
                                                Proget Chat Box #2

                                    </CardTitle>
                                    <CardText className='card-text'>
                                        Projet react pour créer un systeme de chat, ce proget utilise le service firebase qui propose une base de données cloud NoSQL et qui permet de stocker et synchroniser et les messages des différants utilisateurs.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/makhloufi-lounis/chatbox-app" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button colored>CodePen</Button>
                                        <Button colored><a href="https://chatbox-app.now.sh/" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                LiveDemo
                                            </a>
                                        </Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}> 
                                            <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                            <Cell col={4}>
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                    <CardTitle 
                                        style={
                                                {
                                                    color: '#fff',
                                                    height: '176px', 
                                                    background: 'url(/logos/ReactLogo.jpg) center / cover'
                                                }
                                            }>
                                                Proget Flux d'actualités #3

                                    </CardTitle>
                                    <CardText className='card-text'>
                                        Un petit projet react pour pour débuter avec React.js et la prise en main de ses outils, ses notions et sa syntaxe. toute en pratiquant avec la création d'une app Reactjs de A à Z !.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/makhloufi-lounis/react-fil-actualite" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button colored>CodePen</Button>
                                        <Button colored><a href="https://react-fil-actualite.makhloufilounis.now.sh" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                LiveDemo
                                            </a>
                                        </Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}> 
                                            <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                            <Cell col={4}>
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                    <CardTitle 
                                        style={
                                                {
                                                    color: '#fff',
                                                    height: '176px', 
                                                    background: 'url(/logos/ReactLogo.jpg) center / cover'
                                                }
                                            }>
                                                Proget Markdown #4

                                    </CardTitle>
                                    <CardText className='card-text'>
                                        Un petit projet react avec un rendu Markdown en tant que composants React.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/makhloufi-lounis/markdown-app" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button colored>CodePen</Button>
                                        <Button colored><a href="https://markdown-app-git-master.makhloufilounis.now.sh" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                LiveDemo
                                            </a>
                                        </Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}> 
                                            <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                        </Grid>                      
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
                            <CardText className='card-text'>
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
                        <Grid>
                            <Cell col={4}>
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                    <CardTitle 
                                        style={
                                                {
                                                    color: '#fff',
                                                    height: '176px', 
                                                    background: 'url(/logos/symfony.jpg) center / cover',
                                                    width:'auto'
                                                }
                                            }>
                                            Gestion de Blog #1

                                    </CardTitle>
                                    <CardText className='card-text'>
                                        Cette application est une application Symfony2 simple qui permet de consulter, ajouter modifier et supprimer des articles elle est realisée dans le cadre d'une auto formation sur le framework Symfony2 en suivant un tutoriel sur le site du Zero.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/makhloufi-lounis/tuto_symfony" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button colored>CodePen</Button>
                                        <Button colored>
                                                LiveDemo
                                        </Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}> 
                                            <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                        </Grid>
                        
                    </div>
                );
            case 3 :
                return (
                    <div className='projects-grid'>
                        <Grid>
                            <Cell col={4}>
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                    <CardTitle 
                                        style={
                                                {
                                                    color: '#fff',
                                                    height: '176px', 
                                                    background: 'url(/logos/zend-logo.jpg) center / cover'
                                                }
                                            }>
                                                Middleware PSR-15 #1

                                    </CardTitle>
                                    <CardText className='card-text'>
                                        Petit projet d'implementation d'un Middleware PSR-15 pour la protection contre les fails CSRF et la mise en place de l'intégration contenu avec Travis. Ce middleware vérifie les requêtes pour un jeton CSRF.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/makhloufi-lounis/demo-psr-15" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button colored>CodePen</Button>
                                        <Button colored>LiveDemo</Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}> 
                                            <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                            <Cell col={4}>
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                    <CardTitle 
                                        style={
                                                {
                                                    color: '#fff',
                                                    height: '176px', 
                                                    background: 'url(/logos/zend-logo.jpg) center / cover'
                                                }
                                            }>                                                
                                            Expressive OAuth 2 server #2
                                    </CardTitle>
                                    <CardText className='card-text'>
                                        Projet d'implementation d'un Middleware OAuth2 pour les applications Expressive et PSR-7. Il utilise le package league/oauth2-server pour implémenter le serveur OAuth2. Il prend en charge tous les type de subvention authorization code.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="https://github.com/makhloufi-lounis/expressive-oauth-2" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button colored>CodePen</Button>
                                        <Button colored>LiveDemo</Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}> 
                                            <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                            <Cell col={4}>
                                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                                    <CardTitle 
                                        style={
                                                {
                                                    color: '#fff',
                                                    height: '176px', 
                                                    background: 'url(/logos/zend-logo.jpg) center / cover'
                                                }
                                            }>                                                
                                            ZEND Proget #3
                                    </CardTitle>
                                    <CardText className='card-text'>
                                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>
                                            <a href="#/" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                                                GitHub
                                            </a>
                                        </Button>
                                        <Button colored>CodePen</Button>
                                        <Button colored>LiveDemo</Button>
                                    </CardActions>
                                    <CardMenu style={{color: '#fff'}}> 
                                            <IconButton name='share' />
                                    </CardMenu>
                                </Card>
                            </Cell>
                          </Grid>  
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
                        <CardText className='card-text'>
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
                    <Tab>Symfony</Tab>
                    <Tab>Zend</Tab>
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