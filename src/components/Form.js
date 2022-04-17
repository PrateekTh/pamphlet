import React from "react";
import PropTypes from 'prop-types'

export default function Form(props) {
    return (
        <form className="main-form">

            <h1>The <b>Form</b> of <i>life</i></h1>
            <label>Heading</label><br/>
            <input type="search" className="form-control" placeholder="A Cool Heading" aria-label="Search" /><br/>

            <label>Main Text</label><br/>
            <textarea type="text" className="form-control" placeholder="Main Text" aria-label="Search" /><br/>

            <label>Highlights</label><br/>
            <input type="search" className="form-control" placeholder="Flashy Things" aria-label="Search" /><br/>

        </form>
    )
}
