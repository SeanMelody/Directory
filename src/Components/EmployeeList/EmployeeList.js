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


    handleInputChange = event => {
        if (event.target.name === "search") {
            const searchValue = event.target.value.toLowerCase();
            this.setState({
                search: searchValue
            })
        }
    }




    render() {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange}
                    search={this.state.search} />
                <div className="table-responsive">
                    <table className="table table-striped table-resposive text-center table-hover">
                        <thead>
                            <tr>
                                <th>Profile Photo</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        { //First Name sort
                            this.state.results && this.state.results.map(employee =>
                                employee.name.first.toLowerCase().includes(this.state.search) ?
                                    <tbody key={employee.login.uuid}>
                                        <tr>
                                            <td ><img src={employee.picture.medium} /></td>
                                            <td >{employee.name.first} {employee.name.last}</td>
                                            <td >{employee.dob.age}</td>
                                            <td >{employee.location.country}</td>
                                            <td >{employee.email}</td>

                                        </tr>
                                    </tbody>

                                    :
                                    //Last Name sort
                                    employee.name.last.toLowerCase().includes(this.state.search) ?
                                        <tbody key={employee.login.uuid}>
                                            <tr>
                                                <td ><img src={employee.picture.medium} /></td>
                                                <td >{employee.name.first}</td>
                                                <td >{employee.name.last}</td>
                                                <td >{employee.phone} </td>
                                                <td >{employee.email}</td>

                                            </tr>
                                        </tbody>
                                        :
                                        null
                            )}

                    </table>

                </div>


            </div>
        )
    }
}
