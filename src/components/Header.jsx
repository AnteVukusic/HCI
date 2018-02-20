import React, { Component } from 'react'
import classnames from 'classnames'
import 'styles/style.css'

class Header extends React.Component{

    render(){
        return(

            <header>
                <div className="container">
                <div id="branding">
                    <h1><span className="highlight">IDEA</span> keep it simple...</h1>

                </div>
                <div id="branding-min">
                    <h1><span className="highlight">IDEA</span></h1>
                </div>
                <nav>
                <ul>
                    <li className="current"><a href="index.html">Home</a></li>
                    <li><a href="#ideadrop">Drop_Idea</a></li>
                    <li><a href="#">Ideas</a></li>
                    <li><a href="#boxes">motivation</a></li>
                </ul>

                </nav>
                <div id="piemenu">
                    <img src="./img/menu.png" alt=""/>
                    <div className="dropdown-content">
                        
                        <a href="#">Home</a><br/>
                        <a href="#">Drop_Idea</a><br/>
                        <a href="#">Ideas</a><br/>
                        <a href="#">motivation</a>
                        
                    </div>
                </div>
                </div>
            </header>
        );
    }
}

export default Header