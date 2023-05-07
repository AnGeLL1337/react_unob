import {DeleteButton} from "./DeleteButton";

/**
 * This is Delete Button with confirmation (two state button).
 * @param lesson
 * @param actions
 * @returns {JSX.Element}
 * @constructor
 */
export const LessonRemoveButton = ({lesson, actions}) => {
    const onClick = () => {
        console.log('jdu smazat lekci')
        actions.onLessonRemove({lesson: lesson})
    }
    return (
        <DeleteButton onClick={onClick}>Del</DeleteButton>
    )
}