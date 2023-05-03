import Card from "react-bootstrap/Card";

import {LessonTable} from "./LessonTable";

/**
 * Renders a card containing a list of lessons.
 */

export const LessonCard = ({lessons, actions}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Lekce
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <LessonTable lessons={lessons} actions={actions}/>
            </Card.Body>
        </Card>
    )
}