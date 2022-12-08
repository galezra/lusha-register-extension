import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@material-ui/core/Button';
import useForm from './useForm';
import { MESSAGE_EVENT } from '../../constants/global';

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

const Form = ({ onClose }: any) => {
  const classes = useStyles();
  const { form, handleChange, handleSubmit } = useForm();

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();

    handleSubmit(form);
    chrome.runtime.sendMessage({
      type: MESSAGE_EVENT.fillForm,
      data: form,
    });
    onClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmitForm}>
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
      <TextField
        name='firstName'
        label='First Name'
        variant='filled'
        type='text'
        required
        value={form.firstName}
        size='small'
        onChange={handleChange}
      />
      <TextField
        name='lastName'
        label='Last name'
        variant='filled'
        type='text'
        required
        value={form.lastName}
        size='small'
        onChange={handleChange}
      />
      <TextField
        name='phoneNumber'
        label='Phone Number'
        variant='filled'
        type='text'
        required
        value={form.phoneNumber}
        size='small'
        onChange={handleChange}
      />
      <TextField
        name='selfAttribution'
        label='Self Attribution'
        variant='filled'
        type='text'
        required
        value={form.selfAttribution}
        size='small'
        onChange={handleChange}
      />
      <FormControlLabel
        label={
          <Typography variant='body1' fontWeight={540}>
            Auto register
          </Typography>
        }
        name='autoSignup'
        style={{ color: 'grey', fontSize: '1px', alignSelf: 'flex-start' }}
        control={<Checkbox name='autoSignup' checked={form.autoSignup} size='small' onChange={handleChange} />}
      />
      <div>
        <Button type='submit' variant='contained' color='primary'>
          Save
        </Button>
        <Button variant='contained' onClick={onClose}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default Form;
