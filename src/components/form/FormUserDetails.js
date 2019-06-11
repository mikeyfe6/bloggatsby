import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField
                        placeholder="Vul je voornaam in"
                        label="Voornaam"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                        placeholder="Vul je achternaam in"
                        label="Achternaam"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                        placeholder="Vul je emailadres in"
                        label="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        style={styles.button}
                        onClick={this.continue}
                    > Continue </Button>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 30
    }
}

export default FormUserDetails
