import React from 'react'




const Button = (props) => {



    return (
        <button className="btn btn-outline-danger" style={{ margin: "5px" }}>{props.name}</button>
    )
}

export default Button
