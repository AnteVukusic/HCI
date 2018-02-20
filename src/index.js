'use strict'

import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor'
import Header from 'components/Header.jsx'
import SectionShowcase from 'components/SectionShowcase.jsx'
import SectionIdeadrop from 'components/SectionIdeadrop.jsx'
import SectionNewsletter from 'components/SectionNewsletter.jsx'
import SectionBoxes from 'components/SectionBoxes.jsx'
import Footer from 'components/Footer.jsx'


class App extends React.Component{
    render(){
        return(
            <body>
                <Header />
                <SectionShowcase />
                <SectionIdeadrop />
                <SectionNewsletter />
                <SectionBoxes />
                <Footer />
            </body>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))


