const fetch = require('node-fetch');

let auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMyYjIwMzA5YzUwMjYzZTBjNjA4ZGEiLCJpYXQiOjE2MTQwNzY1NzF9.m6mSj-39JQOopxvqvHMv9WAwu-ibjIsahcCSRvSKJSw"
    let myHeaders = new Headers();
        myHeaders.append("auth-token", auth)
        const reqOptions = {
            method: "GET",
            headers: myHeaders
        }


    const getUsersForAdmin = () => {
        return fetch("http://localhost:3001/admin/users", reqOptions)
        .then(res => res.json())
        .then(data => {
            return {
                users: data.username,
                email: data.email,
                age: data.age
            }
        }).catch(err => err)
    }


module.exports = getUsersForAdmin;