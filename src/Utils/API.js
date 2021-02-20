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

export default class API extends Component {
    state = { employees: [] };

    onChange = function (e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    async componentDidMount() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();
            this.setState({ employees: data.results, isLoading: false });

        } catch (error) {
            this.setState({ error: error.message, isLoading: false });
        }
    }

    renderEmployee = () => {
        const { employees } = this.state;

        return employees.map((employee, index) => (
            <div>
                <img key={index} src={employee.picture.medium} alt="employee photo" />
                <p>First Name: {employee.name.first}</p>
                <p> Last Name: {employee.name.last}</p>
            </div>
        ));
    };

    render() {
        return <div>{this.renderEmployee()}</div>;
    }
}



// THANKS SakoBu
// https://stackoverflow.com/questions/48892435/making-an-api-call-in-react