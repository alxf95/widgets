import React, { useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map(option => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={options.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Colour</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">
            <strong>{selected.label}</strong>
          </div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
