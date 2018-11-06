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

  static defaultProps = {
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
    const {Collection} = props.ApiResponse
    const {objects, response} = Collection ? Collection : {}
    this.setState({objects, response})
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
    const {objects, response} = this.state 
    console.log(objects)
    return (
      <Grid className="App">
        <Row>
          <Col>
            TWITTER API
          </Col>
          {objects ? this.renderTweets(objects.tweets) : null}
        </Row>
      </Grid>
    )
  }
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(App)
