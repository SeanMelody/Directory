// import React, { Component, useState } from 'react'
// import API from "../../Utils/API"
// import Employees from "./Employees.json"

// // FETCH
// // const requestUrl = "https://randomuser.me/api/?results=10";
// // fetch(requestUrl, {
// //     method: "GET",
// // })
// //     // Json the results
// //     .then((results) => results.json())
// //     // Console log to let user know it was successful!
// //     .then((data) => {
// //         console.log(data.results)
// //         employeeList = data.results
// //     })
// //     .catch((err) => {
// //         console.log("Employee API Error", err)
// //     })

// // console.log(data.resutls)

// console.log(Employees)




// const Main = (Employees) => {
//     const [data, setData] = useState([])



//     useEffect(() => {

//         const sortArray = type => {
//             const types = {
//                 name: 'employee.name.first',
//                 age: 'employee.dob.age',
//                 gender: 'employee.gender',
//             };
//             const sortProperty = types[type];
//             const sorted = [...Employees].sort((a, b) => b[sortProperty] - a[sortProperty]);
//             console.log(sorted);
//             setData(sorted);
//         };

//         sortArray(sortType)
//     }, [sortType])


//     return (
//         <div>
//             <select onChange={(e) => setSortType(e.target.value)}>
//                 <option>Sort</option>
//                 <option value="name">name</option>
//                 <option value="age">age</option>
//                 <option value="gender">gender</option>
//             </select>
//             {Employees.map(employee => (
//                 <div key={employee.index}>
//                     <div>{employee.name.first} {employee.name.last}</div>

//                     <div>{employee.dob.age}</div>
//                     <div>{employee.gender}</div>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default Main

