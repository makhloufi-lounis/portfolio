import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <img src={this.props.logo} style={{ height:'80px', width:'80px'}}/>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>{this.props.scoolName}</h4>
                    <h5 style={{marginTop:'0px'}}>{this.props.Diploma}</h5>
                    <p style={{color: '#dbdbdb'}}>{this.props.startYear} - {this.props.endYear}</p>
                    <p>{this.props.scoolDescriptio}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;