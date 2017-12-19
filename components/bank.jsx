import React from 'react';

const style = {
  width: '100%',
  height: '100%',
  fontSize: '1.2em',
  background: 'red',
  display: 'inline-block'
};

class Bank extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
    // this.getPosts();
  // }

  getPosts() {
    const options = [];
    fetch('http://www.reddit.com/subreddits.json')
    .then(data => {
      data.json().then(thing => {
        if (thing.kind === 'Listing') {

          thing.data.children.forEach(child => {
            options.push(child);
          });
          this.props.update('options', options);
        } else {
          console.log('not a listing');
        }
      });
    });
  }

  handleClick(i) {
    const { options, subreddits } = this.props;
    const newOpts = options.slice(0,i).concat(options.slice(i+1));
    this.props.update('subreddits', subreddits.concat(options[i]));
    this.props.update('options', newOpts);
  }

  renderPosts() {
    return this.props.options.map((option, i) => {
      return (
        <div key={`opt-${i}`} onClick={() => this.handleClick(i)} >
          { option.data.title }
        </div>
      )
    });
  }


  render() {
    return (
      <div style={style}>
        <h1 style={{fontSize: '1.5em'}}>Discover:</h1>
        { this.renderPosts() }
      </div>
    );
  }
}

export default Bank;
