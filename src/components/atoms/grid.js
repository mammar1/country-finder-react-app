import React from 'react';
import '../../App.css';

const Grid = ({ children, styles: userStyles = null, ...props }) => (
        <div className={`grid-container ${userStyles}`} {...props}>
            {children}
        </div>
);

export default Grid;
