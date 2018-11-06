import React, { Component } from 'react'
import axios from 'axios'
import { connect as reduxConnect } from 'react-redux'
import './App.css'
import {getCollection} from './actions/App'
import {Grid, Row, Col} from 'react-bootstrap'
import Moment from 'react-moment'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

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
    <Col md={6}>
      <div className="textContainer">
        <div>Created: <Moment format="MMM DD, YYYY">{tweets[key].created_at}</Moment></div>
        <div>{ReactHtmlParser(this.urlify(tweets[key].text))}</div>
      </div>
    </Col>
      
  ))

  urlify = text => text.replace(/(https?:\/\/[^\s]+)/g, '<a target="_blank" href="$1">$1</a>')


  render() {
    const {objects, response} = this.state 
    console.log(objects)
    return (
      <Grid className="App">
        <Row>
          <h1 style={{textAlign: 'center', color: '#1DA1F2'}}>TWITTER API</h1>
        </Row>
        <Row>
          {objects ? this.renderTweets(objects.tweets) : null}
        </Row>
      </Grid>
    )
  }
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(App)
