import { ISignup } from './../constants/types';
import { addRandomString } from './global';
import { SignupElements } from './SignupElements';

export class Signup {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  selfAttribution: string;
  autoSignup: boolean;
  private signupForm: SignupElements;

  constructor({ email, firstName, lastName, password, phoneNumber, selfAttribution, autoSignup }: ISignup) {
    this.email = addRandomString(email);
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.selfAttribution = selfAttribution;
    this.autoSignup = autoSignup;
    this.signupForm = new SignupElements();
  }

  delay = (ms: number | undefined) => new Promise((res) => setTimeout(res, ms));

  async start() {
    this.signupForm.changeValue(this.signupForm.email, this.email);
    this.signupForm.changeValue(this.signupForm.firstName, this.firstName);
    this.signupForm.changeValue(this.signupForm.lastName, this.lastName);
    this.signupForm.changeValue(this.signupForm.phoneNumber, this.phoneNumber);
    this.signupForm.changeValue(this.signupForm.password, this.password);
    await this.delay(200);
    this.signupForm.changeValue(this.signupForm.selfAttribution, 'other');

    if (this.autoSignup) {
      this.signupForm.submitForm();
    }
  }
}
