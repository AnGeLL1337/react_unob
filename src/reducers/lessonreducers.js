import {createSlice} from "@reduxjs/toolkit";

import {CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem} from "./keyedreducers";
import SearchButton from "../components/SearchButton";

/**
 * stavova funkce, ktera odebere lekci
 * @param {*} state
 * @param {*} action
 * @returns
 */
const LessonRemove = (state, action) => {
    console.log('volani stavove funkce, smazat lekce')
    const l = action.payload.lesson
    delete state[l.id]
    return state
}

/**
 * Stavova funkce, ktera provede update lekce
 * @param {*} state
 * @param {*} action
 * @returns
 */

const LessonUpdate = (state, action) => {
    const l = action.payload.lesson
    state[l.id] = {...state[l.id], ...l}
    return state
}

/**
 * kompletne definovany stavovy automat pro lekce
 * @param {*} state
 * @param {*} action
 * @returns
 */

export const LessonSlice = createSlice({
    name: 'lessons',
    initialState: {},
    reducers: {
        lesson_add: CreateItem,
        lesson_delete: DeleteItem,
        lesson_replace: ReplaceItem,
        lesson_update: UpdateItem,
        lesson_select: SelectItem,

        lesson_Remove: LessonRemove,
        lesson_Update: LessonUpdate,
        lesson_Search: SearchButton


    }
})

//z rezu odvozene akce
export const LessonActions = LessonSlice.actions
//z rezu odvozeny stavovy automat
export const LessonReducer = LessonSlice.reducer
