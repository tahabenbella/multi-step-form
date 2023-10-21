import React, { Component } from 'react';
import { ThemeProvider} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
  const {values, handleChange} = this.props;
 

  return (
    <ThemeProvider className="custom-textfield" theme={''}>
          <React.Fragment>
              
          <AppBar  position="static"> <br />
          <Toolbar>
            <Typography variant="h6">
              Enter Personal Details
            </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <TextField
          label="Enter your Occupation"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
        />
        <br /><br />
        <TextField
          label="Enter your City"
          onChange={handleChange('city')}
          defaultValue={values.city}
        />
        <br /><br />
        <TextField
          label="Enter your Bio"
          onChange={handleChange('bio')}
          defaultValue={values.bio}
        />
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
          Continue
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

export default FormPersonalDetails;

