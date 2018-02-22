import React, { Component } from 'react';
import './App.css';
import { Button, Grid, Row, Col, Jumbotron } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid bsClass="grid-body">
        <Row>
          <Col xs={12} md={12}>
            <Jumbotron bsClass="jumbotron">
              <h1 className="header-text">Calorie Calculator</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
                <h3 className="gender-group">Gender</h3>
                <div className="gender-group">
                  <div id="male"></div>
                  <div id="female"></div>
                </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h3 className="input-labels">Weight</h3>
            <input type="number"></input>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h3 className="input-labels">Height</h3>
            <input type="number"></input>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h3 className="input-labels">Age</h3>
            <input type="number"></input>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h4>Activity Level</h4>
              <div className="activity-grid" id="one">1</div>
              <div className="activity-grid" id="two">2</div>
              <div className="activity-grid" id="three">3</div>
              <div className="activity-grid" id="four">4</div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Button bsStyle="primary">Calculate !</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
