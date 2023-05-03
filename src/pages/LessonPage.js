import { useState, useEffect } from 'react';
import {LessonCard} from "../components/LessonCard";
import { fakequeryplannedLesson} from "../queries/fakequeryplannedLesson";

export const LessonPage = ({id}) => {
    const [lesson, setLesson] = useState(null)

    useEffect(
        () => {
            fakequeryplannedLesson(id)
                .then(response => response.json())
                .then((json) => setLesson(json))
        }, [id]
    )

    return (
        <LessonCard lesson={lesson} />
    )
}