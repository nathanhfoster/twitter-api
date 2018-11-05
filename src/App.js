import React, { Component } from 'react'
import axios from 'axios'
import Twitter from 'twitter'
import './App.css'

const Axios = axios.create({
  baseURL: 'https://ga2pbkjmo5.execute-api.us-west-1.amazonaws.com/hw2/',
  timeout: 10000,
  "async": true,
  "crossDomain": true,
  headers: {
    'id': 'custom-539487832448843776',
    'Cache-Control': 'no-cache',
    'Content-type': 'application/json',
    'Accept': 'application/json'
  },
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { 
    }
  }

  
  componentWillMount() {
    this.getState(this.props)
  }

  componentDidMount() {
    Axios.get('collectionentry')
    .then(res => console.log(res))
    .catch(err => console.log(err))

    // client.post('statuses/update', {status: 'I Love Twitter'})
    // .then(function (tweet) {
    //   console.log(tweet);
    // })
    // .catch(function (error) {
    //   throw error;
    // })
  }


  componentWillReceiveProps(nextProps) {
    this.getState(nextProps)
  }

  getState = props => {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="App">
      TWITTER API
      </div>
    )
  }
}

export default App;
