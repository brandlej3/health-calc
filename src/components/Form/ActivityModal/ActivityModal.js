import React, { Component } from 'react';
import './ActivityModal.css';
import { Modal, Button } from 'react-bootstrap';

export class ActivityModal extends Component {
    render(){
        return (
            <Modal show={this.props.toggleActive} onHide={() => this.props.onMouseOut()} >
                <Modal.Header>
                    <Modal.Title>
                        {this.props.activeLvl}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Description</h4>
                    <p>
                        {this.props.coreContent}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=> this.props.onMouseOut()}>Close</Button>
                </Modal.Footer>
            </Modal >
        );
    }
}