import React from 'react';

const style = {
  width: '100%',
  height: '100px',
  background: 'yellow',
  display: 'inline-block'
};

class Subreddits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subredditss: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    // const subredditss = [];
    // fetch('http://www.reddit.com/subreddits.json')
    // .then(data => {
    //   data.json().then(thing => {
    //     if (thing.kind === 'Listing') {
    //       thing.data.children.forEach(child => {
    //         subredditss.push(child);
    //       });
    //       this.setState({subredditss});
    //     } else {
    //       console.log('not a listing');
    //     }
    //   });
    // });
  }

  renderPosts() {
    return this.state.subredditss.map(subreddits => {
      return (
        <div>
          { subreddits.data.title }
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

export default Subreddits;
