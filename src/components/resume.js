import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                className='circular--square'
                                src={process.env.PUBLIC_URL + '/img/0.jpeg'}
                                alt='avatar'
                                style={{height: '180px', marginRight:'20px'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'0em'}}>Lounis Makhloufi</h2>
                        <h4 style={{color: 'grey'}}>Développeur Web Full Stack</h4>
                        <hr style={{borderTop: '3px solid #B33fb2', width: '50%'}} />
                        <p>
                            Développeur web disposant de plus de 4 ans d'expériences autonome, discipliné et curieux.
                        </p>
                        <hr style={{borderTop: '3px solid #B33fb2', width: '50%'}} />
                        <h5>Adress</h5>
                        <p>18 Boulvard Jeans Jacque Reseau, 92230 Gennevilliers, France</p>
                        <h5>Tél</h5>
                        <p>+33 7 60 80 26 42</p>
                        <h5>Email</h5>
                        <p>makhloufi.lounis@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #B33fb2', width: '50%'}} />
                        <h4>Compétences Technique</h4>
                        <Skills 
                            skill='PHP (Zend/Symfony)'
                            process={90}
                        />
                        <Skills 
                            skill='PhpUnit'
                            process={50}
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
                            process={30}
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
                            skill='GIT (GIT-GITHUB / Bitbucket)'
                            process={80}
                        />
                        <Skills 
                            skill='Jenkins | Travis'
                            process={50}
                        />
                        <Skills 
                            skill='UML | Merise'
                            process={60}
                        />
                        <hr style={{borderTop: '3px solid #B33fb2', width: '50%'}} />
                        <h4>Langues</h4>
                        <h5 style={{marginBottom:'0px'}}>Français</h5>
                        <p>Courant</p>
                        <h5 style={{marginBottom:'0px'}}>Anglais</h5>
                        <p>Compétence professionnelle</p>

                    </Cell>
                    <Cell col={8} className='resume-right-col'>
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
                                    Dans le cadre du développement d'un produit pour la gestion des compagnes publicitaires sur les réseaux sociaux j'étais amené à :
                                    <ul>
                                        <li>Participez à la conception technique et au chiffrage des demandes de développements.</li>
                                        <li>Production de code conforme au cahier des charges, de qualité et maintenable par l'ensemble de l'équipe.</li>
                                        <li>Intégration et utilisation des API et SDK télque Facebook, Stape, Sentry</li>
                                        <li>Mise en place des tests unitaires avec PhpUnit</li>
                                        <li>Participation a la mise en place de l'intégration et du déploiyement contenu avec Travis</li>
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
                                    <li>Refonte et amélioration continue des plate-formes de l'entreprise de l'entreprise  ( ww.fusacq.com, www.placedescommerces.com, wwwplacedesfranchises.com ).</li>
                                    <li>Développement et amélioration des outils de l'entreprise (  marketing automatisé et personnalisé, dictionnaire FUSACQ ).</li>
                                    <li>Création et suivi des sites en marques blanches des partenaires ( www.fondsdecommerce.retif.eu, www.opportunites-industrielles.uimm.fr ).</li>
                                    <li>Gestion et traitement des flux (XML, JSON, CSV) des partenaires par la mise en place des passerelles avec les sites de l'entreprise.</li>
                                    <li>Rédaction de la documentation technique.</li>
                                </ul>
                            }
                        />
                        <Experience
                            logo={process.env.PUBLIC_URL + '/logos/groupe-pratique.png'}
                            jobName='Développeur web php'
                            companyName='Fusacq'
                            companyAdress="1 bis avenue de la république 75011 Paris"
                            startMonth='avrile'
                            startYear={2015}
                            endMonth='décembre'
                            endYear={2015}
                            jobDescription={
                                <ul>
                                    <li>Amélioration et optimisation des services existants : ( www.groupepratique.com, www.bestofartisans.com ).</li>
                                    <li>Développement d'un outil de récupération et de normalisation des flux RSS pour l'ensemble des sites web de l'entreprise.</li>
                                    <li>Création et suivi des sites en marques blanches des partenaires ( www.fondsdecommerce.retif.eu, www.opportunites-industrielles.uimm.fr ).</li>
                                    <li>Développement dune application de création de devis, et mise en relation avec la plateforme bestofartisans.com.</li>
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
                            scoolDescriptio="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée."
                        />
                        <Education
                            logo={process.env.PUBLIC_URL + '/logos/setif.jpg'}
                            scoolName='Université Ferhat Abbas (Algérie-Sétif)'
                            Diploma='Master 2 (M2), Réseaux et Systèmes Distribués'
                            startYear={2009}
                            endYear={2011}                            
                            scoolDescriptio="Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée."
                        />                        
                    </Cell>
                </Grid>            
            </div>
        )
    }
}

export default Resume;