//Import Axios
import axios from "axios";

// set the api call url to a constant
const requestUrl = "https://randomuser.me/api/?results=10";

// export the Api Call
export default {
    //Set it to a function
    ApiSearch: function () {
        // Return the Axios request
        return axios.get(requestUrl)
    }
}