import React from "react";
import PropTypes from 'prop-types'

export default function Form(props) {
    return (

        <div className="row form-container">
            <div className="col-md-2"></div>
            <form className="main-form col-md-8">

                <h1>The <b>Form</b> of <i>life</i></h1>
                <label>Heading</label><br/>
                <input type="search" className="form-control form-field" placeholder="A Cool Heading" aria-label="Search" /><br/>

                <label>Main Text</label><br/>
                <textarea type="text" className="form-control form-field" placeholder="Main Text" aria-label="Search" /><br/>

                <label>Highlights</label><br/>
                <input type="search" className="form-control form-field" placeholder="Flashy Things" aria-label="Search" /><br/>

            </form>
        </div>
    )
}
