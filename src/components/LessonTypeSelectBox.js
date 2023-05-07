import Form from 'react-bootstrap/Form'
import {useState} from 'react'

function SelectBasicExample() {
    const [premena, setPremena] = useState('');
    const handleChange = (event) => {
        setPremena(event.target.value);

    }

    return (
        <Form.Select aria-label="DefaultBox" onChange={handleChange}>
            <option>NULL</option>
            <option value="1">P</option>
            <option value="2">CV</option>
            <option value="3">LAB</option>
            <option value="4">{premena}</option>
        </Form.Select>

    );
}

export default SelectBasicExample;