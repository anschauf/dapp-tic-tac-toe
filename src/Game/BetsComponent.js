import React, {Component} from 'react';
import Bets from './Bets';
import BetForm from './BetForm';

class BetsComponent extends Component {
  constructor() {
    super();
  }

  render(props) {
    return (
      <div>
        <Bets
          games={this.props.games}
          gamesLoading={this.props.gamesLoading}
          web3={this.props.web3}
          contract={this.props.contract}
          account={this.props.account}
          maxHeight={this.props.maxHeight}
        />
        <BetForm
          web3={this.props.web3}
          contract={this.props.contract}
          account={this.props.account}
          games={this.props.games}
          gamesLoading={this.props.gamesLoading}
        />
      </div>
    );
  }
}
export default BetsComponent;