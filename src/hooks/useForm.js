import { useState } from 'react';

function useForm(initialState) {
  const [value, setValue] = useState({ ...initialState });

  function updateField(event) {
    const newValue = { ...value };
    newValue[event.target.name] = event.target.value;
    setValue(newValue);
  }

  function clearForm() {
    setValue({ ...initialState });
  }

  return {
    value,
    updateField,
    clearForm,
  };
}

export default useForm;
