
import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
class Profile extends Component {

   render() {
    return <Card className="profile">
        <CardImage className="img-fluid rounded" src="https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg" waves />
        <CardBody>
          <CardTitle>Name: Eve Holt </CardTitle>
          <CardTitle>email: Morris @gmail.com </CardTitle>
          <CardTitle>Result: 65% </CardTitle>
        </CardBody>
      </Card>;
  }
}
export default Profile;
