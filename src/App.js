import React from 'react';
import './App.css';
import Users from './Users';

const generateUsers = () => {
  return [
      {
          'id': 1,
          'name': 'Power Gamer',
          'age': 25
      },
      {
          'id': 2,
          'name': 'One Piece',
          'age': 20
      },
      {
          'id': 3,
          'name': 'Banana Pie',
          'age': 30
      },
      {
          'id': 4,
          'name': 'Viral feeds',
          'age': 34
      },
      {
          'id': 5,
          'name': 'HeartSweet',
          'age': 35
      },
      {
          'id': 6,
          'name': 'Captain America',
          'age': 23
      },
      {
          'id': 7,
          'name': 'Smoke Fire',
          'age': 22
      },
      {
          'id': 8,
          'name': 'Sun Flower',
          'age': 35
      },
      {
          'id': 9,
          'name': 'Attract Train',
          'age': 19
      },
      {
          'id': 10,
          'name': 'Serene Beauty',
          'age': 40
      },
  ]
}

class App extends React.Component {
  constructor() {
    super ()

    this.state = {
      showUsersList: true,
      users: generateUsers()
    }

    this.showHideUsersList = this.showHideUsersList.bind(this)
    this.removeRandomUser = this.removeRandomUser.bind(this)
  }

  showHideUsersList() {
    this.setState({showUsersList: !this.state.showUsersList})
  }

  removeRandomUser() {
    if (this.state.users.length) {
        const randomIndex = Math.floor(Math.random() * this.state.users.length)
        const newArray = [...this.state.users]

        this.setState({users: (newArray.filter((item, index, arr) => 
            randomIndex !== index ? item : null
        ))})
    } else {
        console.log('No more users...')
    }
  }

  render() {
    const users = this.state.users
    return (
      <div>

        <br/>
        <button style={{marginLeft: 20}} onClick={this.showHideUsersList}>Hide / Show Users</button>
        <h2 style={{marginLeft: 20}}>მომხმარებლების სია</h2>
        <div style={{height: 300}}>
        {
          this.state.showUsersList && 
          <Users users={users} />
        }
        </div>


        <button style={{marginLeft: 20}} 
          onClick={this.removeRandomUser} 
        >REMOVE RANDOM USER</button>

      </div>
    )
  }
}

export default App
