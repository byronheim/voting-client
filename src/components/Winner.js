import React, { PureComponent } from 'react';

class Winner extends PureComponent {
  render() {
    return (
      <div className="winner">
        Winner is {this.props.winner}!
      </div>
    )
  }
};

export default Winner;