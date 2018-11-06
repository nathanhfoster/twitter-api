import React, { Component } from 'react'
import axios from 'axios'
import { connect as reduxConnect } from 'react-redux'
import './App.css'
import {getCollection} from './actions/App'
import {Grid, Row, Col} from 'react-bootstrap'

const Axios = axios.create({
  withCredentials: true,
  baseURL: 'https://ga2pbkjmo5.execute-api.us-west-1.amazonaws.com/',
  timeout: 10000,
  "async": true,
  "crossDomain": true,
  headers: {
    //'Access-Control-Allow-Headers': '*', 
    //'Access-Control-Allow-Origin': '*',
    'id': 'custom-539487832448843776',
    'Cache-Control': 'no-cache',
    'Content-type': 'application/json',
    'Accept': 'application/json'
  },
})

const mapStateToProps = ({ApiResponse}) => ({
  ApiResponse,
})

const mapDispatchToProps = {
  getCollection
}


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
    this.props.getCollection()
  }


  componentWillReceiveProps(nextProps) {
    this.getState(nextProps)
  }

  getState = props => {
    const {ApiResponse} = props
    this.setState({ApiResponse})
  }

  componentWillUnmount() {
  }

  renderTweets = tweets => Object.keys(tweets).map(key => (
    console.log(tweets[key]),
    <Col className="textContainer">
      {tweets[key].text}
    </Col>
  ))

  render() {
    const {Collection} = this.state.ApiResponse
    const {objects, response} = Collection.objects ? Collection : objects: {tweets: {}}
    console.log(objects.tweets)
    //const {tweets, users, timelines} = objects
    //const {timeline, timeline_id, position} = response
    return (
      <Grid className="App">
        <Row>
          <Col>
            TWITTER API
          </Col>
          {this.renderTweets(objects.tweets)}
        </Row>
      </Grid>
    )
  }
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(App)
