import React from 'react';

const style = {
  width: '100%',
  height: '100%',
  background: 'red',
  display: 'inline-block'
};

class Bank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
  }

  componentDidMount() {
    this.getPosts();
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

  renderPosts() {
    return this.state.options.map(option => {
      return (
        <div>
          { option.data.title }
        </div>
      )
    });
  }


  render() {
    return (
      <div style={style}>
        { this.renderPosts() }
      </div>
    );
  }
}

export default Bank;
