import React from 'react';
import '../../App.css';

const GridItem = ({ children, styles: userStyles = null, ...props }) => (
        <div className={`grid-item ${userStyles}`} {...props}>
            {children}
        </div>
);

export default GridItem;
