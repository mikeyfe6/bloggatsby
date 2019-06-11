import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <TextField
                        placeholder="Vul je werk in"
                        label="Werk"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        placeholder="Vul je stad in"
                        label="Stad"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        placeholder="Vul je bio in"
                        label="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        style={styles.button}
                        onClick={this.continue}
                    > Continue </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={styles.button}
                        onClick={this.back}
                    > Back </Button>
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

export default FormPersonalDetails
