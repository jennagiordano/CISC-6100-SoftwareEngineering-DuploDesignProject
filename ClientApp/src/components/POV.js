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
      TiltRight: "matrix",
      TiltLeft: "matrix",
      showLookData: false,
      showMoveData: false,
      showGetOrientationData: false,
      showGetLocationData: false,
    }
    this.Look = this.Look.bind(this);
    this.MatrixMultiply = this.MatrixMultiply.bind(this);
    this.Move = this.Move.bind(this);
    this.Translate = this.Translate.bind(this);
    this.GetCurrentLocation = this.GetCurrentLocation.bind(this);
    this.GetCurrentOrientation = this.GetCurrentOrientation.bind(this)
  }

  handleLookClick = () => {
    var value = !this.state.showLookData
    this.setState({
      showLookData: value,
      showMoveData: false, 
      showGetLocationData:false,
      showGetOrientationData:false
    })
    this.Look("down")
  }


  handleMoveClick = () => {
    var value = !this.state.showMoveData
    this.setState({
      showMoveData: value,
      showLookData: false, 
      showGetLocationData:false,
      showGetOrientationData:false
    })
    this.Move("down")
  }


  handleGetCurrentLocation = () => {
    var value = !this.state.showGetLocationData
    this.setState({
      showGetLocationData: value,
      showMoveData: false, 
      showLookData:false,
      showGetOrientationData:false
    })
    this.GetCurrentLocation()
  }


  handleGetCurrentOrientation = () => {
    var value = !this.state.showGetOrientationData
    this.setState({
      showGetOrientationData: value,
      showMoveData: false, 
      showGetLocationData:false,
      showLookData:false
    })
    this.GetCurrentOrientation()
  }

  Look = (ViewDirection) => {
    console.log(`In the Look function, calling MatrixMultiply function and passing proper direction
      matrix based on the move the user makes. The result of this function call will be set to the Orientation matrix, direction = ${ViewDirection}`);

    switch (ViewDirection) {
      case ViewDirection = "up":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, ViewDirection);
        break;
      case ViewDirection = "down":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, ViewDirection);
        break;
      case ViewDirection = "tiltleft":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, ViewDirection);
        break;
      case ViewDirection = "tiltright":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, ViewDirection);
        break;
      case ViewDirection = "turnright":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, ViewDirection);
        break;
      case ViewDirection = "turnleft":
        this.state.orientation = this.MatrixMultiply(this.state.orientation, ViewDirection);
        break;
      default:
        console.log("User did not supply a known ViewDirection, look update failed.")
        break;
    }

  }

  MatrixMultiply(orientation, rotation) {
    try {
      console.log(`Based on the current state of the orientation matrix and the rotation matrix,
      calculate the new point of view of the user and set it to a temporary variable.`)
      var temp = orientation;

      console.log(`Call function provided by Team Design, and pass the view value to checkValidView(temp). 
      This function will return whether or not this view is. If this function returns true, assign temp to orientation
      and return orientation. Otherwise, fall into catch statement.`)
      return orientation;
    }
    catch{
      console.log(`In the MatrixMultiply catch statement, this means the view that was calculated was not valid. MatrixMultiply() will
      return un-updated orientation matrix`);
      return orientation;
    }
  }

  Move = (move) => {
    console.log("in move function");
    this.Translate("");

    return this.state.location;
  }

  Translate = (move) => {
    console.log("in translate function, called by move function.")
    return this.state.location;
  }

  GetCurrentLocation() {
    console.log("Returns current location to requestor.");
    return this.state.location;

  }

  GetCurrentOrientation() {
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
              onClick={this.handleLookClick}
            >
              Look()
            </Button>
            <Button
              style={{ marginRight: '2%' }}
              onClick={this.handleMoveClick}
            >
              Move()
            </Button>
            <Button
              style={{ marginRight: '2%' }}
              onClick={this.handleGetCurrentLocation}
            >
              GetCurrentLocation()
            </Button>
            <Button
              style={{ marginRight: '2%' }}
              onClick={this.handleGetCurrentOrientation}
            >
              GetOrientationLocation()
            </Button>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="look()">
              {this.state.showLookData ?
                <Form.Group >
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft:'10%', marginTop: "2%", width: "20%" }}>
                    Look(direction) is called and is passed the new direction the user wants to look
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft:'10%', marginTop: "2%", width: "20%" }}>
                    Based on user direction, Look(direction) calls MatrixMultiply(orientation, direction) and passes the orientation matrix
                    and a direction matrix (either up, down, turnRight, turnLeft, tiltLeft, tiltRight)
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft:'10%', marginTop: "2%", width: "20%" }}>
                    MatrixMultiply(orientation, direction) calculates the new orientation and saves it to a temporary variable.
                    This temporary value is sent to checkValidView(temp).
                  </Form.Row>
                  <Form.Row>
                    <div as={Col} style={{ border: "3px green solid", marginTop: "2%", width: "20%", marginRight:'2%' }}>
                      If checkValidView(temp) returns true (the new View is valid), assign the temporary value to the orientation matrix
                      and return the updated orientation matrix.
                    </div>
                    <div as={Col} style={{ border: "3px red solid", marginTop: "2%", width: "20%" }}>
                      If checkValidView(temp) returns false (the new View is not valid), the program will fall into MatrixMultiply's catch 
                      statement and return the un-updated orientation matrix to Look().
                    </div>
                  </Form.Row>
                  <Form.Row style={{ border: "3px black solid", marginTop: "2%", marginLeft:'10%', width: "20%" }}> 
                    Return to Look() function
                  </Form.Row>
                </Form.Group> : null}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="move()">
              {this.state.showMoveData ?
                <Form.Group >
                 move()
                </Form.Group> : null}
            </Form.Group>
          </Form.Row>


          <Form.Row>
            <Form.Group as={Col} controlId="getCurrentLocation()">
              {this.state.showGetLocationData ?
                <Form.Group >
                 getCurrentLocation()
                </Form.Group> : null}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="getCurrentOrientation()">
              {this.state.showGetOrientationData ?
                <Form.Group >
                 getCurrentOrientation()
                </Form.Group> : null}
            </Form.Group>
          </Form.Row>
        </Form>
      </div>

    );
  }
}


// to - do:
//add arrows
//complete diagrams from move(), getCurrentLocation(), getCurrentOrientation()
//clean up console logs
//email professor about what ive done
//email professor about testing
//add more usable functionality for up/down directions, pass correct matrices based on input 
//define orientation / location / tilt right left / turn up down etc as matrices