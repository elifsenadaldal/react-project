import { Avatar, Grid, Paper, TextField, FormControlLabel, Checkbox, FormGroup, Button, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LockPersonIcon from '@mui/icons-material/LockPerson';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleClick() {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!email || !password) {
      setError('Email and password are required.');
    } else if (!email.match(emailRegex)) {
      setError('Invalid email address.');
    } else {
      navigate("/home");
    }
  }

  const paperStyle={padding :20, height:'70vh', width:280, margin:"50px auto"}
  const avatarStyle={backgroundColor:"skyblue"}
  const buttonStyle={margin:'10px 0'}
  const inputStyle={margin:'8px 0'}
  return(
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockPersonIcon/></Avatar>           
          <h2> Sign In </h2>
        </Grid>
        <TextField label="E-mail" placeholder='Enter e-mail' style={inputStyle} fullWidth required value={email} onChange={e => setEmail(e.target.value)} />
        <TextField label="Password" placeholder='Enter Password' type="password" fullWidth required value={password} onChange={e => setPassword(e.target.value)} />
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me" 
        /> 
        <Button onClick={handleClick} variant="outlined" type='submit' color='primary' style={buttonStyle} fullWidth >Sign in</Button>
        <Typography style={inputStyle}>
          <Link href="#" >
            Forgot password?
          </Link>
        </Typography>
        <Typography> Do you have an account? 
          <Link href="#" >
            Sign up.
          </Link>
        </Typography>
        {error && <Typography style={{color: 'red', marginTop: '10px'}}>{error}</Typography>}
      </Paper>
    </Grid>
  );
}

export default Login;
