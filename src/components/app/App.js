import { Component } from 'react';
import nextId from "react-id-generator";
import './app.css';
import APIService from "../../services/APIService";

import ItemsList from '../itemsList/ItemsList';
import AddForm from '../addForm/AddForm';
import Filter from '../filter/Filter'

class App extends Component {
  state = {
    data: [],
    term: ''
  }

  getData = new APIService();

  componentDidMount() {
    this.getData.getAllData()
      .then(this.onDataLoaded);
  }
  onDataLoaded = (newItems)=> {
    this.setState(() => ({
      data: [...newItems]
    }))
  }

  onDeleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !==id)
      }
    })
  }

  onFilter = (term, items) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1
    });
  }

  onChangeTerm = (term) => {
    this.setState(() => ({ term }));
    this.getData.getDataByName(term)
      .then(this.onDataLoaded);
  }
  
  idGenerator = nextId('add-');

  addItem = ({ job, city, name, email, dateCreated, phoneNumber }) => {
    const item = { 
      id: this.idGenerator,
      job: job,
      city: city,
      name: name,
      email: email,
      dateCreated: dateCreated,
      phoneNumber: phoneNumber
    };
    const result = { // on server keys are with uppercase
      id: item.id,
      Job: job,
      City: city,
      Name: name,
      Email: email,
      DateCreated: dateCreated,
      "Phone Number": phoneNumber
    };
    this.getData.postData(result);
    const newState = [...this.state.data, item];
    this.setState(() => ({
      data: newState
    }))
    this.idGenerator = nextId("add-");
  }

  render() {
    const visibleData = this.state.data;
    return (
      <div className='app'>
        <Filter onChangeTerm={this.onChangeTerm}/>
        <div className='d-flex'>
          <ItemsList data={visibleData} onDeleteItem={this.onDeleteItem} />
          <AddForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
