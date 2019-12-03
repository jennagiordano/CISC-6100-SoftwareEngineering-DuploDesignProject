import React, { Component } from 'react';
import { Form, Button, Input, Col, Image } from 'react-bootstrap';

export class POV extends Component {
  static displayName = POV.name;
  constructor(props) {
    super(props);
    this.state = {
      orientation: "matrix",
      Location: "matrix", 
      // Rotation matrices for each of the possible 90 degree rotations possible
      // all private static int [,] 
      Right: "matrix", 
      Left: "matrix",
      Up: "matrix", 
      Down: "matrix",
      TiltRight:"matrix", 
      TiltLeft: "matrix", 
      showMoveData: true,
      moveData: "",

    }
    this.Look = this.Look.bind(this);
    this.MatrixMultiply = this.MatrixMultiply.bind(this);
    this.Move = this.Move.bind(this);
    this.Translate = this.Translate.bind(this);
    this.GetCurrentLocation = this.GetCurrentLocation.bind(this);
    this.GetCurrentOrientation = this.GetCurrentOrientation.bind(this)
  }

  Look = (direction) => {
    console.log(`In the Look function, calling MatrixMultiply function and passing proper direction
      matrix based on the move the user makes. The result of this function call will be set to the Orientation matrix, direction = ${direction}`);
    switch (direction) {
      case direction = "up":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, direction);
        break;
      case direction = "down":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, direction);
        break;
      case direction = "tiltleft":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, direction);
        break;
      case direction = "tiltright":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, direction);
        break;
      case direction = "turnright":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, direction);
        break;
      case direction = "turnleft":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, direction);
        break;
      default:
        console.log("in here");
        break;
    }

    return this.state.orientation;

  }

  MatrixMultiply(orientation, rotation) {
    console.log(`Based on the current state of the orientation matrix and the rotation matrix,
        calculate the new point of view of the user and return to look function, rotation = ${rotation}`)

        return orientation;
  }

  Move = (move) => {
    console.log("in move function");
    this.Translate("");

    return this.state.location;
  }

  Translate = (move) =>  {
    console.log("in translate function, called by move function.")
    return this.state.location;
  }

  GetCurrentLocation () {
    console.log("Returns current location to requestor.");
    return this.state.location;

  }

  GetCurrentOrientation () {
    console.log("Returns current orientation to requestor.");
    return this.state.orientation;

  }
  render() {
    return (
      <div>
        <h1>Duplo Design Project - POV Class</h1>
        <p>Clicking on each button will simulate the path each call follows through its Activity Diagram.</p>
        <Form>
          <Form.Row>
            <Button
              style={{ marginRight: '2%' }}
              onClick={this.Look("down")}
            >
              Look()
            </Button>
            <Button
              style={{ marginRight: '2%' }}
              onClick={this.Move("down")}
            >
              Move()
            </Button>
            <Button
              style={{ marginRight: '2%' }}
              onClick={this.GetCurrentLocation()}
            >
              GetCurrentLocation()
            </Button>
            <Button
              style={{ marginRight: '2%' }}
              onClick={this.GetCurrentOrientation()}
            >
              GetOrientationLocation()
            </Button>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="look()">
              { this.state.showMoveData ? <Form.Group as={Col} style={{border:"2px black solid", marginTop: "2%", width: "20%"}}>In the Look function, calling MatrixMultiply function and passing proper direction
      matrix based on the move the user makes. The result of this function call will be set to the Orientation matrix</Form.Group>: null }
            </Form.Group>
          </Form.Row>
        </Form>
      </div>

    );
  }
}
