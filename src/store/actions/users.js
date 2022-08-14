import UsersService from "../../services/users.service"; 
import { 
    submissionFailed, 
    submissionInitialized, 
    submissionSuccessful 
} from "../reducers/users";

export const register = data => {
    return dispach => {
        dispach(submissionInitialized());
        UsersService.post('/register', data)
            .then( response => {
                console.log(response)
                dispach(submissionSuccessful(response.data))
                if( response.data.status !== 200 ) {
                    dispach(submissionFailed(response.data.message))
                }
            })
            .catch(error => {
                dispach(submissionFailed(error.response.data))
            })
    }
}

export const login = data => {
    return dispach => {
        dispach(submissionInitialized());
        UsersService.post('/login', data)
            .then( response => {
                console.log(response)
                dispach(submissionSuccessful(response.data))
                if( response.data.status !== 200 ) {
                    dispach(submissionFailed(response.data.message))
                }
            })
            .catch(error => {
                dispach(submissionFailed(error.response.data))
            })
    }
}