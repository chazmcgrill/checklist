import React, {Component} from 'react';

class ChecklistForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="checklist-form">
        <input
          type="text"
          placeholder="new list item"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type="submit">+</button>
      </form>
    )
  }
}

export default ChecklistForm;
