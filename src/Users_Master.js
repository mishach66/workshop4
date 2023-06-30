import React from 'react'

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

class Users extends React.Component {
    constructor (props) {
        super(props)
        console.log('props', props)
        this.state = {
            users: [],
        }

        this.removeRandomUser = this.removeRandomUser.bind(this)
    }

    componentDidMount() {
        this.setState({
            users: generateUsers(),
            }
        )
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

    componentDidUpdate(prevProps, prevState) {
        if(prevState.users !== this.state.users) {
            document.title = `დარჩა ${this.state.users.length} მომხმარებელი`
        }
    }

    render() {
        return (
            <div>
                {console.log(this.state.users.length)}
                <div style={{height: 350}}>
                    <h2 style={{marginLeft: 20}}>მომხმარებლების სია</h2>
                    <div>
                        { this.props.showUsersList && 
                            <ul>
                                {this.state.users.map(({id, name, age}) => {
                                    return (
                                        <li key={id}>{name}, {age} წლის</li>
                                    )
                                })}
                            </ul>

                            // <ul>
                            // {this.state.users.map(({id, name, age}) => 
                            //     (
                            //         <li key={id}>{name}, {age} წლის</li>
                            //     )
                            // )}
                            // </ul>
                        }
                    </div>
                </div>
                <button style={{marginLeft: 20}} onClick={this.removeRandomUser}>REMOVE RANDOM USER</button>
            </div>
        )
    }
}
  
export default Users
