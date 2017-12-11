import React from 'react';

const style = {
  width: '200px',
  height: '200px',
  background: 'red',
  display: 'block'
};

class Bank extends React.Component {
  render() {
    return (
      <div style={style}>
        <h1>Hello From Bank</h1>
      </div>
    );
  }
}

export default Bank;
