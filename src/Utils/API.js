import axios from "axios";
const requestUrl = "https://randomuser.me/api/?"


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

let employeeList = {}

axios.get('https://randomuser.me/api/?results=10')
    .then(function (response) {
        // handle success
        // console.log(response);
        employeeList = response.data.results
        console.log(employeeList)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

export default {}