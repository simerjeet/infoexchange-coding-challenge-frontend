import React, { Component } from 'react';
import axios from 'axios';
// import AuthorList from './AuthorList';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
  import Select from 'react-select';

class BookForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            bookName : '',
            isbn : '',
            authors : [],
            authorSelected: '',
        }


    }

    

    componentDidMount(){
        axios.get('http://localhost:8000/api/authors/')
        .then(response => {
            this.setState({
                authors: [{id: '', first_name: "Select Author", last_name: "of the Book"}].concat(response.data)
            })
        })
    }

    
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault()
        console.log(this.state)
        let payload = {
            "name": this.state.bookName[0],
            "isbn": this.state.isbn[0],
            "author_id":this.state.authorSelected
        }
        axios.post('http://localhost:8000/api/book/', payload)
        .then(response => {
            console.log(response)
        })
    }
    
    

    render() {
        const {bookName,isbn,authors} = this.state

        return (
            <div>
                <h1>BOOK FORM</h1>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label>Name of the Book : </label>
                        <input 
                        type = 'text'
                        name = 'bookName'
                        value= {bookName}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                    <br />
                    <div>
                    <label>ISBN :</label>
                        <input 
                        type = 'text'
                        name = 'isbn'
                        value= {isbn}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                    <br />
                    <div>
                    <label>Name of the Author : </label>
                        <div>
                            <select value={this.state.authorSelected}
                                onChange={(e) => this.setState({authorSelected: e.target.value})}>
                            {this.state.authors.map((author) => <option key={author.id} value={author.id}>{author.first_name + " " + author.last_name}</option>)}
                            </select>
                        </div>
                    </div>
                    <br />
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default BookForm