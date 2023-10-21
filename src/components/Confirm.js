
import React, { Component } from 'react';
import { ThemeProvider} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';


export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //Process Forms
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
  render() {
    const {values} = this.props;
    const propertyNames = ['firstName', 'lastName', 'email', 'occupation', 'city', 'bio'];

    return (
      <ThemeProvider className="custom-textfield" theme={''}>
            <React.Fragment>
                
            <AppBar  position="static"> <br />
            <Toolbar>
              <Typography variant="h6">
                Confirm user data
              </Typography>
            </Toolbar>
          </AppBar>
          <br />
          <List >
            {propertyNames.map((property, index) => (
              <ListItem key={index} >
                <div >
                  <div>{property}</div>
                  <div>{values[property]}</div>
                </div>
              </ListItem>
            ))}
          </List>
          <br /><br />
          <Button 
            variant="contained"
            color="inherit"
            onClick={this.back}
            style={styles.button}
            >
            Return
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.continue}
            style={styles.button}
            >
            Confirm & Continue
          </Button>
            </React.Fragment>
      </ThemeProvider>
      
    )
  }
}
const styles = {
  button: {
    margin:15
  }
}

export default Confirm;


