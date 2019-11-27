import React, { Component } from 'react';
// import {POV} from '../../../Controllers/POV';
import { Form, Button, Input, Col, Image } from 'react-bootstrap';
import image from './img/getOrientation1.png';
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Duplo Design Project - POV Class</h1>
        <p>Clicking on each button will simulate the path each call follows through its Activity Diagram.</p>
        <Form>
          <Form.Row>
            <Button style={{marginRight:'2%'}}>
              Look()
          </Button>
          <Button style={{marginRight:'2%'}}>
            Move()
          </Button>
          <Button style={{marginRight:'2%'}}>
            GetCurrentLocation()
          </Button>
          <Button style={{marginRight:'2%'}}> 
            GetCurrentLocation()
          </Button>
          </Form.Row>
        </Form>


        <Form.Group> 
          <Form.Row>
            <Image src="/Users/jennagiordano/Desktop/Grad School - S1/Software Engineering/final_project/DuploDesign/ClientApp/src/components/img/getOrientation3.png" responsive />
          </Form.Row> 
          <Form.Row>
            <img></img>
          </Form.Row>
          <Form.Row>
            <img></img>
          </Form.Row>
          <Form.Row>
            <img></img>
          </Form.Row>
        </Form.Group> 
      </div>

    );
  }
}
