import React, { Component } from 'react';
import UserInfo from './UserInfo';
import CardTemplate from './CardTemplate';
import NavBarTemp from './NavBarTemp';

class App extends Component {
  state = {
    userData: []
  }

  addInfo = (props) => {
    console.log(props);

    let userData = [...this.state.userData, props];

    this.setState({
      userData
    })
  }

  render() {
    return (
      <div>
        <NavBarTemp />
        <UserInfo addData = {this.addInfo} />
        <CardTemplate userData ={this.state.userData} />
      </div>
    );
  }
}

export default App;
