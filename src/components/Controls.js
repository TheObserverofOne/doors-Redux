import React from 'react';
import { connect } from 'react-redux';
import { open, close } from '../actions/openActions';
class Controls extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.handleOpen}>
          {this.props.isOpen ? 'Close' : 'Open'}
        </button>
      </div>
    );
  }
  handleOpen = () => {
    if (this.props.isOpen) {
      this.props.closeDoor();
    } else {
      this.props.openDoor();
    }
  };
}
const mapStateToProps = state => {
  return {
    // merged into props
    isOpen: state.isOpen,
  };
};

export default connect(mapStateToProps, { openDoor: open, closeDoor: close })(
  Controls
);
