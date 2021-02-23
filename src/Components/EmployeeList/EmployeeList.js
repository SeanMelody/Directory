// Import all the necessart goodness!
import React, { Component } from 'react'
import API from "../../Utils/API"
import Search from "../Search/Search"

// Export default here instead of below!
export default class EmployeeList extends Component {

    // Set state for the API results, the search form and the sort order!
    state = {
        sortOrder: "",
        results: [],
        search: ""
    }

    // Component did mount to get the API request from Utils/API
    componentDidMount() {
        //Call the API search function from Utils/API
        API.ApiSearch()
            //Get the data set it to state and console log it
            .then(res => {
                this.setState({ results: res.data.results })
                console.log(this.state.results)
                // Gotta check them errors!
            }).catch(err => console.log(err))
    }







    render() {
        return (
            <div>
                <Search />



            </div>
        )
    }
}
