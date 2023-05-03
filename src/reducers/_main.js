import { GroupActions } from "./groupreducers"
import { LessonActions } from "./lessonreducers"
import { GroupFetch, GroupFakeFetch } from "./GroupAsyncActions"
import { LessonFetch, LessonFakeFetch } from "./LessonAsyncActions"

/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 * @param {*} dispatch 
 * @returns 
 */
export const bindGroupActions = (dispatch) => {
    return {
        onGroupUpdate: (g) => dispatch(GroupActions.group_update(g)),
        onGroupAdd: (g) => dispatch(GroupActions.group_add(g)),
    
        onGroupMemberRemove: ({user, group}) => dispatch(GroupActions.group_memberRemove({user, group})),
        onGroupMemberUpdate: (payload) => dispatch(GroupActions.group_memberUpdate(payload)),
    
        groupFetch: (id) => dispatch(GroupFetch(id)),
        groupFakeFetch: (id) => dispatch(GroupFakeFetch(id)),    
       
    }
}

/**
 * vytvori actions, ktere pri volani uz vse radne provedou
 * jsou zahrnuty i "asynchronni" akce
 * @param {*} dispatch
 * @returns
 */
export const bindLessonActions = (dispatch) => {
    return {
        onLessonUpdate: (g) => dispatch(LessonActions.lesson_update(g)),
        onLessonAdd: (g) => dispatch(LessonActions.lesson_add(g)),

        lessonFetch: (id) => dispatch(LessonFetch(id)),
        lessonFakeFetch: (id) => dispatch(LessonFakeFetch(id)),

    }
}