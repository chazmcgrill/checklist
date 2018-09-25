import React from 'react';

const ChecklistItem = ({content, onToggle, onDelete}) => (
  <li>
    <span className="list-item" onClick={onToggle}>
      <div
        className="check-box"
        style={{background: content.completed ? 'black' : 'none'}}
      >
        <i className="fa fa-check" aria-hidden="true"></i>
      </div>
      <span style={{textDecoration: content.completed ? 'line-through' : 'none'}}>
        {content.content}
      </span>
    </span>
    <span className="delete-button" onClick={onDelete}>
      <i className="fa fa-trash-o" aria-hidden="true"></i>
    </span>
  </li>
);

export default ChecklistItem;
