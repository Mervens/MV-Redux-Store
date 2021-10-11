import { UPDATE_BOOKS } from "./actions"
import { UPDATE_CURRENT_BOOK } from "./actions"
import { useReducer } from "react"

export const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_BOOKS:
            return {
                ...state,
                books: actions.books
            }
        case UPDATE_CURRENT_BOOK:
            return {
                ...state,
                currentBook: action.currentBook
            }
    }
}

export function useBookReducer(initialState) {
    return useReducer(reducer, initialState);
}
