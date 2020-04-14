import React, {Component} from 'react';
import {Grid, Cell, Button} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid className='resume-grid'>
                    <Cell col={4} phone={12}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                className='circular--square'
                                src={process.env.PUBLIC_URL + '/img/photoeffets.com_.jpg'}
                                alt='avatar'
                                style={{height: '180px', marginRight:'20px'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'0em', color:'black'}}>Lounis Makhloufi</h2>
                        <h4 style={{color: 'grey'}}>Développeur Web Full Stack</h4>
                        <hr style={{borderTop: '3px solid #B33fb2', width: '50%'}} />
                        <p>
                            Développeur web disposant de plus de 4 ans d'expériences autonome, discipliné et curieux. passionné par le code et le développement des applications web.
                        </p>
                        <hr style={{borderTop: '3px solid #B33fb2', width: '50%'}} />
                        <h5>Adress</h5>
                        <p>18 Boulevard Jean Jacques Rousseau, 92230 Gennevilliers, France</p>
                        <h5>Tél</h5>
                        <p>+33 7 60 80 26 42</p>
                        <h5>Email</h5>
                        <p>makhloufi.lounis@gmail.com</p>
                        <h5>Web</h5>
                        <Button style={{display: 'block'}}>
                            <i className='fa fa-github-square' aria-hidden='true' />&nbsp;&nbsp;
                            <a href="https://github.com/makhloufi-lounis" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                             GitHub
                            </a>
                        </Button>
                        <Button style={{display: 'block'}}>
                            <i className='fa fa-linkedin-square' aria-hidden='true' />&nbsp;&nbsp;
                            <a href="https://www.linkedin.com/in/lounis-makhloufi-dev-web-php" style={{textDecoration:'none', color:'rgb(63,81,181)'}} target='_blink'>
                             Linkedin    
                            </a>
                        </Button>                        
                        <hr style={{borderTop: '3px solid #B33fb2', width: '50%'}} />
                        <h4>Compétences Technique</h4>
                        <Skills 
                            skill='PHP (Zend/Symfony)'
                            process={90}
                        />
                        <Skills 
                            skill='PhpUnit'
                            process={70}
                        />
                        <Skills 
                            skill='HTML5/CSS (Bootstrap)'
                            process={60}
                        />
                        <Skills 
                            skill='JavaScript (JQuery)'
                            process={60}
                        />
                        <Skills 
                            skill='ReactJS'
                            process={40}
                        />
                        <Skills 
                            skill='SQL (MySQL)'
                            process={70}
                        />
                        <Skills 
                            skill='NoSQL (Mongodb)'
                            process={50}
                        />
                        <Skills 
                            skill='XML | JSON'
                            process={70}
                        />
                        <Skills 
                            skill='GIT (GitHub / Bitbucket)'
                            process={80}
                        />
                        <Skills 
                            skill='Jenkins | Travis'
                            process={60}
                        />
                        <Skills 
                            skill='UML | Merise'
                            process={60}
                        />
                        <Skills 
                            skill='Docker'
                            process={40}
                        />
                        <hr style={{borderTop: '3px solid #B33fb2', width: '50%'}} />
                        <h4>Langues</h4>
                        <h5 style={{marginBottom:'0px'}}>Français</h5>
                        <p>Courant</p>
                        <h5 style={{marginBottom:'0px'}}>Anglais</h5>
                        <p>Compétence professionnelle</p>

                    </Cell>
                    <Cell col={8} phone={12} className='resume-right-col'>
                        <h2>Expérience</h2>
                        <Experience
                            logo={process.env.PUBLIC_URL + '/logos/teeps.png'}
                            jobName='Développeur web php'
                            companyName='Teeps'
                            companyAdress="92 Rue d'Amsterdam, 75009 Paris"
                            startMonth='Septembre'
                            startYear={2019}
                            endMonth='groupe-pratique'
                            endYear=''
                            jobDescription={
                                <div>
                                    Dans le cadre du développement d'un produit pour la gestion des campagnes publicitaires sur les réseaux sociaux j'étais amené à :
                                    <ul>
                                        <li>Participez à la conception technique et au chiffrage des demandes de développements.</li>
                                        <li>Production de code conforme au cahier des charges, de qualité et maintenable par l'ensemble de l'équipe.</li>
                                        <li>Intégration et utilisation des API/SDK tels que Facebook, Stripe, Sentry</li>
                                        <li>Mise en place des tests unitaires avec PhpUnit</li>
                                        <li>Participation a la mise en place de l'intégration et du déploiement contenu avec Travis</li>
                                    </ul>
                                </div>
                                
                            }
                        />
                       <Experience
                            logo={process.env.PUBLIC_URL + '/logos/fusacq.png'}
                            jobName='Développeur web php'
                            companyName='Fusacq'
                            companyAdress="27 Rue Taitbout, 75009 Paris"
                            startMonth='janvier'
                            startYear={2016}
                            endMonth='août'
                            endYear={2019}
                            jobDescription={
                                <ul>
                                    <li>Refonte et amélioration continue des plate-formes de l'entreprise :
                                        <ul>
                                            <li><a href='https://www.fusacq.com/' target='_blink'>Fusacq</a></li>
                                            <li><a href='https://www.placedescommerces.com/' target='_blink'>Place Des Commerces</a></li>
                                            <li><a href='https://www.placedesfranchises.com/' target='_blink'>Place Des FRanchises</a></li>
                                        </ul> 
                                    </li>
                                    <li>Développement et amélioration des outils de l'entreprise (  marketing automatisé et personnalisé, dictionnaire FUSACQ ).</li>
                                    <li>Création et suivi des sites en marques blanches des partenaires :
                                        <ul>
                                            <li><a href='https://fondsdecommerce.retif.eu/'>Retif - Fonds De Commerce</a></li>
                                            <li><a href='https://opportunites-industrielles.uimm.fr/'>UIMM - Portail d'affaires avec Fusacq</a></li>
                                        </ul>
                                    </li>
                                    <li>Gestion et traitement des flux ( XML, JSON, CSV ) des partenaires par la mise en place des passerelles avec les sites de l'entreprise.</li>
                                    <li>Participation a la mise en place de l'intégration et du déploiyement contenu avec Jenkins</li>
                                    <li>Rédaction de la documentation technique.</li>
                                </ul>
                            }
                        />
                        <Experience
                            logo={process.env.PUBLIC_URL + '/logos/groupe-pratique.png'}
                            jobName='Développeur web php'
                            companyName='Groupe Pratique'
                            companyAdress="1 bis avenue de la république 75011 Paris"
                            startMonth='avril'
                            startYear={2015}
                            endMonth='décembre'
                            endYear={2015}
                            jobDescription={
                                <ul>
                                    <li>Amélioration et optimisation des services existants : 
                                        <ul>
                                            <li><a href='https://www.groupe-pratique.com/' target='_blink'>Groupe Pratique</a></li>
                                            <li><a href='' target='_blink'>Best Of Artisans</a></li>
                                        </ul>
                                    </li>
                                    <li>Développement d'un outil de récupération et de normalisation des flux RSS pour l'ensemble des sites web de l'entreprise.</li>
                                    <li>Création et suivi des sites en marques blanches des partenaires ( www.fondsdecommerce.retif.eu, www.opportunites-industrielles.uimm.fr ).</li>
                                    <li>Développement dune application de création de devis, et mise en relation avec la plateforme bestofartisans.com.</li>
                                </ul>
                            }
                        />
                        <Experience
                            logo={process.env.PUBLIC_URL + '/logos/opgi.jpg'}
                            jobName='Ingenieur informatique'
                            companyName='OPGI - BBA'
                            companyAdress="Bordj Bou Arreridj Algérie"
                            startMonth='février'
                            startYear={2011}
                            endMonth='février'
                            endYear={2012}
                            jobDescription={
                                <ul>
                                    <li>Développement d’une application de gestion des paiements des locataires en JAVA.</li>
                                    <li>Mise à jour du site web de l’entreprise <a href='http://www.opgi.dz/opgi_bba/'>OPGI - BBA</a></li>
                                    <li>Configuration, réparation et maintenance des ordinateurs de l’entreprise.</li>
                                </ul>
                            }
                        />
                         <hr style={{borderTop:'3px solid #e22974'}} />
                        <h2>Formations</h2>
                        <Education
                            logo={process.env.PUBLIC_URL + '/logos/paris7.png'}
                            scoolName='Université Denis Diderot (Paris VII)'
                            Diploma='Master 2 (M2), Ingénierie des Algorithmes et des Programmes'
                            startYear={2013}
                            endYear={2015}                            
                            scoolDescriptio=""
                        />
                        <Education
                            logo={process.env.PUBLIC_URL + '/logos/setif.jpg'}
                            scoolName='Université Ferhat Abbas (Algérie-Sétif)'
                            Diploma='Master 2 (M2), Réseaux et Systèmes Distribués'
                            startYear={2009}
                            endYear={2011}                            
                            scoolDescriptio=""
                        />                        
                    </Cell>
                </Grid>            
            </div>
        )
    }
}

export default Resume;