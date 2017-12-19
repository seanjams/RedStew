import React from 'react';

const style = {
  width: '100%',
  height: '100%',
  fontSize: '1.2em',
  background: 'yellow',
  display: 'inline-block'
};

class Subreddits extends React.Component {
  // constructor(props) {
    // super(props);
    // this.state = {
    //   subredditss: []
    // };
  // }

  // componentDidMount() {
    // this.getPosts();
  // }

  // getPosts() {
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
  // }

  handleClick(i) {
    const { options, subreddits } = this.props;
    const newSubs = subreddits.slice(0,i).concat(subreddits.slice(i+1));
    this.props.update('options', options.concat(subreddits[i]));
    this.props.update('subreddits', newSubs);
  }

  renderPosts() {
    return this.props.subreddits.map((subreddit, i) => {
      return (
        <div key={`opt-${i}`} onClick={() => this.handleClick(i)} >
          { subreddit.data.title }
        </div>
      )
    });
  }


  render() {
    return (
      <div style={style}>
        <h1 style={{fontSize: '1.5em'}}>Viewing Posts from:</h1>
        { this.renderPosts() }
      </div>
    );
  }
}

export default Subreddits;
