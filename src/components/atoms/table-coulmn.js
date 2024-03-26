import React from 'react';
import '../../App.css';

const Column = ({
  children, styles: userStyles = null, handleOnClick, ...props
}) => (
        <div className={`div_table_col ${userStyles}`} {...props} onClick={handleOnClick}>
            {children}
        </div>
);

export default Column;
