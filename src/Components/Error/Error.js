import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { hideErrorAction } from '../../actions/actions';

export const Error = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(hideErrorAction());
  };

  return (
    <div className="alert alert-danger" role="alert">
      <span
        style={{ 'float': 'right', 'cursor': 'pointer' }}
        onClick={() => handleClick()}
      >
        &times;
      </span>
      City not found
    </div>
  );
};