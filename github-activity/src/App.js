import React, {Component} from 'react';

import {datetime} from 'luxon';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

 getDate(timestamp) {
    let date = new Date(timestamp);
    let month = date.toLocaleString('en-US', { month: "long" });
    let year = date.toLocaleString('en-US', { month: "long" });
  }

  async componentDidMount() {
    let response = await axios.get("https://api.github.com/users/ramonaspence/events")
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i + 1] != null) {
        response.data[i]['next_node'] = response.data[i + 1]
      }
      let date = new Date(response.data[i]['created_at'])
      let month = date.getMonth()
      if (this.state[month] != null) {
        let state = {...this.state} // state = shallow copy of this.state[3]
        state[month].push(response.data[i]) // adds new event to shallow copy of this.state[3]
        this.setState(state)
      }
      else {
        let newState = {[month]: []}
        newState[month].push(response.data[i])
        this.setState(newState)
      }
    }
  }

/*
To format github activity data:

divide the object into lists according to the events' dates, so that each list contains the events from a single week.
For each week, group the PushEvents together and the PullRequestReviews together.
PushEvents can also list the repositories that were committed to and how many commits were made to each.
PullRequestEvents can list the Pull Request itself, plus the amount of comments(?) that the PR received.
*/

  render() {

    return(
      <div>
        {/* <span></span>

        {this.state.events.map((event, i) => {
          console.log('fired');
          return (
            <div>
              
            </div>
          )
        })} */}

      </div>
    )
  }
}
export default App;