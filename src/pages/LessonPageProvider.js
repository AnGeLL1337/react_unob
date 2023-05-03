import {useEffect} from "react";
import {useSelector} from "react-redux";
import {LessonLarge} from "../components/LessonLarge";
import {actions} from "./AppProvider";

/**
 * Komponenta, která poskytuje data a funkce pro práci s lekcemi.
 * @param {*} param0
 * @returns
 */
export const LessonPageProvider = ({id}) => {
    const lessons = useSelector(state => state.lessons)
    const selectedId = useSelector(state => state.lessons.selectedId)
    const lesson = lessons[id]

    useEffect(
        () => {
            console.log('LessonPageProvider refetch ' + id)
            actions.lessonFetch(id)
        }, [id, selectedId]
    )

    if (lesson) {
        return (
            <LessonLarge lesson={lesson} actions={actions}/>
        )
    } else {
        return (
            <div>Loading... {id}, {lesson}</div>
        )
    }
}