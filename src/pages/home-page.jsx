import React, { Component } from "react";
import { connect } from "react-redux";

import { loadUser } from "../store/actions/UserActions";
import bitcoinsService from "../services/bitcoins.service";

import { ReactComponent as CoinImg } from "../assets/svg/coin.svg";
import { ReactComponent as BitcoinsImg } from "../assets/svg/bitcoin.svg";
import { MoveList } from "../cmps/move-list";

export class HomePage extends Component {
  state = {
    BTC: 0,
  };

  componentDidMount() {
    this.loaduser();
  }

  loaduser = async () => {
    this.props.loadUser();
    const BTC = await bitcoinsService.getRateBTC(this.props.loggedinUser.coins);
    this.setState({ BTC });
  };

  render() {
    const user = this.props.loggedinUser;
    const { BTC } = this.state;
    if (!user) return false;
    return (
      <section className="home-page-container">
        <h1 className="home-page-title">Mister Bitcoins</h1>
        <div className="home-page-name">
          {user ? `Hello ${user.name}!` : "loading..."}
        </div>
        <div className="home-page-main-imgs">
          {user ? (
            <div className="home-page-coins">
              <CoinImg className="img1" title="Coin" />
              <span>Coins:</span>
              {user.coins}$
            </div>
          ) : (
            "loading..."
          )}
          {BTC ? (
            <div className="home-page-BTC">
              <BitcoinsImg className="img1" title="Bitcoins" />
              <span>BTC:</span>
              {BTC}
            </div>
          ) : (
            "loading..."
          )}
        </div>
        <MoveList user={user} />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedinUser: state.user.loggedinUser,
});

const mapDispatchToProps = {
  loadUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
