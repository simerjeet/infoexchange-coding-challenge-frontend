import React, { Component } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import BookDetails from './BookDetails';

class BookList extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts:[

            ]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8000/api/books/')
        .then(response => {
            this.setState({
               posts: response.data 
            })
            console.log(response.data)
        })
    }

    render() {
        const {posts} = this.state
        return (
            <Router>
            <div>
                <h1>List of Books</h1>
                
                {
                    posts.map(post => <div key = {post.id}>{post.name}</div>)
                    
                }

                <Switch>
                <Route exact path = "/BookDetails" component={BookDetails} />
            </Switch>
                
            </div>
            </Router>
        )
    }
}




export default BookList