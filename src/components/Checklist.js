import React, {Component} from 'react';
import ChecklistForm from './ChecklistForm'; 
import ChecklistItem from './ChecklistItem';

class Checklist extends Component {
  render() {
    return (
      <div>
        <h1>Checklist</h1>
        <ChecklistForm />
        <ChecklistItem />
      </div>

    )
  }
}

export default Checklist;
