import React from 'react';
import '../../App.css';

const Row = ({ children, styles: userStyles = null, ...props }) => (
        <div className={`div_table_row ${userStyles}`} {...props}>
            {children}
        </div>
);

export default Row;
