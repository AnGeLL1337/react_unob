import {TextInput} from "./TextInput";

/**
 * One lesson as a table row
 * @param {*} param0
 * @returns
 */
export  const LessonTableRow = ({lesson, actions}) => {

    const onClick = () => {
        console.log('jdu smazat hodinu')
    }

    return (
        <tr>
            <td>{lesson.id}</td>
            <td>{lesson.name}</td>
            <td>{lesson.lastchange}</td>
        </tr>
    )
}