import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
    render(){
        return(
            <Grid>                
                <Cell col={4}>
                    <img src={this.props.logo} style={{ height:'80px', width:'80px', borderRadius:'50%'}}/>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px', marginBottom: '0px'}}>{this.props.jobName}</h4>
                    <h6 style={{marginTop:'0px', marginBottom: '0px'}}><strong>{this.props.companyName}</strong></h6>
                    <p style={{marginTop:'0px', marginBottom: '0px', color: '#dbdbdb'}}><i className="fa fa-map-marker fa-1x"></i>&nbsp;&nbsp;{this.props.companyAdress}</p>
                    <p style={{color: '#dbdbdb'}}><i className="fa fa-calendar fa-1x" style={{borderColor:'white'}}></i>&nbsp;&nbsp;{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</p>
                    <p>{this.props.jobDescription}</p>
                </Cell>
        </Grid>
        )
    }
}

export default Experience;