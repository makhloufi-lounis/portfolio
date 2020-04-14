import React, { Component } from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';

class Skills extends Component {
    render(){
        return(
            <Grid>
            <Cell col={6}>
                <div style={{fontSize:'12px', fontWeight: 'bold'}}>
                    {this.props.skill}
                </div>
            </Cell>
            <Cell col={6}>
                <div>
                    <ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.process} />
                </div>
            </Cell>            
        </Grid>
        )
    }
}

export default Skills;