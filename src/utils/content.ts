import { Signup } from './Signup';

export default chrome.runtime.onMessage.addListener((message) => {
  const { type, data } = message;
  if (type === 'fillForm') {
    const signup = new Signup(data);
    signup.start();
  }
});
