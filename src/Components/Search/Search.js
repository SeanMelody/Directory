// Import React
import React from "react";

// Declare a function for the search bar and bring in props
const Search = (props) => {


    //Return the search form!
    return (
        <form>
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <input
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text"
                        placeholder="Search"
                        className="col-md-6"
                        id="search"
                    />
                </div>
            </div>
        </form>
    )

}
export default Search
