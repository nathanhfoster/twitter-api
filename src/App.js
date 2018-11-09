import React, { Component } from 'react'
import axios from 'axios'
import { connect as reduxConnect } from 'react-redux'
import './App.css'
import {getCollectionEntry, getCollectionList,
        getCollectionShow, getFavoriteList,
        getHomeTimeline, getMentionTimeline,
        getStatusUpdate, getStatusUserTimeline} from './actions/App'
import {Grid, Row, Col, Tabs, Tab} from 'react-bootstrap'
import Moment from 'react-moment'
import ReactHtmlParser from 'react-html-parser'

const Axios = axios.create({
  withCredentials: true,
  baseURL: 'https://ga2pbkjmo5.execute-api.us-west-1.amazonaws.com/',
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

const mapStateToProps = ({ApiResponse}) => ({
  ApiResponse,
})

const mapDispatchToProps = {
  getCollectionEntry,
  getCollectionList,
  getCollectionShow,
  getFavoriteList,
  getHomeTimeline,
  getMentionTimeline,
  getStatusUpdate,
  getStatusUserTimeline
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
    this.props.getCollectionEntry()
    this.props.getCollectionList()
    this.props.getCollectionShow()
    this.props.getFavoriteList()
    this.props.getHomeTimeline()
    this.props.getMentionTimeline()
    this.props.getStatusUpdate({status: "TESTING "})
    this.props.getStatusUserTimeline()
  }

  componentWillReceiveProps(nextProps) {
    this.getState(nextProps)
  }

  getState = props => {
    const {CollectionEntry} = props.ApiResponse
    const {objects, response} = CollectionEntry ? CollectionEntry : {}
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

    renderHomeTimeline = tweets => Object.keys(tweets).map(key => (
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
    return (
      <Grid className="App">
        <Row>
          <h1 style={{textAlign: 'center', color: 'var(--twitterBlue)'}}>TWITTER API</h1>
        </Row>
        <Row>
        <Tabs defaultActiveKey={1} className="Tabs" animation={true}>
          <Tab eventKey={1} title="COLLECTION ENTRIES" className="fadeIn-2" unmountOnExit={true}>
            <Row>
              {objects ? this.renderTweets(objects.tweets) : null}
            </Row>
          </Tab>
          <Tab eventKey={2} title="COLLECTION LIST" className="fadeIn-2" unmountOnExit={true}>
            <div>{JSON.stringify(this.props.ApiResponse.CollectionList)}</div>
          </Tab>
          <Tab eventKey={3} title="COLLECTION SHOW" className="fadeIn-2" unmountOnExit={true}>
              <Col md={6}>
                  <div className="textContainer">
                      {JSON.stringify(this.props.ApiResponse.CollectionShow)}
                  </div>
              </Col>
          </Tab>
          <Tab eventKey={4} title="FAVORITE LIST" className="fadeIn-2" unmountOnExit={true}>
              {this.renderTweets(this.props.ApiResponse.FavoriteList)}
          </Tab>
          <Tab eventKey={5} title="HOME TIMELINE" className="fadeIn-2" unmountOnExit={true}>
              {this.renderTweets(this.props.ApiResponse.HomeTimeline)}
          </Tab>
          <Tab eventKey={6} title="MENTION TIMELINE" className="fadeIn-2" unmountOnExit={true}>
              {this.renderHomeTimeline(this.props.ApiResponse.MentionTimeline)}
          </Tab>
          <Tab eventKey={7} title="STATUS UPDATE" className="fadeIn-2" unmountOnExit={true}>
            <div>
              <form >
                <input type='text' style={{color: "#000"}} name='status' />
                <button style={{color:'#000'}} type='submit'>Submit</button>
              </form>
            </div>
          </Tab>
          <Tab eventKey={8} title="STATUS USER TIMELINE" className="fadeIn-2" unmountOnExit={true}>
              {this.renderTweets(this.props.ApiResponse.StatusUserTimeline)}
          </Tab>
        </Tabs>
        </Row>
      </Grid>
    )
  }
}

export default reduxConnect(mapStateToProps, mapDispatchToProps)(App)
