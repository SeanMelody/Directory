// import axios from "axios";
// const requestUrl = "https://randomuser.me/api/?"


// export default {
//     search: function (query) {
//         return axios.get(requestUrl + query);
//     }
// };


// FETCH
// const requestUrl = "https://randomuser.me/api/?results=10";
// fetch(requestUrl, {
//     method: "GET",
// })
//     // Json the results
//     .then((results) => results.json())
//     // Console log to let user know it was successful!
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("Employee API Error", err)
//     })




//AXIOS

// let employeeList = {}

// axios.get('https://randomuser.me/api/?results=10')
//     .then(function (response) {
//         // handle success
//         // console.log(response);
//         employeeList = response.data.results
//         console.log(employeeList)
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })

// export default {}

import React, { Component } from "react";
import axios from "axios";
import APIStyles from "./APIStyles"

export default class API extends Component {
    state = { employees: [] };

    onChange = function (e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    async componentDidMount() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();
            this.setState({ employees: data.results });

        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    renderEmployee = () => {
        const { employees } = this.state;
        console.log(employees)

        return employees.map((employee, index) => (
            <table style={APIStyles.employeeTable}>
                <tr>
                    {/* {console.log(employees)} */}
                    <th> <img key={index} src={employee.picture.large} alt="employee photo" /> </th>
                    <th>{employee.name.first} {employee.name.last}</th>
                    {/* <th>Last Name: {employee.name.last}</th> */}
                    <th>Country: {employee.location.country}</th>
                    <th>Age: {employee.dob.age}</th>
                </tr>
            </table>

        ));
    };

    render() {
        const { employees } = this.state;
        return (
            <div>
                {this.renderEmployee()}
                {console.log(employees)}
            </div>

        )
    }
}

//Input to filter array


// THANKS SakoBu
// https://stackoverflow.com/questions/48892435/making-an-api-call-in-react