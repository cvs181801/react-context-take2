import React from 'react'
import Usercontext from '../Usercontext'

class Header extends React.Component {
    
    render() {
        return (
            <div>
                <header>
                    <p>Welcome, {this.context} 🎉!</p>
                </header>
            </div>
        )
    }
}

Header.contextType = Usercontext

export default Header