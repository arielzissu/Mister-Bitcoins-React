import React, { Component } from "react";

import { addMove } from "../store/actions/UserActions";
import { connect } from "react-redux";

export class TransferFund extends Component {
  state = {
    amount: null,
  };

  changeHandle = (ev) => {
    this.setState({ amount: ev.target.value });
  };

  onTransfer = () => {
    this.props.addMove(this.props.contact, this.state.amount);
    this.setState({ amount: "" });
  };

  render() {
    const { contact } = this.props;
    return (
      <section className="transfer-fund-container">
        <h2 className="transfer-fund-title">
          Transfer coins to <span>{contact.name}:</span>
        </h2>
        <div className="transfer-fund-main">
          <h3 className="transfer-amount">Amount:</h3>
          <input
            className="transfer-fund-input"
            type="number"
            placeholder="(Number)"
            value={this.state.amount}
            onChange={this.changeHandle}
          />
          <div onClick={this.onTransfer} className="transfer-fund-btn">
            Transfer
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedinUser: state.user.loggedinUser,
});

const mapDispatchToProps = {
  addMove,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransferFund);
