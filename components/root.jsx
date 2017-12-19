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
  constructor(props) {
    super(props);
    this.state = {
      subreddits: [],
      options: []
    };

    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  update(prop, val) {
    this.setState({[prop]: val});
  }

  getPosts() {
    const options = [];
    fetch('http://www.reddit.com/subreddits.json')
    .then(data => {
      data.json().then(thing => {
        if (thing.kind === 'Listing') {
          thing.data.children.forEach(child => {
            options.push(child);
          });
          this.setState({options});
        } else {
          console.log('not a listing');
        }
      });
    });
  }

  render() {
    return (
      <div>
        <div style={style}>
          <Subreddits options={this.state.options} subreddits={this.state.subreddits} update={this.update} />
          <Bank options={this.state.options} subreddits={this.state.subreddits} update={this.update} />
        </div>
        <Feed subreddits={this.state.subreddits} />
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
