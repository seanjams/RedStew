import React from 'react';
import Bank from './bank';
import Subreddits from './subreddits';
import Feed from './feed';

// const mainStyle = {
//
// };

const style = {
  display: 'inline-block',
  width: '30%'
};


class Root extends React.Component {
  render() {
    return (
      <div>
        <div style={style}>
          <Bank />
          <Subreddits />
        </div>
        <Feed />
      </div>
    );
  }
};

export default Root

// class Root extends React.Component {
//   render() {
//     return (
//       <h1>Welcome You Bastard</h1>
//     );
//   }
// }

// export default Root;
