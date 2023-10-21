
import React, { Component } from 'react';
import { ThemeProvider} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export class Success extends Component {
  render() {
    return (
      <ThemeProvider className="custom-textfield" theme={''}>
            <React.Fragment>
                
            <AppBar  position="static"> <br />
            <Toolbar>
              <Typography variant="h6">
                Success
              </Typography>
            </Toolbar>
          </AppBar>
          <br />
            <h1>Thank you for your submition</h1>
            <p>you will get an email with furthur instruction</p>
            </React.Fragment>
      </ThemeProvider>
      
    )
  }
}


export default Success;


