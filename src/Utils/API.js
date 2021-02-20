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

import React from 'react';

class API extends React.Component {
    state = { people: [], isLoading: true, error: null };

    async componentDidMount() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();
            this.setState({ people: data.results, isLoading: false });

        } catch (error) {
            this.setState({ error: error.message, isLoading: false });
        }
    }

    renderPerson = () => {
        const { people, isLoading, error } = this.state;

        if (error) {
            return <div>{error}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return people.map(person => (
            <div key={person.id.value}>
                <img src={person.picture.medium} alt="avatar" />
                <p>First Name: {person.name.first}</p>
                <p> Last Name: {person.name.last}</p>
            </div>
        ));
    };

    render() {
        return <div>{this.renderPerson()}</div>;
    }
}

export default API;

// THANKS SakoBu
// https://stackoverflow.com/questions/48892435/making-an-api-call-in-react