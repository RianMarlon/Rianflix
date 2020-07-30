import React from 'react';
import './FormField.css';

export default function FormField({
  label, idField, name, type, value, onChange, placeholder,
}) {
  const props = {
    id: idField, name, type, placeholder, value, onChange,
  };

  let input = <input {...props} />;

  if (type === 'textarea') {
    delete props.type;

    input = <textarea {...props} />;
  }

  return (
    <div>
      <label htmlFor={idField}>{label}</label>
      {input}
    </div>
  );
}
