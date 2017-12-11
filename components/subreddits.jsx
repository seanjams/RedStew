import React from 'react';

const style = {
  width: '200px',
  height: '200px',
  background: 'yellow',
  display: 'block'
};

class Subreddits extends React.Component {
  render() {
    return (
      <div style={style}>
        <h1>Hello From Subreddits</h1>
      </div>
    );
  }
}

export default Subreddits;
