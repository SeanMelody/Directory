import axios from "axios";


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


axios.get('https://randomuser.me/api/?results=10')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {};