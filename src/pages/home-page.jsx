import React, { Component } from "react";
import userService from "../services/user.service";
import bitcoinsService from "../services/bitcoins.service";

export default class HomePage extends Component {
  state = {
    user: null,
    BTC: 0,
  };

  async componentDidMount() {
    this.loaduser();
  }

  loaduser = async () => {
    const user = await userService.getUser();
    this.setState({ user });
    const BTC = await bitcoinsService.getRateBTC(this.state.user.coins);
    this.setState({ BTC });
  };

  render() {
    const { user, BTC } = this.state;
    return (
      <section className="home-page-container">
        <h1 className="home-page-title">Mister Bitcoins</h1>
        <div className="home-page-name">
          {user ? `Hello ${user.name}!` : "loading..."}
        </div>
        <div>
          {user ? (
            <div className="home-page-coins">
              <img src="./assets/svg/coin.svg" alt="Coin" />
              <span>Coins:</span>
              {user.coins}$
            </div>
          ) : (
            "loading..."
          )}
        </div>
        <div>
          {BTC ? (
            <div className="home-page-BTC">
              <img src="./assets/svg/bitcoin.svg" alt="Coin" />
              <span>BTC:</span>
              {BTC}
            </div>
          ) : (
            "loading..."
          )}
        </div>
      </section>
    );
  }
}
