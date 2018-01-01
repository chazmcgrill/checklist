import React, {Component} from 'react';

class ChecklistForm extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="new list item"/>
        <button>Add</button>
      </div>
    )
  }
}

export default ChecklistForm;
