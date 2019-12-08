import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

//create class called POV
export class POV extends Component {
  //define display name
  static displayName = POV.name;

  //initialize constructor
  constructor(props) {
    super(props);

    //initalize class members
    this.state = {
      //public members
      orientation: [[,], [,], [,]],
      Location: [,],
      //private members
      // Rotation matrices for each of the possible 90 degree rotations possible
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

    //define class methods
    //public methods
    this.Look = this.Look.bind(this);
    this.Move = this.Move.bind(this);
    this.GetCurrentLocation = this.GetCurrentLocation.bind(this);
    this.GetCurrentOrientation = this.GetCurrentOrientation.bind(this)

    //private methods
    this.MatrixMultiply = this.MatrixMultiply.bind(this);
    this.Translate = this.Translate.bind(this);

  }

  //define on Look button click method
  handleLookClick = () => {
    //display function call information in console
    console.log("===================================================================")
    console.log("-----------------------LOOK() FUNCTION CALL-----------------------")

    //set state of Look() activity diagram depending on previous state
    //aka if user clicks button and activity diagram is not visible, it will become visible
    //and vice versa
    //set state of all other activity diagrams to false
    //do this so that if user clicks look button and move activity diagram is showing, move
    //activity diagram will be cleared from the screen and so on
    var value = !this.state.showLookData
    this.setState({
      showLookData: value,
      showMoveData: false,
      showGetLocationData: false,
      showGetOrientationData: false
    })

    //call look function and pass it down 
    //this is a test to see if Look calls correctly based on user input,
    //in finalized version on POV class, down will be computed based on a key
    //user enters that is defined in a common file
    this.Look("down")
  }

  //define on Move button click method
  handleMoveClick = () => {
    //display function call information in console
    console.log("===================================================================")
    console.log("-----------------------MOVE() FUNCTION CALL-----------------------")
    var value = !this.state.showMoveData

    //set state of Move() activity diagram depending on previous state
    //aka if user clicks button and activity diagram is not visible, it will become visible
    //and vice versa
    //set state of all other activity diagrams to false
    //do this so that if user clicks move button and look activity diagram is showing, look
    //activity diagram will be cleared from the screen and so on
    this.setState({
      showMoveData: value,
      showLookData: false,
      showGetLocationData: false,
      showGetOrientationData: false
    })

    //call move function and pass it Forward 
    //this is a test to see if Move calls correctly based on user input,
    //in finalized version on POV class, Forward will be computed based on a key
    //user enters that is defined in a common file
    this.Move("Forward")
  }

  //define on GetCurrentLocation button click method
  handleGetCurrentLocation = () => {
    //display function call information in console
    console.log("===================================================================")
    console.log("----------------GETCURRENTLOCATION() FUNCTION CALL----------------")

    //set state of GetCurrentLocation() activity diagram depending on previous state
    //aka if user clicks button and activity diagram is not visible, it will become visible
    //and vice versa
    //set state of all other activity diagrams to false
    //do this so that if user clicks GetCurrentLocation button and move activity diagram is showing,
    //move activity diagram will be cleared from the screen and so on
    var value = !this.state.showGetLocationData
    this.setState({
      showGetLocationData: value,
      showMoveData: false,
      showLookData: false,
      showGetOrientationData: false
    })
    //call GetCurrentLocation function 
    this.GetCurrentLocation()
  }

  //define on GetCurrentOrientation button click method
  handleGetCurrentOrientation = () => {
    //display function call information in console
    console.log("===================================================================")
    console.log("----------------GETCURRENTORIENTATION() FUNCTION CALL----------------")

    //set state of GetCurrentOrientation() activity diagram depending on previous state
    //aka if user clicks button and activity diagram is not visible, it will become visible
    //and vice versa
    //set state of all other activity diagrams to false
    //do this so that if user clicks GetCurrentOrientation button and move activity diagram is showing,
    //move activity diagram will be cleared from the screen and so on
    var value = !this.state.showGetOrientationData
    this.setState({
      showGetOrientationData: value,
      showMoveData: false,
      showGetLocationData: false,
      showLookData: false
    })
    //call GetCurrentOrientation function 
    this.GetCurrentOrientation()
  }

  //define Look() function
  //takes 1 parameter
  //View Direction - either up,down,tiltLeft, tiltRight, turnLeft, turnRight
  Look = (ViewDirection) => {

    //display function call information in console
    //display current ViewDirection
    console.log(`In the Look function, calling MatrixMultiply function and passing proper direction
      matrix based on the move the user makes. The result of this function call will be set to the Orientation matrix. 
      The current ViewDirection = ${ViewDirection}`);

    //add logic / error handling functionality 
    //switch on ViewDirection user specifies
    switch (ViewDirection) {
      //if view direction is up
      case ViewDirection = "up":
        //display function call information in console
        console.log("In the case statement, user wants to move up, calling Matrix Multiply and passing Up matrix");

        //call MatrixMultiple() function and pass Up matrix
        //set return value equal to orientation matrix
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.Up);
        break;
      case ViewDirection = "down":
        //display function call information in console
        console.log("In the case statement, user wants to move down, calling Matrix Multiply and passing Down matrix");

        //call MatrixMultiple() function and pass Down matrix
        //set return value equal to orientation matrix
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.Down);
        break;
      case ViewDirection = "tiltleft":
        //display function call information in console
        console.log("In the case statement, user wants tilt left, calling Matrix Multiply and passing TiltLeft matrix");

        //call MatrixMultiple() function and pass TiltLeft matrix
        //set return value equal to orientation matrix
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.TiltRight);
        break;
      case ViewDirection = "tiltright":
        //display function call information in console
        console.log("In the case statement, user wants tilt right, calling Matrix Multiply and passing TiltRight matrix");

