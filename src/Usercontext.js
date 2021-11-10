import React from 'react'

const {Provider, Consumer} = React.createContext()

class Usercontextprovider extends React.Component {
    render() {
        return(
            <Provider  value={"chris"}>
                {this.props.children}
            </Provider>
        )
    }

}
export {Provider as Usercontextprovider, Consumer as Usercontextconsumer}
