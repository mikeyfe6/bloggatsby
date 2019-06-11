import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'


export class FormUserDetails extends Component {
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
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Voornaam"
                                secondary={firstName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Achternaam"
                                secondary={lastName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Emailadres"
                                secondary={email} />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Werk"
                                secondary={occupation} />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Stad"
                                secondary={city} />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Bio"
                                secondary={bio} />
                        </ListItem>
                    </List>
                    <Button
                        variant="contained"
                        color="primary"
                        style={styles.button}
                        onClick={this.continue}
                    > Bevestigen & Doorgaan </Button>
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

export default FormUserDetails
