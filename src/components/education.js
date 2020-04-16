import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <img src={this.props.logo} style={{ height:'80px', width:'80px', borderRadius:'50%'}}/>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.scoolName}</h4>
                    <h6 style={{marginTop:'0px'}}><strong>{this.props.Diploma}</strong></h6>
                    <p style={{color: '#dbdbdb'}}><i className="fa fa-calendar fa-1x" style={{borderColor:'white'}}/>&nbsp;&nbsp;{this.props.startYear} - {this.props.endYear}</p>
                    <p>{this.props.scoolDescriptio}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;