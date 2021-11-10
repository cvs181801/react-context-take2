import React from 'react'
import {Usercontextconsumer} from '../Usercontext'

class Button extends React.Component {
    render() {
        return (
            <div>
                <Usercontextconsumer>
                {context => (<button onClick={context.changeUsername}>Update Username</button>) }
                </Usercontextconsumer>
            </div>
        )
    }
  
}

export default Button