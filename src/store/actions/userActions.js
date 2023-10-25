export const SET_USER="SET_USER";

export const setUser=(userObj)=>{
    return {
       type:SET_USER,
       payload:userObj, 
    }
}