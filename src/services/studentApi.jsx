import {apiCall} from './apiCall';

export const updateStudentProfile=async(data,token)=>{
  try {
    
    let headers={
        authorization: `Bearer ${token}`
    }

    let result=await apiCall('POST','/api/v1/student/update_profile',data,headers);
    return result;

  } catch (er) {
     return {success:false,message:er?.response?.data?.message};
  }
}