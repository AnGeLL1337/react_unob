import {TextInput} from "./TextInput";
import {DeleteButton} from "./DeleteButton";

/**
 * One lesson as a table row
 * @param {*} param0
 * @returns
 */
export  const LessonTableRow = ({lesson, actions}) => {

    const onClick = () => {
        const payload = {lesson: lesson}
        actions.onLessonRemove(payload)
        console.log('jdu smazat hodinu')
    }

    return (
        <tr>
            <td>{lesson.id}</td>
            <td>{lesson.name}</td>
            <td>{lesson.lastchange}</td>
            <td>
                <DeleteButton onClick={onClick}>Zmaž</DeleteButton>
            </td>
        </tr>
    )
}