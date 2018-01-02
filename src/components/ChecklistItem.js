import React from 'react';

const ChecklistItem = ({content, onToggle, onDelete}) => (
  <li>
    <span onClick={onToggle}>
      <div style={{background: content.completed ? 'black' : 'none'}}></div>
      <span style={{textDecoration: content.completed ? 'line-through' : 'none'}}>
        {content.content}
      </span>
    </span>
    <span className="delete-button" onClick={onDelete}>&times;</span>
  </li>
);

export default ChecklistItem;
