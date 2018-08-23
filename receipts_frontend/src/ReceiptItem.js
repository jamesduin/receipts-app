import React from 'react';
import './ReceiptItem.css';
const dateformat = require('dateformat');

const ReceiptItem = ({name, value, completed, created_date, onDelete, onToggle}) => (

    <li className="task">
     <span
       style={{
           textDecoration: completed? 'line-through': 'none'
       }}
       onClick={onToggle}
      >
       {name + " $" + value.toFixed(2) +"    " +  dateformat( new Date(created_date), 'm/dd/yy h:MM:ss')}
      </span>

  
      <span className="span-delete" onClick={onDelete}> DELETE </span>
    </li>
);

export default ReceiptItem;
    