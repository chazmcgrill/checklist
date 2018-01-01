import React, {Component} from 'react';
import ChecklistForm from './ChecklistForm';
import ChecklistItem from './ChecklistItem';

let nextId = 2;

class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 0, content: "clean house", completed: false},
        {id: 1, content: "cook dinner", completed: true},
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

  render() {
    const list = this.state.list.map(item => (
      <ChecklistItem onToggle={this.toggleItem.bind(this, item.id)} content={item} key={item.id}/>
    ));
    return (
      <div>
        <h1>Checklist</h1>
        <ChecklistForm addItem={this.addListItem}/>
        <ul>
          {list}
        </ul>
      </div>

    )
  }
}

export default Checklist;
