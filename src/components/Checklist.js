import React, {Component} from 'react';
import ChecklistForm from './ChecklistForm';
import ChecklistItem from './ChecklistItem';

let nextId = 3;

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 0, content: "fix car", completed: false},
        {id: 1, content: "exercise", completed: true},
        {id: 2, content: "pay bills", completed: false}
      ]
    }
    this.addListItem = this.addListItem.bind(this);
  }

  toggleItem(id) {
    const list = this.state.list.map(item => (
      item.id === id ? {...item, completed: !item.completed} : item
    ));
    this.setState({list});
  }

  addListItem(text) {
    const newItem = {id: nextId, content: text, completed: false};
    nextId++;
    this.setState({list: [...this.state.list, newItem]});
  }

  deleteItem(id) {
    const list = this.state.list.filter(item => item.id !== id);
    this.setState({list});
  }

  render() {
    const list = this.state.list.map(item => (
      <ChecklistItem
        onToggle={this.toggleItem.bind(this, item.id)}
        onDelete={this.deleteItem.bind(this, item.id)}
        content={item}
        key={item.id}
      />
    ));
    return (
      <div className="container">
        <h2>checklist</h2>
        <ChecklistForm addItem={this.addListItem}/>
        <ul>
          {list}
        </ul>
      </div>

    )
  }
}

export default Checklist;
