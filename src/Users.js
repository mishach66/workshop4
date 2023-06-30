import React from 'react'

class Users extends React.Component {
    constructor (props) {
        super()
    }

    removeRandomUser() {
        if (this.props.onClick) {
            return this.props.onClick
        }
    }

    componentDidMount() {
        document.title = `დარჩა ${this.props.users.length} მომხმარებელი`
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.users !== this.props.users) {
            document.title = `დარჩა ${this.props.users.length} მომხმარებელი`
        }
    }

    render() {
        return (
            <div>
                {
                    <ul>
                        {this.props.users.map(({id, name, age}) => {
                            return (
                                <li key={id}>{name}, {age} წლის</li>
                            )
                        })}
                    </ul>
                }
            </div>
        )
    }
}
  
export default Users
