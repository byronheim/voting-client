import React, { PureComponent } from 'react';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends PureComponent {
  render() {
    return(
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />}
      </div>
    );
  }
};

export default Voting;
