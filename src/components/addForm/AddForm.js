import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './addForm.css';


const AddForm = ({ addItem}) => {
    const itemObj = { name: '', job: '', city: '', email: '', phoneNumber: '', id: ''};
    const [dataState, dataSetState] = useState(itemObj);

    const onValueChange = (e) => {
        dataSetState({ ...dataState, [e.target.name]: e.target.value });
    }

    const { name, job, city, email, phoneNumber } = dataState;

    return (
        <div className="app-add-form ms-5 bg-light border border-dark">
            <h3>Add new item</h3>
            <form className="add-form">
                <input type="text"
                    onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="name"
                    name="name"
                    value={name}/>
                <input type="text" 
                    onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="job"
                    name="job" 
                    value={job} />
                <input type="text"
                    onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="city"
                    name="city"
                    value={city}/>
                <input type="text" 
                    onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="email"
                    name="email" 
                    value={email} />
                <input type="text"
                    onChange={onValueChange}
                    className="form-control new-post-label"
                    placeholder="phone number"
                    name="phoneNumber"
                    value={phoneNumber}/>
                <Button
                    variant="success"
                    onClick={()=> addItem(dataState)}>Add</Button>
            </form>
        </div>
    );
}

export default AddForm;