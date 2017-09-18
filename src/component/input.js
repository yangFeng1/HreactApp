import React from 'react';

const Input = ({value,onChange,onInputSubmit}) => {
  return (
      <form className="form-horizontal">
        <div
          className="form-group">
          <label
            htmlFor="listInput"
            >
            Email address
          </label>
          <input
            value={value}
            type="text"
            className="form-control"
            id="listItemInput"
            placeholder={value}
            onChange = {onChange}
          />
          <button
            onClick={onInputSubmit}
            className="btn btn-primary">
            Add Item
          </button>
        </div>
    </form>
    )
}
export default Input
