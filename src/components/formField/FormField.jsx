import React from 'react';
import './FormField.css';

import PropTypes from 'prop-types';

function FormField({
  label, idField, name, type, placeholder, value, onChange,
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

FormField.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  idField: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
