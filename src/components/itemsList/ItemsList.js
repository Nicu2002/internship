import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
import './itemsList.css';

const ItemsList = ({data, onDeleteItem}) => {

    const renderItems = (arr) => {
        const items = arr.map(item => {
            return (
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-center"
                    key={item.id}>
                    <h5 className="col-sm"><b>{item.name}</b></h5>
                    <div className="ms-5 me-auto col-sm">
                        <div className="fw-bold">{item.job}</div>
                        {item.city}
                    </div>
                    <div className="me-auto col-sm">
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
        return (
            <ListGroup>
                {items}
            </ListGroup>
        )
    }

    const items = renderItems(data);
    return (
        <div className="items-list-container">
            {items}
        </div>
    );
}

export default ItemsList;