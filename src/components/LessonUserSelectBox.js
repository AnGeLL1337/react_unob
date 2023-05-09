import {Form} from 'react-bootstrap';

import {useState} from "react";
import {useDispatch} from "react-redux";

import {bindLessonActions} from "../reducers/_main";


/**
 * Komponenta pre výber používateľa pre konkrétnu lesson
 *
 * @param {Object} props - Props pre komponentu.
 * @param {Object} props.lesson - Objekt lesson.
 * @returns {JSX.Element} Komponenta pre výber používateľa pre konkrétnu lesson.
 */

export const LessonUserSelectBox = (props) => {
    const {lesson} = props;
    const [selectedUser, setSelectedUser] = useState(lesson.user);
    const dispatch = useDispatch();
    const { onLessonUserSelect } = bindLessonActions(dispatch);

    const handleSelect = (value) => {
        const user = value === 'NULL' ? null : value;
        setSelectedUser(user);
        onLessonUserSelect({lesson: lesson, user: user})
    }

    return (
        <Form.Select
            key={`${lesson.id}-${lesson.user}`}
            aria-label="LessonUserSelectBox"
            value= {selectedUser ?? 'NULL'}
            onChange={(e) => handleSelect(e.target.value)}
        >
            <option>NULL</option>
            <option value="Fero">Fero</option>
            <option value="Dávid">Dávid</option>
            <option value="Filip">Filip</option>
            <option value="Jano">Jano</option>
        </Form.Select>
    );
};
