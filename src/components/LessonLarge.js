import Card from "react-bootstrap/Card";

import {LessonCard} from "./LessonCard";

/**
 * Renders a card describing a lesson in detailed form.
 * @param {*} param0
 * @returns
 */

export const LessonLarge = ({lesson, actions}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Lekce {lesson.id}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <LessonCard lessons={lesson} actions={actions} />
            </Card.Body>
            <Card.Body>
                {JSON.stringify(lesson)}
            </Card.Body>
        </Card>
    )
}