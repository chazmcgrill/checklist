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

  handleSubmit() {
    this.props.addItem(this.state.text);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="new list item"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }
}

export default ChecklistForm;
