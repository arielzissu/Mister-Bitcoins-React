import React, { Component } from "react";
import moment from "moment";

export class MoveList extends Component {
  render() {
    const { contact } = this.props;
    const { moves } = this.props.user;

    ////////  Contact Details Page List: ///////
    if (contact) {
      var currMoves = moves.filter((move) => move.toId === contact._id);
      return (
        <sectoin className="move-list-container">
          <h2 className="move-list-title">Your Moves:</h2>
          <hr />
          <div className="move-list-main-container">
            {currMoves.map((move, index) => {
              return (
                <div className="move-list-main" key={index}>
                  <h3 className="move-list-at">
                    At:{" "}
                    <span>
                      {moment(move.at).format("MMM Do YYYY, h:mm:ss a")}
                    </span>
                  </h3>
                  <h3 className="move-list-amount">
                    Amount: <span>{move.amount} coins</span>
                  </h3>
                </div>
              );
            })}
          </div>
          <div>
            {!moves.length ? (
              <p className="move-list-title-p">You don't have moves...</p>
            ) : (
              ""
            )}
          </div>
          <hr />
        </sectoin>
      );
    }
    ////////////////////////////////////  End Details Page  /////////////////////////////////////////////

    //////////  Home Page List:  ////////
    var currMoves2 = moves;
    if (moves.length > 3) {
      currMoves2 = moves.slice(moves.length - 3, moves.length);
    }
    return (
      <div className="move-list-container">
        <h2 className="move-list-title">Your Last 3 Moves:</h2>
        <hr />
        <div className="move-list-main-container">
          {currMoves2.map((move, index) => {
            return (
              <div className="move-list-main" key={index}>
                <h3 className="move-list-to">
                  To: <span>{move.to}</span>
                </h3>
                <h3 className="move-list-at">
                  At:{" "}
                  <span>
                    {moment(move.at).format("MMM Do YYYY, h:mm:ss a")}
                  </span>
                </h3>
                <h3 className="move-list-amount">
                  Amount: <span>{move.amount} coins</span>
                </h3>
              </div>
            );
          })}
        </div>
        <div>
          {!moves.length ? (
            <p className="move-list-title-p">You don't have moves...</p>
          ) : (
            ""
          )}
        </div>
        <hr />
      </div>
    );
    /////////////////////////////////////////  End Home Page  ////////////////////////////////////////////
  }
}
