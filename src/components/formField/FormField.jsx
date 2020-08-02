import React from 'react';
import './FormField.css';

import PropTypes from 'prop-types';

function FormField({
  label, idField, name, type, placeholder, value, onChange, options,
}) {
  const props = {
    id: idField, name, type, placeholder, value, onChange,
  };

  let field = <input {...props} />;

  if (type === 'textarea') {
    delete props.type;

    field = <textarea {...props} />;
  } else if (type === 'select') {
    field = (
      <select name={name} id={idField} value={value} onChange={onChange}>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div>
      <label htmlFor={idField}>{label}</label>
      {field}
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  onChange: () => {},
  options: [{}],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  idField: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default FormField;
