import React, { useState, useEffect } from "react";


const Form = () => {

    const [inputData, setInputData] = useState();
    const [find, setFind] = useState()

    const handleInputChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };


    const findFunction = () => {
        console.log("Find")

    }
    // useEffect(() => {
    //     console.log(counter)

    // }, [counter])




    return (
        <>

            <form>
                <input onChange={(e) => handleInputChange(e)} type="text" name="name" placeholder="Find Only" />


                <button onClick={() => findFunction()}>Find</button>
            </form>
        </>
    );
};
export default Form;
