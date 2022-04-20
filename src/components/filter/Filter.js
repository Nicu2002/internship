import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './filter.css';

const Filter = ({onChangeTerm}) => {
    const [ termState, termSetState ] = useState('');
    
    const onUpdateSearch = (e) => {
        const term = e.target.value;
        termSetState(term);
    }
    return (
        <form id="searchBar">
            <input type="text" name="term" placeholder="Search"
                value={termState}
                onChange={onUpdateSearch}/>
            <Button
                variant="dark"
                onClick={() => onChangeTerm(termState)}>
                go
            </Button>
        </form>
    );
}

export default Filter;