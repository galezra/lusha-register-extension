import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useForm from './useForm';

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    background: 'white',

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
  const { form, handleChange } = useForm();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const user = {
      firstName: 'Bob',
      lastName: 'Dylan',
      phoneNumber: '14242424242',
      selfAttribution: 'other',
    };

    chrome.runtime.sendMessage({
      type: 'fillForm',
      data: { ...form, ...user },
    });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        name='email'
        label='Email'
        variant='filled'
        type='email'
        required
        value={form.email}
        size='small'
        onChange={handleChange}
      />
      <TextField
        name='password'
        label='Password'
        variant='filled'
        type='text'
        required
        value={form.password}
        size='small'
        onChange={handleChange}
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
