import { POST_DATA } from "./action_type"

export const getPostsStart = () => {
    return {
        type: POST_DATA.GET_POST_DATA_START 
    }
}

export const getPostsFail = () => {
    return {
        type: POST_DATA.GET_POST_DATA_FAIL
    }
}

export const getPostsSuccess = (payload : any) => {
    return {
        type: POST_DATA.GET_POST_DATA_SUCCESS,
        payload
    }
}