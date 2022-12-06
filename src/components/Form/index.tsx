import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Signup } from '../../utils/Signup';

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }: any) => {
  const classes = useStyles();
  const [email, setEmail] = useState('gal@sfds.ocm');
  const [password, setPassword] = useState('2131231231');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const user = {
      email: 'gal.ezra@lusha.com',
      password: '123456Gr',
      firstName: 'Bob',
      lastName: 'Dylan',
      phoneNumber: '14242424242',
      selfAttribution: 'other',
    };

    // Send form data to the background script for processing
    chrome.runtime.sendMessage({
      type: 'fillForm',
      data: user,
    });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label='Email'
        variant='filled'
        type='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label='Password'
        variant='filled'
        type='password'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <Button variant='contained' onClick={handleClose}>
          Cancel
        </Button>
        <Button type='submit' variant='contained' color='primary'>
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Form;
