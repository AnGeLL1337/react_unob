import { useState, useCallback } from 'react';
import { InputGroup, FormControl, Button} from 'react-bootstrap';

/**
 * This is Search area with search button.
 * @param {*} children
 * @param {() => void} onClick
 * @returns
 */

const SearchBar = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');


    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSearchClick = ()  => {
        console.log(searchTerm)
        handleSearch(searchTerm);
    };

    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <Button variant="primary" id="button-addon2" onClick={handleSearchClick}>
                Search
            </Button>
        </InputGroup>
    );
};

export default SearchBar;