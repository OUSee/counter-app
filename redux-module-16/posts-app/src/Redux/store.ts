import { configureStore, createStore } from "@reduxjs/toolkit";
import { create } from "domain";
import { PostsDataReducer } from "./posts/reducer";

const reducer = (state = false, action: any) => {
    switch (action.type) {
        case "test": return true;
        default: return state
    }
}

export const store = createStore(PostsDataReducer)