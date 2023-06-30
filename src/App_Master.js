import React from 'react';
import './App.css';
import Users from './Users';

class App extends React.Component {
  constructor() {
    super ()

    this.state = {
      showUsersList: true
    }

    this.showHideUsersList = this.showHideUsersList.bind(this)
  }

  showHideUsersList() {
    this.setState({showUsersList: !this.state.showUsersList})
  }
  
  render() {
    const showUsersList = this.state.showUsersList
    return (
      <div>
        <br/>
        {console.log('showUsersList is ', showUsersList)}
        <button style={{marginLeft: 20}} onClick={this.showHideUsersList}>Hide / Show Users</button>
        <div>{showUsersList}</div>
        <br/>
        <Users showUsersList={showUsersList} />
      </div>
    )
  }
}

export default App;
