import React, { Component } from 'react';
import './Header.css';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
export class Header extends Component {
    render() {
        return (
            <Grid bsClass="formgrid">
                <Row>
                    <Col xs={12} md={12}>
                        <Jumbotron bsClass="jumbotron">
                            <h1 className="header-text">Calorie Calculator</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <h2 className="subheader-text">Calculator to see how much you should eat everyday</h2>
                        <p className="sub-subheader-text">Consult a doctor before making any extreme changes</p>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Header;