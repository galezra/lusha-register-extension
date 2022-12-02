function changeValue(input, value) {
  const input1 = document.querySelector(input);
  var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  nativeInputValueSetter.call(input1, value);

  var inputEvent = new Event('input', { bubbles: true });
  input1.dispatchEvent(inputEvent);
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const INPUTS_IDS = {
  email: '[data-test-id="signup-email"]',
  firstName: '[data-test-id=signup-first-name]',
  lastName: '[data-test-id=signup-last-name]',
  password: '[data-test-id=password]',
  phoneNumber: '[data-test-id=signup-phonenumber-text]',
  selfAttribution: '[data-test-id=signup-self-attribution]',
  submit: '[data-test-id=signup-submit]',
};

setTimeout(async () => {
  changeValue(INPUTS_IDS.email, 'gal.ezra+sdasd21wqdw@lusha.com');
  changeValue(INPUTS_IDS.firstName, 'gal');
  changeValue(INPUTS_IDS.lastName, 'ezra');
  changeValue(INPUTS_IDS.phoneNumber, '14242424242');
  changeValue(INPUTS_IDS.password, '123456Gr');
  await delay(200);
  //   changeValue(INPUTS_IDS.selfAttribution, 'other');

  const submit = document.querySelector(INPUTS_IDS.submit);
  //   submit.click();
}, 200);
