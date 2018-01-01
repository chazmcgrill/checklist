import React from 'react';

const ChecklistItem = ({content, onToggle, onDelete}) => (
  <li>
    <span
      style={{textDecoration: content.completed ? 'line-through' : 'none'}}
      onClick={onToggle}
    >{content.content}</span>
    <span onClick={onDelete}>X</span>
  </li>
);

export default ChecklistItem;
