import React from 'react'

const {Provider, Consumer} = React.createContext()

class Usercontextprovider extends React.Component {

    state = {
        username: "Bobbi"
    }

    changeUsername = (username) => {
        this.setState({username})
    }

    render() {
        //console.log(this.state.username)
        return(
            <Provider value={{username: this.state.username, changeUsername: this.changeUsername}}>
                {this.props.children}
            </Provider>
        )
    }

}
export {Usercontextprovider, Consumer as Usercontextconsumer}
