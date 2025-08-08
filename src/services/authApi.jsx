import { apiCall } from "./apiCall";


export const login=async(data)=>{
    try {

        let result=await apiCall('POST','/api/v1/user/login',data);
        return result;
        
    } catch (er){
        return {success:false,message:er?.response?.data?.message};
    }
}
export const signup=async(data)=>{
    try {

        let result=await apiCall('POST','/api/v1/user/signup',data);
        return result;
        
    } catch (er){
        return {success:false,message:er?.response?.data?.message};
    }
}

export const googleSignup=async(data)=>{
    try {
        
        let result=await apiCall('POST','/api/v1/user/google_signup',data);
        return result;

    } catch (er) {
        return {success:false,message:er?.response?.data?.message};
    }
}

export const googleLogin=async(credential)=>{
    try {
        
        let result=await apiCall('POST','/api/v1/user/google_login',{credential});
        return result;

    } catch (er) {
         return {success:false,message:er?.response?.data?.message};
    }
}