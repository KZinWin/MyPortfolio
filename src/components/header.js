import React , {Component} from "react";

class Header extends Component {
    render () {
        return (
            <div className="navbar-container">
                <ul className="header-nav">
                    <li className="header-font nav-item" >Home</li>
                    <li className="header-font nav-item">My Info</li>
                    <li className="header-font nav-item">My Skill</li>
                    <li className="header-font nav-item">My Projects</li>
                    <li className="header-font nav-item">Contact Me </li>
                </ul>
            </div>
        )
    }
}

export default Header;