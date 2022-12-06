import React, { useState } from 'react';
import { DEFAULT_FORM_VALUES, FORM_VALUE_KEY } from '../../constants/global';
import useLocalStorage from '../../hooks/useLocalStorage';
interface FormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  selfAttribution: string;
}

function useForm() {
  const [localStorageValue, setLocalStorageValue] = useLocalStorage<FormValues>(FORM_VALUE_KEY, DEFAULT_FORM_VALUES);
  const [form, setForm] = useState<FormValues>(localStorageValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });

    setLocalStorageValue({ ...form, [name]: value });
  }

  return {
    form,
    handleChange,
  };
}

export default useForm;
