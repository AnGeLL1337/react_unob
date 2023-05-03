import {createSlice} from "@reduxjs/toolkit";

import {CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem} from "./keyedreducers";

/**
 * kompletne definovany stavovy automat pro lekce
 *
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

    }
})

//z rezu odvozene akce
export const LessonActions = LessonSlice.actions
//z rezu odvozeny stavovy automat
export const LessonReducer = LessonSlice.reducer
