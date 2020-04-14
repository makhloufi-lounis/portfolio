import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {
    render(){
        return(
            <Grid>                
                <Cell col={4}>
                    <img src={this.props.logo} style={{ height:'80px', width:'80px'}}/>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px', marginBottom: '0px'}}>{this.props.jobName}</h4>
                    <h5 style={{marginTop:'0px', marginBottom: '0px'}}>{this.props.companyName}</h5>
                    <p style={{marginTop:'0px', marginBottom: '0px', color: '#dbdbdb'}}>{this.props.companyAdress}</p>
                    <p style={{color: '#dbdbdb'}}>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</p>
                    <p>{this.props.jobDescription}</p>
                </Cell>
        </Grid>
        )
    }
}

export default Experience;