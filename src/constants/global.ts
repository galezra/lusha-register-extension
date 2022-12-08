import { ISignup } from './types';

export const FORM_VALUE_KEY = 'lusha_register_form';

export const DEFAULT_FORM_VALUES: ISignup = {
  email: 'john.doe@lusha.com',
  password: '123456Rr',
  firstName: 'John',
  lastName: 'Doe',
  phoneNumber: '14242424242',
  selfAttribution: 'Other',
  autoSignup: true,
};

export const MESSAGE_EVENT = {
  fillForm: 'FILL_FORM',
  urlChanged: 'URL_CHANGED',
};

export const BUTTON_OPACITY = {
  regular: '0.6',
  over: '0.8',
  click: '1',
};
