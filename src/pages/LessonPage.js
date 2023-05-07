import { useState, useEffect } from 'react';
import { LessonCard } from "../components/LessonCard";
import { fakeQueryLesson } from "../queries/fakequerylesson";

/**
 * Renders a page with fake query lesson.
 * @param id
 * @returns {JSX.Element}
 * @constructor
 */

export const LessonPage = ({id}) => {
    const [lesson, setLesson] = useState(null)

    useEffect(
        () => {
            fakeQueryLesson(id)
                .then(response => response.json())
                .then((json) => setLesson(json))
        }, [id]
    )

    return (
        <LessonCard lesson={lesson} />
    )
}