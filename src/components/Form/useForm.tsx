import React, { useState } from 'react';

interface FormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

function useForm() {
  // Use a single key in the local storage to store all form field values
  const initialValues = (JSON.parse(localStorage.getItem('lusha_register_form')) as FormValues) || {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
  };

  const [form, setForm] = useState<FormValues>(initialValues);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    debugger;
    setForm({
      ...form,
      [name]: value,
    });

    // Update the value in the local storage
    localStorage.setItem(
      'lusha_register_form',
      JSON.stringify({
        ...form,
        [name]: value,
      })
    );
  }

  return {
    form,
    handleChange,
  };
}

export default useForm;
