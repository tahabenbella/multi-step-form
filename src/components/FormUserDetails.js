import React, { Component } from 'react';
import { ThemeProvider} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
  render() {
    const {values, handleChange} = this.props;
   

    return (
      <ThemeProvider className="custom-textfield" theme={''}>
            <React.Fragment>
                
            <AppBar  position="static"> <br />
            <Toolbar>
              <Typography variant="h6">
                Enter User Details
              </Typography>
            </Toolbar>
          </AppBar>
          <br />
          <TextField
            label="Enter your First Name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br /><br />
          <TextField
            label="Enter your Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br /><br />
          <TextField
            label="Enter your Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br /><br />
          <Button
            variant="contained"
            color="primary"
            onClick={this.continue}
            >
            Continue
          </Button>
            </React.Fragment>
      </ThemeProvider>
      
    )
  }
}

export default FormUserDetails;