        //call MatrixMultiple() function and pass TiltRight matrix
        //set return value equal to orientation matrix
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.TiltLeft);
        break;
      case ViewDirection = "turnleft":
        //display function call information in console
        console.log("In the case statement, user wants turn left, calling Matrix Multiply and passing TurnLeft matrix");

        //call MatrixMultiple() function and pass TurnLeft matrix
        //set return value equal to orientation matrix
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.TurnLeft);
        break;
      case ViewDirection = "turnright":
        //display function call information in console
        console.log("In the case statement, user wants turn right, calling Matrix Multiply and passing TurnRight matrix");

        //call MatrixMultiple() function and pass TurnRight matrix
        //set return value equal to orientation matrix
        this.state.orientation = this.MatrixMultiply(this.state.orientation, this.state.TurnRight);
        break;
      default:
        //display function call information in console
        console.log("User did not supply a known ViewDirection, look update failed.")

        //do not update orientation matrix
        break;
    }

  }

  //define MatrixMultiply() function
  //takes 2 parameters
  //orientation matrix, rotation matrix
  MatrixMultiply(orientation, rotation) {

    //add error handling functionality
    try {

      //display function call information in console
      console.log(`Based on the current state of the orientation matrix and the rotation matrix,
      calculate the new point of view of the user and set it to a temporary variable.`)

      //perform calculations
      //save newly calculate orientation to a temp variable
      var temp = orientation;

      //call checkValidView and pass the newly calculated orientation value
      //stored in a temporary variable
      //checkValidView(temp)

      //display function call information in console
      console.log(`Call function provided by Team Design, and pass the view value to checkValidView(temp). 
      This function will return whether or not this view is valid. If this function returns true, assign temp to orientation
      and return orientation. Otherwise, fall into catch statement.`)

      //if checkValidView(temp) returns true, return updated orientation matrix
      return orientation;
    }
    catch{
      //display function call information in console
      console.log(`In the MatrixMultiply catch statement, this means the view that was calculated was not valid. MatrixMultiply() will
      return un-updated orientation matrix`);

      //if checkValidView(temp) returns false, return un-updated orientation matrix
      return orientation;
    }
  }

  //define Move() function
  //takes 1 parameter
  //MoveDirection - either forward or backward indicator
  Move = (MoveDirection) => {

    //display function call information in console
    //display current MoveDirection
    console.log(`In the Move function, calling Translate function and passing proper MoveDirection
    matrix based on the move the user makes. The result of this function call will be set to the Location matrix. 
    The current MoveDirection = ${MoveDirection}`);

    //add logic / error handling functionality 
    //if user indicates they want to move forward
    if (MoveDirection == "Forward") {

      //display function call information in console
      console.log("In the if statement, user wants move forward, calling Translate() and passing 0 as move value");

      //call Translate() function and pass 0 indicataing forward movement
      //set return value equal to locatio matrix
      this.state.location = this.Translate(this.state.orientation, this.state.location, 0);
    }
    else if (MoveDirection == "Backward") {

      //display function call information in console
      console.log("In the if statement, user wants move backward, calling Translate() and passing 1 as move value");

      //call Translate() function and pass 1 indicataing backward movement
      //set return value equal to location matrix
      this.state.location = this.Translate(this.state.orientation, this.state.location, 1);
    }
    else {

      //display function call information in console
      console.log("User did not supply a known MoveDirection, look update failed.");

      //do not update location matrix
      return;
    }

  }

  //define Translate() function
  //takes 3 parameters
  //orientation matrix, location matrix, integer value for direction 
  Translate = (orientation, location, direction) => {

    //display function call information in console
    console.log("In Translate() function. This function is called by move function.")

    //add error handling functionality  
    try {
      //display function call information in console
      console.log(`Based on the current state of the location and orientation matrices and the 
      value of direction, calculate the new position of the user and set it to a temporary variable.`)

      //perform calculations
      //save newly calculate location to a temp variable
      var temp = location;

      //call checkValidMove and pass the newly calculated location value
      //stored in a temporary variable
      //checkValidMove(temp)

      //display function call information in console
      console.log(`Call function provided by Team Design, and pass the location value to checkValidMove(temp). 
      This function will return whether or not this move is valid. If this function returns true, assign temp to location
      and return location. Otherwise, fall into catch statement.`)

      //if checkValidMove(temp) returns true, return updated location matrix
      return location;
    }
    catch{
      //display function call information in console
      console.log(`In the Translate() catch statement, this means the move that was calculated was not valid. Translate() will
      return un-updated location matrix`);

      //if checkValidMove(temp) returns false, return un-updated location matrix
      return location;
    }
  }

  //define GetCurrentLocation() function
  GetCurrentLocation() {
    //display function call information in console
    console.log("In GetCurrentLocation() function. This function returns current location to requestor.");

    //return location matrix
    return this.state.location;
  }

  //define GetCurrentOrientation() function
  GetCurrentOrientation() {
    //display function call information in console
    console.log("In GetCurrentOrientation() function. This function returns current orientation to requestor.");

    //return orientation matrix
    return this.state.orientation;

  }

  //create buttons and activity diagrams that will be displayed on the page
  //include click button logic 
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
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '22%', marginTop: "2%", width: "20%" }}>
                    Look(direction) is called and is passed the new direction the user wants to look
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '8%' }}>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8601;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8601;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8600;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8600;</span>
                  </Form.Row>
                  <Form.Row>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%", marginRight: '1%' }}>
                      Look(direction) is passed a look up indicator.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%", marginRight: '1%' }}>
                      Look(direction) is passed a look down indicator.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%", marginRight: '1%' }}>
                      Look(direction) is passed a tilt left indicator.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%", marginRight: '1%' }}>
                      Look(direction) is passed a tilt right indicator.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%", marginRight: '1%' }}>
                      Look(direction) is passed a turn left indicator.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%" }}>
                      Look(direction) is passed a turn right indicator.
                    </div>
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '8%' }}>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8595;</span>
                  </Form.Row>
                  <Form.Row>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%", marginRight: '1%' }}>
                      Look(direction) calls MatrixMultiply() and passes the orientation matrix and up matrix.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%", marginRight: '1%' }}>
                      Look(direction) calls MatrixMultiply() and passes the orientation matrix and down matrix.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%", marginRight: '1%' }}>
                      Look(direction) calls MatrixMultiply() and passes the orientation matrix and tilt left matrix.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%", marginRight: '1%' }}>
                      Look(direction) calls MatrixMultiply() and passes the orientation matrix and tilt right matrix.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%", marginRight: '1%' }}>
                      Look(direction) calls MatrixMultiply() and passes the orientation matrix and turn left matrix.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "10%" }}>
                      Look(direction) calls MatrixMultiply() and passes the orientation matrix and turn right matrix.
                    </div>
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '8%' }}>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8600;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8600;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8601;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "10%" }}>&#8601;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '22%', marginTop: "2%", width: "20%" }}>
                    MatrixMultiply(orientation, direction) calculates the new orientation and saves it to a temporary variable.
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '31%', marginTop: "2%", width: "20%" }}>
                    <span >&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '22%', marginTop: "2%", width: "20%" }}>
                    The temporary value is sent to checkValidView(temp).
                  </Form.Row>
                  <Form.Row>
                    <span as={Col} style={{ marginTop: "2%", width: "20%", marginLeft: '22%' }}>&#8601;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "20%" }}>&#8600;</span>
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '13.5%' }}>
                    <div as={Col} style={{ border: "3px green solid", marginTop: "2%", width: "20%", marginRight: '2%' }}>
                      checkValidView(temp) returns true (the new View is valid).
                    </div>
                    <div as={Col} style={{ border: "3px red solid", marginTop: "2%", width: "20%" }}>
                      checkValidView(temp) returns false (the new View is not valid).
                    </div>
                  </Form.Row>
                  <Form.Row>
                    <span as={Col} style={{ marginTop: "2%", width: "20%", marginLeft: '22%' }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "20%" }}>&#8595;</span>
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '13.5%' }}>
                    <div as={Col} style={{ border: "3px green solid", marginTop: "2%", width: "20%", marginRight: '2%' }}>
                      Assign the temporary value to the orientation matrix
                    </div>
                    <div as={Col} style={{ border: "3px red solid", marginTop: "2%", width: "20%" }}>
                      The program will fall into MatrixMultiply's catch statement.
                    </div>
                  </Form.Row>
                  <Form.Row>
                    <span as={Col} style={{ marginTop: "2%", width: "20%", marginLeft: '22%' }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "20%" }}>&#8595;</span>
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '13.5%' }}>
                    <div as={Col} style={{ border: "3px green solid", marginTop: "2%", width: "20%", marginRight: '2%' }}>
                      Return the updated orientation matrix.
                    </div>
                    <div as={Col} style={{ border: "3px red solid", marginTop: "2%", width: "20%" }}>
                      Return the un-updated orientation matrix to Look().
                    </div>
                  </Form.Row>
                  <Form.Row>
                    <span as={Col} style={{ marginTop: "2%", width: "20%", marginLeft: '22%' }}>&#8600;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "20%" }}>&#8601;</span>
                  </Form.Row>
                  <Form.Row style={{ border: "3px black solid", marginLeft: '22%', marginTop: "2%", width: "20%", paddingLeft: '2%' }}>
                    Return to Look() function
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '31%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '22%', marginTop: "2%", width: "20%" }}>
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
                  <Form.Row>
                    <span as={Col} style={{ marginTop: "2%", width: "20%", marginLeft: '9.2%' }}>&#8601;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "20%" }}>&#8600;</span>
                  </Form.Row>
                  <Form.Row>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "20%", marginRight: '1%' }}>
                      Move(direction) is passed a move forward indicator.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "20%" }}>
                      Move(direction) is passed a move backward indicator.
                    </div>
                  </Form.Row>
                  <Form.Row>
                    <span as={Col} style={{ marginTop: "2%", width: "20%", marginLeft: '9.2%' }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "20%" }}>&#8595;</span>
                  </Form.Row>
                  <Form.Row>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "20%", marginRight: '1%' }}>
                      Move(direction) calls Translate(orientation, location, direction and passes the orientation matrix, location matrix,
                      and direction value of 0 for Forward.
                    </div>
                    <div as={Col} style={{ border: "3px black solid", marginTop: "2%", width: "20%" }}>
                      Move(direction) calls Translate(orientation, location, direction and passes the orientation matrix, location matrix,
                      and direction value of 1 for Backward.
                  </div>
                  </Form.Row>
                  <Form.Row>
                    <span as={Col} style={{ marginTop: "2%", width: "20%", marginLeft: '9.2%' }}>&#8600;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "20%" }}>&#8601;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    Translate(orientation, location, direction) calculates the new location and saves it to a temporary variable.
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span style={{}}>&#8595;</span>
                  </Form.Row>
                  <Form.Row as={Col} style={{ border: "3px black solid", marginLeft: '10%', marginTop: "2%", width: "20%" }}>
                    The temporary value is sent to checkValidMove(temp).
                  </Form.Row>
                  <Form.Row>
                    <span as={Col} style={{ marginTop: "2%", width: "20%", marginLeft: '9.2%' }}>&#8601;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "20%" }}>&#8600;</span>
                  </Form.Row>
                  <Form.Row>
                    <div as={Col} style={{ border: "3px green solid", marginTop: "2%", width: "20%", marginRight: '1%' }}>
                      checkValidMove(temp) returns true (the new Move is valid).
                    </div>
                    <div as={Col} style={{ border: "3px red solid", marginTop: "2%", width: "20%" }}>
                      checkValidMove(temp) returns false (the new Move is not valid).
                    </div>
                  </Form.Row>
                  <Form.Row>
                    <span as={Col} style={{ marginTop: "2%", width: "20%", marginLeft: '9.2%' }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "20%" }}>&#8595;</span>
                  </Form.Row>
                  <Form.Row>
                    <div as={Col} style={{ border: "3px green solid", marginTop: "2%", width: "20%", marginRight: '1%' }}>
                      Assign the temporary value to the location matrix.
                    </div>
                    <div as={Col} style={{ border: "3px red solid", marginTop: "2%", width: "20%" }}>
                      The program will fall into Translate's catch statement.
                    </div>
                  </Form.Row>
                  <Form.Row>
                    <span as={Col} style={{ marginTop: "2%", width: "20%", marginLeft: '9.2%' }}>&#8595;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "20%" }}>&#8595;</span>
                  </Form.Row>
                  <Form.Row>
                    <div as={Col} style={{ border: "3px green solid", marginTop: "2%", width: "20%", marginRight: '1%' }}>
                      Return the updated location matrix.
                    </div>
                    <div as={Col} style={{ border: "3px red solid", marginTop: "2%", width: "20%" }}>
                      Return the un-updated location matrix to Move().
                    </div>
                  </Form.Row>
                  <Form.Row>
                    <span as={Col} style={{ marginTop: "2%", width: "20%", marginLeft: '9.2%' }}>&#8600;</span>
                    <span as={Col} style={{ marginTop: "2%", width: "20%" }}>&#8601;</span>
                  </Form.Row>
                  <Form.Row style={{ border: "3px black solid", marginTop: "2%", marginLeft: '10%', width: "20%", paddingLeft: '2%' }}>
                    Return to Move() function
                  </Form.Row>
                  <Form.Row style={{ marginLeft: '19%', marginTop: "2%", width: "20%" }}>
                    <span> &#8595;</span>
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
    //finish portfolio - 
    //create unit test proposal for POV class 
    //create version 2 storyboards 
    //record video of POV code
    //put all into - storyboard (version 1&2), activity diagrams (4 for POV, get 2 for movies), api pp, 
    //team pov pp, POV class code & explanation, unit test proposal, timeline, video of POV code
    //one powerpoint / look at old portfolio professor sent us - add items i dont not have to my portfolio

    //email prof do we have to include teams stuff in our portfolio - their code and explanation
    //email prof about private / public class members