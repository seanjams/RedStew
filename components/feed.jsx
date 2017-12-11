import React from 'react';

const style = {
  width: '200px',
  height: '200px',
  background: 'green',
  display: 'inline-block'
};

class Feed extends React.Component {
  render() {
    return (
      <div style={style}>
        <h1>Hello From Feed</h1>
      </div>
    );
  }
}

export default Feed;
