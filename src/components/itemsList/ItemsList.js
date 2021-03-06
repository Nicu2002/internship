import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import './itemsList.css';
import spinner from '../../static/spinner.gif';

const ItemsList = ({data, onDeleteItem, loading}) => {

    const renderItems = (arr) => {
        const items = arr.map(item => {
            return (
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-center"
                    key={item.id}>
                    <h5><b>{item.name}</b></h5>
                    <div className="job-info">
                        <div className="job fw-bold">{item.job}</div>
                        {item.city}
                    </div>
                    <div className="contacts-info">
                        <b>Email : </b>{item.email}<br/>
                        <b>Phone number : </b>{item.phoneNumber}
                    </div>
                    <Button
                        variant="danger"
                        onClick={()=>onDeleteItem(item.id)}>
                        Delete
                    </Button>
                </ListGroup.Item>
            )
        });
        if (items.length === 0) {
            return (
                <p>ooPs! no contents!</p>
            )
        }
        return (
            <ListGroup>
                {items}
            </ListGroup>
        )
    }

    const items = !loading ? renderItems(data) : null;
    const spinnerLoading = loading ? <img src={spinner} alt="loading" style={{"width": "50px"}} /> : null;
    return (
        <div className="items-list-container">
            {spinnerLoading}
            {items}
        </div>
    );
}

export default ItemsList;