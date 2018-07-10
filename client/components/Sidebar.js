import React, { Component } from 'react';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      display: 'none',
    };
  }
  // w3Open() {
  // document.getElementById('mySidebar').style.display = 'block';
  // document.getElementById('myOverlay').style.display = 'block';
  // this.setState({ display: 'block' });
  // }
  // w3Close() {
  // document.getElementById('mySidebar').style.display = 'none';
  // document.getElementById('myOverlay').style.display = 'none';
  // this.setState({ display: 'none' });
  // }

  render() {
    return (
      <div className="w3-light-grey w3-content" style={{ maxWidth: '1600px' }}>
        <nav
          className="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center"
          style={{
            zIndex: 3,
            width: '300px',
            fontWeight: 'bold',
            display: this.state.display,
          }}
        />
        <br />
        <h3 className="w3-padding-64 w3-center">
          <b>
            SOME
            <br />
            NAME
          </b>
        </h3>
        <a
          // onClick={this.w3Close()}
          className="w3-bar-item w3-button w3-padding w3-hide-large"
        >
          CLOSE
        </a>
        <a
          href="#"
          // onClick={this.w3Close()}
          className="w3-bar-item w3-button"
        >
          PORTFOLIO
        </a>
        <a
          href="#about"
          // onClick={this.w3Close()}
          className="w3-bar-item w3-button"
        >
          ABOUT ME
        </a>
        <a
          href="#contact"
          // onClick={this.w3Close()}
          className="w3-bar-item w3-button"
        >
          CONTACT
        </a>
      </div>
    );
  }
}

export default Sidebar;
