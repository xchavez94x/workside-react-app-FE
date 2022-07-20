import { submissionFailed, submissionInitialized, submissionSuccessful } from "../reducers/users";
import UsersService from "../../services/users.service"; 

export const register = data => {
    return dispach => {
        dispach(submissionInitialized());
        UsersService.post('/register', data)
            .then( response => {
                console.log(response)
                dispach(submissionSuccessful(response.data))
                if( response.data.code !== 200 ) {
                    dispach(submissionFailed(response.data.message))
                }
            })
            .catch(error => {
                dispach(submissionFailed(error))
            })
    }
}