import React, {Component} from 'react';

import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        'pushEvents': [],
        'pullRequestReviewEvents': [],
        'pullRequestEvents': [],
        'issueCommentEvents': [],
        'createEvents': [],
        'deleteEvents': [],
    }
  }

  async componentDidMount() {
    let response = await axios.get('https://api.github.com/users/ramonaspence/events')
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i]['type'] === 'PushEvent') {
        let pushEvents = [...this.state['pushEvents']];
        pushEvents.push(response.data[i]);
        this.setState({pushEvents: pushEvents});
        }
      else if (response.data[i]['type'] === 'PullRequestReviewEvent' || response.data[i]['type'] ===  'PullRequestsReviewCommentEvent') {
        let pullRequestReviewEvents = [...this.state['pullRequestReviewEvents']];
        pullRequestReviewEvents.push(response.data[i]);
        this.setState({pullRequestReviewEvents: pullRequestReviewEvents})
        }
      else if (response.data[i]['type'] === 'PullRequestEvent') {
        let pullRequestEvents = [...this.state['pullRequestEvents']];
        pullRequestEvents.push(response.data[i]);
        this.setState({pullRequestEvents: pullRequestEvents})
      }
      else if (response.data[i]['type'] === 'IssueCommentEvent') {
        let issueCommentEvents = [...this.state['issueCommentEvents']];
        issueCommentEvents.push(response.data[i]);
        this.setState({issueCommentEvents: issueCommentEvents})
      }
      else if (response.data[i]['type'] === 'CreateEvent') {
        let createEvents = [...this.state['createEvents']];
        createEvents.push(response.data[i]);
        this.setState({createEvents: createEvents})
      }
      else if (response.data[i]['type'] === 'DeleteEvent') {
        let deleteEvents = [...this.state['deleteEvents']];
        deleteEvents.push(response.data[i]);
        this.setState({deleteEvents: deleteEvents})
      }
    }
    console.log('state', this.state);
  }

  render() {
    return(
      <h1>
        Hello, World!
      </h1>
    )
  }
}

export default App;
