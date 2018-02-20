import React, { Component } from 'react'
import classnames from 'classnames'
import 'styles/style.css'
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';

class SectionBoxes extends React.Component{

    render(){
        return(
<ScrollableAnchor id={'boxes'}>
<section id="boxes">
    <div className="box">
            <img src="./img/motivation1.jpg"/>
            <h1>Be strong</h1>
            <p>Lorem ipsum dolor sit amet, has lorem voluptaria in, qui commodo prompta ad. Cu admodum abhorreant adversarium nec, te vis nisl disputationi, homero aliquam pri ne. Mel an minim</p>
    </div>
    
    <div className="box">
            <img src="./img/motivation2.jpeg"/>
            <h1>Positive aditude</h1>
            <p>Lorem ipsum dolor sit amet, has lorem voluptaria in, qui commodo prompta ad. Cu admodum abhorreant adversarium nec, te vis nisl disputationi, homero aliquam pri ne. Mel an minim</p>
    </div>

    <div className="box">
            <img src="./img/motivation3.jpeg"/>
                <h1>Take a break</h1>
                <p>Lorem ipsum dolor sit amet, has lorem voluptaria in, qui commodo prompta ad. Cu admodum abhorreant adversarium nec, te vis nisl disputationi, homero aliquam pri ne. Mel an minim</p>
    </div>
    <div className="box">
            <img src="./img/motivation4.jpeg"/>
            <h1>Courage</h1>
            <p>Lorem ipsum dolor sit amet, has lorem voluptaria in, qui commodo prompta ad. Cu admodum abhorreant adversarium nec, te vis nisl disputationi, homero aliquam pri ne. Mel an minim</p>
    </div>
    
    <div className="box">
            <img src="./img/motivation5.jpeg"/>
            <h1>Only you</h1>
            <p>Lorem ipsum dolor sit amet, has lorem voluptaria in, qui commodo prompta ad. Cu admodum abhorreant adversarium nec, te vis nisl disputationi, homero aliquam pri ne. Mel an minim</p>
    </div>

    <div className="box">
            <img src="./img/motivation6.jpeg"/>
               <h1>Feel free</h1>
                <p>Lorem ipsum dolor sit amet, has lorem voluptaria in, qui commodo prompta ad. Cu admodum abhorreant adversarium nec, te vis nisl disputationi, homero aliquam pri ne. Mel an minim</p>
    </div>

</section>
</ScrollableAnchor>
        );
    }
}

export default SectionBoxes