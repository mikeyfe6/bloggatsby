import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h3>Bedankt voor het inschrijven</h3>
                    <p>Je krijgt een mail voor verdere instructies</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;