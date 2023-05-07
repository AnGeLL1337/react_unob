import {TextInput} from "./TextInput";
import SelectBasicExample from "./LessonTypeSelectBox";

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
            <td><SelectBasicExample></SelectBasicExample></td>
        </tr>
    )
}