export class SignupElements {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  selfAttribution: string;
  private submit: string;
  private nativeInputSetter: any;

  constructor() {
    this.email = '[data-test-id="signup-email"]';
    this.firstName = '[data-test-id=signup-first-name]';
    this.lastName = '[data-test-id=signup-last-name]';
    this.password = '[data-test-id=password]';
    this.phoneNumber = '[data-test-id=signup-phonenumber-text]';
    this.selfAttribution = '[data-test-id=signup-self-attribution]';
    this.submit = '[data-test-id=signup-submit]';

    if (window) {
      this.nativeInputSetter = Object?.getOwnPropertyDescriptor(window?.HTMLInputElement?.prototype, 'value');
    }
  }

  changeValue(selector: string, value: string | number) {
    const input = document.querySelector(selector);

    if (input) {
      this.nativeInputSetter?.set?.call(input, value);
      const inputEvent = new Event('input', { bubbles: true });
      input?.dispatchEvent(inputEvent);
    }
  }

  submitForm() {
    const submit: HTMLInputElement | null = document.querySelector(this.submit);
    submit?.click();
  }
}
