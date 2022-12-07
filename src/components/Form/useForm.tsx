import React, { useEffect, useState } from 'react';
import { DEFAULT_FORM_VALUES, FORM_VALUE_KEY } from '../../constants/global';
import { ISignup } from '../../constants/types';
import useLocalStorage from '../../hooks/useLocalStorage';

function useForm() {
  const [localStorageValue, setLocalStorageValue] = useLocalStorage<ISignup>(FORM_VALUE_KEY, DEFAULT_FORM_VALUES);
  const [form, setForm] = useState<ISignup>(localStorageValue);

  const handleSubmit = (newForm: ISignup) => setLocalStorageValue(newForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    const inputValue = event.target.type === 'checkbox' ? checked : value;

    setForm({
      ...form,
      [name]: inputValue,
    });
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
