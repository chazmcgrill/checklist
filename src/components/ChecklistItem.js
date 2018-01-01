import React from 'react';

const ChecklistItem = ({content, onToggle}) => (
  <li
    style={{textDecoration: content.completed ? 'line-through' : 'none'}}
    onClick={onToggle}
  >{content.content}</li>
);

export default ChecklistItem;
