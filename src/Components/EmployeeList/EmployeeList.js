// Import all the necessary goodness!
import React, { Component } from 'react'
import API from "../../Utils/API"
import Search from "../Search/Search"
import EmployeeListStyles from "./EmployeeListStyles"

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

    // Handle input change to get the data from the search bar and make it render
    handleInputChange = event => {
        if (event.target.name === "search") {
            // Lower case it just incase
            const searchValue = event.target.value.toLowerCase();
            // Set the state
            this.setState({
                search: searchValue
            })
        }
    }

    //Sort by first name function
    sortByFName = () => {
        // set the sate to sorted
        const sortedEmployees = this.state.results.sort((a, b) => {
            // If statement to sort a->z or z->a
            if (b.name.first > a.name.first) {
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0;
        });

        // If else statement to set the states to a->z or z->a
        if (this.state.sortOrder === "DESC") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ASC" });
        } else {
            this.setState({ sortOrder: "DESC" });
        }
        this.setState({ results: sortedEmployees })
    }

    // Sort by country function
    sortByCountry = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
            if (b.location.country > a.location.country) {
                return -1
            }
            if (a.location.country > b.location.country) {
                return 1
            }
            return 0;
        });
        // If else statement to set the states to a->z or z->a
        if (this.state.sortOrder === "DESC") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ASC" });
        } else {
            this.setState({ sortOrder: "DESC" });
        }
        this.setState({ results: sortedEmployees })
    }


    // Render it all to the page (but still have to bring it in in App.js)
    render() {
        return (
            <div>
                <div>
                    {/* Using the Search component Here */}
                    <Search handleInputChange={this.handleInputChange}
                        search={this.state.search} />
                </div>
                <div className="table-responsive">
                    <table className="table table-striped text-center table-hover">
                        <thead>
                            <tr style={EmployeeListStyles.titleStyle}>
                                <th>Profile Photo</th>
                                <th>Name<button style={EmployeeListStyles.buttonsStyling} onClick={this.sortByFName} className="buttonsStyling btn-sm btn-outline-dark">&#8593; &#x2193;</button></th>
                                <th>Age</th>
                                <th>Country<button style={EmployeeListStyles.buttonsStyling} onClick={this.sortByCountry} className="buttonsStyling btn-sm btn-outline-dark">&#8593; &#x2193;</button></th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        { // Sort by First Name
                            this.state.results && this.state.results.map(employee =>
                                employee.name.first.toLowerCase().includes(this.state.search) ?
                                    <tbody key={employee.login.uuid} style={EmployeeListStyles.employee}>
                                        <tr>
                                            <td><img src={employee.picture.medium} className="border border-dark" /></td>
                                            <td >{employee.name.first} {employee.name.last}</td>
                                            <td >{employee.dob.age}</td>
                                            <td >{employee.location.country}</td>
                                            <td >{employee.email}</td>

                                        </tr>
                                    </tbody>

                                    :
                                    // Sort by Country
                                    employee.name.last.toLowerCase().includes(this.state.search) ?
                                        <tbody key={employee.login.uuid}>
                                            <tr>
                                                <td><img src={employee.picture.medium} className="border border-dark" /></td>
                                                <td >{employee.name.first} {employee.name.last}</td>
                                                <td >{employee.dob.age}</td>
                                                <td >{employee.location.country}</td>
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
