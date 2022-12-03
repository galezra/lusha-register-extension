import { Signup } from './Signup';

const main = () => {
  const user = {
    email: 'gal.ezra@lusha.com',
    password: '123456Gr',
    firstName: 'Bob',
    lastName: 'Dylan',
    phoneNumber: '14242424242',
    selfAttribution: 'other',
  };

  const signup = new Signup(user);
  signup.start();
};

main();

export default main;
