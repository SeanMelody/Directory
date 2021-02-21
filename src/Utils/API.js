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
import Button from "../Components/Main/Button"
import Form from "../Components/Form/Form"

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
        // console.log(employees)

        return employees.map((employee, index) => (

            <table style={APIStyles.employeeTable}>
                <tr key={index} >
                    {/* {console.log(employees)} */}
                    {/* <th> <img key={index} src={employee.picture.medium} alt="employee photo" /> </th> */}
                    <th>{employee.name.first} {employee.name.last}</th>
                    {/* <li>Last Name: {employee.name.last}</li> */}
                    <th>Country: {employee.location.country}</th>
                    <th>Age: {employee.dob.age}</th>
                    <th>Gender: {employee.gender}</th>
                </tr>
            </table>

        ));
    };

    render() {
        const { employees } = this.state;
        return (
            <div>
                <Button name="Male" onClick={() => console.log("Male Button")}>
                    {employees.filter(employee => employee.gender === "male").map(filteredEmployee => (
                        <li>{filteredEmployee.name}   {console.log(filteredEmployee.name)}</li>
                    ))}
                </Button>
                <Button name="Over40" onClick={() => console.log("Over 40 Button")}>
                    {employees.filter(employee => employee.dob.age >= "40").map(filteredEmployee => (
                        <li>{filteredEmployee.dob.age}   {console.log(filteredEmployee.dob.age)}</li>
                    ))}
                </Button>
                <Button name="Sort A -> Z" onClick={() => console.log("Sort")}>
                    {employees.sort((a, b) => a.name.first.localeCompare(b.name.first))}
                </Button>
                <Button name="Sort Young -> Old" onClick={() => console.log("By Age")}>
                    {employees.sort((a, b) => a.location.country.localeCompare(b.location.country))}
                    {/* {employees.sort((a, b) => toString(a.dob.age).localeCompare(toString(b.dob.age)))} */}
                </Button>
                <Form />
                {this.renderEmployee()}
                {console.log(employees)}
            </div>

        )
    }
}


{/* {employees.map(employee => employee.name >= "40").map(filteredEmployee => (
                        <li>{filteredEmployee.name}   {console.log(filteredEmployee.name)}</li>
                    ))} */}

//Input to filter array


// THANKS SakoBu
// https://stackoverflow.com/questions/48892435/making-an-api-call-in-react