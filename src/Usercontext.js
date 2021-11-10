import React from 'react'

const {Provider, Consumer} = React.createContext()

class Usercontextprovider extends React.Component {

    state = {
        username: ""
    }

    changeUsername(username) {
        this.setState({username: username})
    }
    render() {
        return(
            <Provider value={{username: this.state.username, changeUsername: this.changeUsername}}>
                {this.props.children}
            </Provider>
        )
    }

}
export {Provider as Usercontextprovider, Consumer as Usercontextconsumer}
