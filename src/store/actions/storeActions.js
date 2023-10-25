export const SET_STORE="SET_STORE";

export const setStore=(storeObj)=>{
    return {
       type:SET_STORE,
       payload:storeObj, 
    }
}