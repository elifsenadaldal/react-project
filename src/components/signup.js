import { AddCircleOutline } from "@mui/icons-material";
import { Avatar, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, Paper, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import React from "react";


const Signup=()=>{
const paperStyle={padding:'30px 20px',width:300, margin:"20px auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'skyblue'}
const marginStyle={margin:'5px 0'}
    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutline/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign up</h2>
                    <Typography variant='caption'>
                        Please fill this form to create an account

                    </Typography>
                </Grid>
                <form>
                    <TextField fullWidth style={marginStyle} label="Name" placeholder="Enter your name"/>
                    <TextField fullWidth style={marginStyle} label="Email" placeholder="Enter your email"/>
                    <TextField fullWidth style={marginStyle} label="Phone Number" placeholder="Enter your phone number"/>
                    <TextField fullWidth style={marginStyle} label="Password" placeholder="Enter your password"/>
                    <TextField fullWidth style={marginStyle} label="Confirm Password" placeholder="Confirm your password"/>
                    
                    <FormControl fullWidth>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                       
                    </RadioGroup>
                    </FormControl>

                    <FormGroup>
                        <FormControlLabel style={marginStyle} control={<Checkbox defaultChecked />} label="I accept the terms and conditions." />
                    </FormGroup>
                    <Button type='submit' variant='contained'style={marginStyle} color='primary'> Sign Up </Button>

                    
                </form>
            </Paper>
        </Grid>

    );
}

export default Signup;