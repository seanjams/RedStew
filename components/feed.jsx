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

    // this.getNPages = this.getNPages.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.subreddits.length !== this.props.subreddits.length) {
      this.getPosts(nextProps.subreddits);
    }
  }

  getPosts(subreddits) {
    if (!subreddits || subreddits.length === 0) {
      subreddits = [{data: {url: 'r/news'}}];
    }
    let posts = [];
    subreddits.forEach((sub, i) => {
      const results = [];
      const url = `http://www.reddit.com/${sub.data.url}.json`;
      this.getNPages(url, 1, posts);
    });
  }
  //
  getNPages(url, n, posts, after) {
    if (n < 1) return null;
    let currPage = after ? `${url}?after=${after}` : url;
    // posts = posts || [];

    fetch(currPage).then(data => {
      data.json().then(thing => {
        if (thing.kind === 'Listing') {
          const pageResults = [];
          let after = thing.data.after;
          thing.data.children.forEach(child => {
            pageResults.push(child);
          });
          posts = posts.concat(pageResults);
          if (n === 1) {
            this.setState({posts});
          } else {
            this.getNPages(url, n-1, posts, after);
          }
        } else {
          console.log('not a listing');
        }
      });
    });
  }


  renderPosts() {
    return this.state.posts.map((post, i) => {
      return (
        <div key={`post-${i}`}>
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
