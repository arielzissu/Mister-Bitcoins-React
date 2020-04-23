import React, { Component } from "react";

export default class ContactFilter extends Component {
  state = {
    term: "",
  };

  constructor(props) {
    super(props);
    this.state = { ...props.filterBy };
  }

  onChangeHandler = (ev) => {
    const { value, name } = ev.target;
    this.setState({ [name]: value }, () => {
      this.props.onFilter({ ...this.state });
    });
  };
  render() {
    return (
      <section className="Contact-filter-container">
        <input
          type="text"
          placeholder="Contact Name"
          onChange={this.onChangeHandler}
          name="term"
          value={this.state.term}
        />
      </section>
    );
  }
}
