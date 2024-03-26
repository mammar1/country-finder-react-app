import React from 'react';
import styles from '../../App.css';

const Input = ({
  children, styles: userStyles = null, handleOnChange, placeHolder = 'Enter text', ...props
}) => (
        <input placeholder={placeHolder} onChange={handleOnChange} {...props} />
);

export default Input;
