import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../modules/counter'

const Home = props => (
  <Grid fluid>
  <Row>
    <h1>Home</h1>
    <p>Count: {props.count}</p>
  </Row>
  <Row>
    <Col xs={6} md={3}>
      <RaisedButton 
        label='Increment'
        onClick={props.increment}
        disabled={props.isIncrementing}
        primary={true}
        style={{
          width: '220px',
        }}
      />
    </Col>
    <Col xs={6} md={3}>
      <RaisedButton 
        label='Increment Async'
        onClick={props.incrementAsync} 
        disabled={props.isIncrementing}
        primary={true}
        style={{
          width: '220px',
        }}
      />
    </Col>
  </Row>
  <Row>
    <Col xs={6} md={3}>
      <RaisedButton 
        label='Decrement'
        onClick={props.decrement}
        disabled={props.isDecrementing}
        secondary={true}
        style={{
          width: '220px',
        }}
      />
    </Col>
    <Col xs={6} md={3}>
      <RaisedButton 
        label='Decrement Async'
        onClick={props.decrementAsync} 
        disabled={props.isDecrementing} 
        secondary={true}
        style={{
          width: '220px',
        }}
      />
    </Col>
  </Row>
  <Row>
    <Col xs={6} md={3}>  
      <FlatButton
        label='Go to about page via redux'
        onClick={() => props.changePage()}
        primary={true}
        style={{
          width: '100%'
        }}
      />
    </Col>
  </Row>
</Grid>
)

const mapStateToProps = state => ({
  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
