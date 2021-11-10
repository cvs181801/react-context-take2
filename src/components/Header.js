import React from 'react'
import {Usercontextconsumer} from '../Usercontext'

class Header extends React.Component {
    
    render() {
        return (
            <div>
                <Usercontextconsumer>
                    {context => (
                        <header>
                        <p>Welcome, {context.username} 🎉!</p>
                    </header>
                    )}
                </Usercontextconsumer>
            </div>
        )
    }
}

export default Header