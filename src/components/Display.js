import React from 'react';
import { connect } from 'react-redux';

class Display extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.isOpen ? 'Open' : 'Closed'}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // this is the whole application state === store.
  return {
    // merged into the props
    isOpen: state.isOpen,
  };
}

// const connectedContainer = connect(mapStateToProps);
// export default connectedContainer(Display);

export default connect(mapStateToProps)(Display);
