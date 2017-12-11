import React from 'react';
import Bank from './bank';
import Subreddits from './subreddits';
import Feed from './feed';

const mainStyle = {
  
};

const bankStyle = {

};


export const Root = () => {
  return (
    <div style={mainStyle}>
      <div style={bankStyle}>
        <Bank />
        <Subreddits />
      </div>
      <Feed />
    </div>
  );
};

// class Root extends React.Component {
//   render() {
//     return (
//       <h1>Welcome You Bastard</h1>
//     );
//   }
// }

// export default Root;
