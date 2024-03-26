import React from 'react';

const Table = ({ children, styles: userStyles = null, ...props }) => (
        <div className={`div_table ${userStyles}`} {...props}>
            {children}
        </div>
);

export default Table;
