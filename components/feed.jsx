import React from 'react';

const style = {
  width: '70%',
  height: '100%',
  background: 'green',
  display: 'inline-block'
};

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    const posts = [];
    fetch('http://www.reddit.com/r/news.json')
    .then(data => {
      data.json().then(thing => {
        if (thing.kind === 'Listing') {
          thing.data.children.forEach(child => {
            posts.push(child);
          });
          this.setState({posts});
        } else {
          console.log('not a listing');
        }
      });
    });
  }

  renderPosts() {
    return this.state.posts.map(post => {
      return (
        <div>
          { post.data.title }
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

export default Feed;
