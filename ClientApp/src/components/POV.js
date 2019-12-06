import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css';

export class POV extends Component {
  static displayName = POV.name;
  constructor(props) {
    super(props);
    this.state = {
      orientation: [[,], [,], [,]],
      Location: [,],
      // Rotation matrices for each of the possible 90 degree rotations possible
      // all private static int [,] 
      TurnRight: [,],
      TurnLeft: [,],
      Up: [,],
      Down: [,],
      TiltRight: [,],
      TiltLeft: [,],
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
    console.log("===================================================================")
    console.log("-----------------------LOOK() FUNCTION CALL-----------------------")
    var value = !this.state.showLookData
    this.setState({
      showLookData: value,
      showMoveData: false,
      showGetLocationData: false,
      showGetOrientationData: false
    })
    this.Look("down")
  }

  handleMoveClick = () => {
    console.log("===================================================================")
    console.log("-----------------------MOVE() FUNCTION CALL-----------------------")
    var value = !this.state.showMoveData
    this.setState({
      showMoveData: value,
      showLookData: false,
      showGetLocationData: false,
      showGetOrientationData: false
    })
    this.Move("Forward")
  }


  handleGetCurrentLocation = () => {
    console.log("===================================================================")
    console.log("----------------GETCURRENTLOCATION() FUNCTION CALL----------------")
    var value = !this.state.showGetLocationData
    this.setState({
      showGetLocationData: value,
      showMoveData: false,
      showLookData: false,
      showGetOrientationData: false
    })
    this.GetCurrentLocation()
  }


  handleGetCurrentOrientation = () => {
    console.log("===================================================================")
    console.log("----------------GETCURRENTORIENTATION() FUNCTION CALL----------------")
    var value = !this.state.showGetOrientationData
    this.setState({
      showGetOrientationData: value,
      showMoveData: false,
      showGetLocationData: false,
      showLookData: false
    })
    this.GetCurrentOrientation()
  }

  Look = (ViewDirection) => {
    console.log(`In the Look function, calling MatrixMultiply function and passing proper direction
      matrix based on the move the user makes. The result of this function call will be set to the Orientation matrix. 
      The current ViewDirection = ${ViewDirection}`);

    switch (ViewDirection) {
      case ViewDirection = "up":
        console.log("In the case statement, user wants to move up, calling Matrix Multiply and passing Up matrix");
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.Up);
        break;
      case ViewDirection = "down":
        console.log("In the case statement, user wants to move down, calling Matrix Multiply and passing Down matrix");
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.Down);
        break;
      case ViewDirection = "tiltleft":
        console.log("In the case statement, user wants tilt left, calling Matrix Multiply and passing TiltLeft matrix");
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.TiltRight);
        break;
      case ViewDirection = "tiltright":
        console.log("In the case statement, user wants tilt right, calling Matrix Multiply and passing TiltRight matrix");
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.TiltLeft);
        break;
      case ViewDirection = "turnleft":
        console.log("In the case statement, user wants turn left, calling Matrix Multiply and passing TurnLeft matrix");
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.TurnLeft);
        break;
      case ViewDirection = "turnright":
        console.log("In the case statement, user wants turn right, calling Matrix Multiply and passing TurnRight matrix");
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.TurnRight);
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
      This function will return whether or not this view is valid. If this function returns true, assign temp to orientation
      and return orientation. Otherwise, fall into catch statement.`)
      return orientation;
    }
    catch{
      console.log(`In the MatrixMultiply catch statement, this means the view that was calculated was not valid. MatrixMultiply() will
      return un-updated orientation matrix`);
      return orientation;
    }
  }

  Move = (MoveDirection) => {
    console.log(`In the Move function, calling Translate function and passing proper MoveDirection
    matrix based on the move the user makes. The result of this function call will be set to the Location matrix. 
    The current MoveDirection = ${MoveDirection}`);

    if (MoveDirection == "Forward") {
      console.log("In the if statement, user wants move forward, calling Translate() and passing 0 as move value");
      this.Translate(this.state.orientation, this.state.location, 0);
    } else if (MoveDirection == "Backward") {
      console.log("In the if statement, user wants move backward, calling Translate() and passing 1 as move value");
      this.Translate(this.state.orientation, this.state.location, 1);
    } else {
      console.log("User did not supply a known MoveDirection, look update failed.")
      return ("User did not supply a known MoveDirection, look update failed.")
    }

  }

  Translate = (orientation, location, direction) => {
    console.log("In Translate() function. This function is called by move function.")

    try {
      console.log(`Based on the current state of the location and orientation matrices and the 
      value of direction, calculate the new position of the user and set it to a temporary variable.`)
      //perform calculations
      var temp = location;
      console.log(`Call function provided by Team Design, and pass the location value to checkValidMove(temp). 
      This function will return whether or not this move is valid. If this function returns true, assign temp to location
      and return location. Otherwise, fall into catch statement.`)
      return location;
    }
    catch{
      console.log(`In the Translate() catch statement, this means the move that was calculated was not valid. Translate() will
      return un-updated location matrix`);
      return location;
    }


  }

  GetCurrentLocation() {
    console.log("In GetCurrentLocation() function. This function returns current location to requestor.");
    return this.state.location;

  }

  GetCurrentOrientation() {
    console.log("In GetCurrentOrientation() function. This function returns current orientation to requestor.");
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
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    Look(direction) is called and is passed the new direction the user wants to look
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    Based on user direction, Look(direction) calls MatrixMultiply(orientation, direction) and passes the orientation matrix
                    and a direction matrix (either up, down, turnRight, turnLeft, tiltLeft, tiltRight)
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    MatrixMultiply(orientation, direction) calculates the new orientation and saves it to a temporary variable.
                    This temporary value is sent to checkValidView(temp).
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row>
                    <div as={Col} style={{ border: "3px green solid", marginTop: "2%", width: "20%", marginRight: '2%' }}>
                      If checkValidView(temp) returns true (the new View is valid), assign the temporary value to the orientation matrix
                      and return the updated orientation matrix.
                    </div>
                    <div as={Col} style={{ border: "3px red solid", marginTop: "2%", width: "20%" }}>
                      If checkValidView(temp) returns false (the new View is not valid), the program will fall into MatrixMultiply's catch
                      statement and return the un-updated orientation matrix to Look().
                    </div>
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row style={{ border: "3px black solid", marginTop: "2%", marginLeft: '10%', width: "20%" }}>
                    Return to Look() function
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    Look() function call finished.
                  </Form.Row>
                </Form.Group> : null}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="move()">
              {this.state.showMoveData ?
                <Form.Group >
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    Move(direction) is called and is passed the new direction the user wants to move.
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "23%" }}>
                    Based on user direction, Translate(location, orientation, direction) calls Translate(orientation, location, direction)
                    and passes the orientation matrix, locatoin matrix, and direction value (either 0 for Forward or 1 for Backward).
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    Translate(orientation, location, direction) calculates the new location and saves it to a temporary variable.
                    This temporary value is sent to checkValidMove(temp).
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row>
                    <div as={Col} style={{ border: "3px green solid", marginTop: "2%", width: "20%", marginRight: '1.7%' }}>
                      If checkValidOrientation(temp) returns true (the new Move is valid), assign the temporary value to the location matrix
                      and return the updated location matrix.
                    </div>
                    <div as={Col} style={{ border: "3px red solid", marginTop: "2%", width: "20%" }}>
                      If checkValidOrientation(temp) returns false (the new Move is not valid), the program will fall into Translate's catch
                      statement and return the un-updated location matrix to Move().
                    </div>
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row style={{ border: "3px black solid", marginTop: "2%", marginLeft: '10%', width: "20%" }}>
                    Return to Move() function
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    Move() function call finished.
                  </Form.Row>
                </Form.Group> : null}
            </Form.Group>
          </Form.Row>


          <Form.Row>
            <Form.Group as={Col} controlId="getCurrentLocation()">
              {this.state.showGetLocationData ?
                <Form.Group >
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    GetCurrentLocation() is called.
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    GetCurrentLocation() accesses private variable location matrix.
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    GetCurrentLocation() returns value of location matrix.
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    GetCurrentLocation() function call finished.
                  </Form.Row>
                </Form.Group> : null}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="getCurrentOrientation()">
              {this.state.showGetOrientationData ?
                <Form.Group >
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    GetCurrentOrientation() is called.
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    GetCurrentOrientation() accesses private variable orientation matrix.
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    GetCurrentOrientation() returns value of orientation matrix.
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    GetCurrentOrientation() function call finished.
                  </Form.Row>
                </Form.Group> : null}
            </Form.Group>
          </Form.Row>
        </Form>
      </div>

    );
  }
}

// to - do:
//fix arrow css
// add in temp creation and error handling logic to move() and look() diagrams
//finish portfolio - make activity diagrams from  move() look() getCurrentOrientation() getCurrentLocation()
//create unit test proposal for POV class / update storyboards / add POV class code / put all into 
//one powerpoint / look at old portfolio professor sent us - add items i dont not have to my portfolio