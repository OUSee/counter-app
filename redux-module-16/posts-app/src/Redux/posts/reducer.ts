import { stat } from 'fs';
import { POST_DATA } from './action_type';

const initialState : any = []

export const PostsDataReducer = (state = initialState, action: any) => {
    switch (action.type) { 
        case POST_DATA.GET_POST_DATA_START: return action.type;

        case POST_DATA.GET_POST_DATA_SUCCESS: return [...action.payload];

        case POST_DATA.GET_POST_DATA_FAIL: return action.type;

        default: return state;
    }
}