import React from 'react';
import classes from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
  debugger;
  state = {
    statusField: false,
    status: this.props.status || '',
  };

  toggleStateField = () => {
    this.setState({
      statusField: !this.state.statusField,
    });
  };
  onEnterToggleStateField = e => {
    if (e.keyCode === 13) {
      this.toggleStateField();
      this.props.updateUserStatus(this.state.status);
    }
  };
  onChangeIputValue = e => {
    this.setState({
      status: e.target.value,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <div className={classes.statusWrapper}>
        {!this.state.statusField && (
          <div className={classes.status}>
            <span onDoubleClick={this.toggleStateField}>{this.props.status || 'Добавь статус'}</span>
          </div>
        )}
        {this.state.statusField && (
          <div className={classes.status}>
            <div className={classes.overlay}></div>
            <input
              onChange={this.onChangeIputValue}
              autoFocus={true}
              onBlur={this.toggleStateField}
              onKeyDown={this.onEnterToggleStateField}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
