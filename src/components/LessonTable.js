import  {LessonTableRow} from "./LessonTableRow";

/**
 * Table of lessons
 * @param {*} param0
 * @returns
 */

export const LessonTable = ({lessons, actions}) => {
    console.log(lessons)
    return (
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Název</th>
                    <th>Poslední změna</th>
                </tr>
            </thead>
            <tbody>
               <LessonTableRow lesson={lessons} actions={actions}/>
            </tbody>
        </table>
    )
}