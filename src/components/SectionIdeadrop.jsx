import React, { Component } from 'react'
import classnames from 'classnames'
import 'styles/style.css'

class SectionIdeadrop extends React.Component{

    render(){
        return(

            <section id="ideadrop">
             
                <div id="form">
                    
                    <div id="top-form">
                    <h1>Drop your idea here!</h1>
                    </div>

                    <div id="mid-form">
                        <input type="text1" placeholder="Your IDEA title" />
                        <input type="text2" placeholder="Your IDEA contenet" />
                        <div id="extra">
                        <a href="1">1</a>

                        <a href="1">1</a>

                        <a href="1">1</a>
                        </div>
                    </div>

                    <div id="down-form">
                    <a href="#">post</a>
                    </div>
                
                </div>
                <img src="./img/motivation22.jpeg" alt=""/>
            </section>
        );
    }
}

export default SectionIdeadrop