// Import React
import React from "react";


// Declare a function for the search bar and bring in props
const Search = (props) => {


    //Return the search form!
    return (
        <form>
            <div className="row">
                <div>
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        placeholder="Search by Employee Name"
                        className="input col-md-6"
                        id="search"
                    />
                </div>
            </div>
        </form>
    )

}

export default Search
