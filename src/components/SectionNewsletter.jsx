import React, { Component } from 'react'
import classnames from 'classnames'
import 'styles/style.css'

class SectionNewsletter extends React.Component{

    render(){
        return(

    <section id="newsletter">
        <div className="container">
            <h1>Subscribe for newsletter</h1>
            <form>
                <input type="email" placeholder="Enter e-mail" />
                <button type="submit" className="button_1">subscribe</button>

            </form>
        </div>
    </section>
        );
    }
}

export default SectionNewsletter