import axios from "axios"

const UsersService = axios.create({
    baseURL: "http://localhost:3200/users",
    headers: {
        "Content-type": 'application/json'
    }
})

export default UsersService;