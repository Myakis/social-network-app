import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  state = {
    statusField: false,
  };

  getInput() {
    this.state.statusField = true;
  }
  toggleStateField() {
    // this.state.statusField = !this.state.statusField;
    this.setState({
      statusField: !this.state.statusField,
    });
  }
  getTextBlock() {
    this.state.statusField = false;
  }

  render() {
    return (
      <div className={classes.statusWrapper}>
        {!this.state.statusField && (
          <div className={classes.status}>
            <span onDoubleClick={this.toggleStateField.bind(this)}>{this.props.status}</span>
          </div>
        )}
        {this.state.statusField && (
          <div className={classes.status}>
            <div className={classes.overlay}></div>
            <input
              autoFocus={true}
              onBlur={this.toggleStateField.bind(this)}
              onDoubleClick={this.toggleStateField.bind(this)}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
