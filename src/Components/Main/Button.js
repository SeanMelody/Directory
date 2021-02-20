import React from 'react'



const Button = (props) => {

    return (
        <button className="btn btn-danger">Sort by {props.name}</button>
    )
}

export default Button
