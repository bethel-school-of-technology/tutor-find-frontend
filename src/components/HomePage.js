import React, { Component } from 'react';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        { this.props.children }
        <h3> homepage</h3>

      </div>
    )
  }
}
