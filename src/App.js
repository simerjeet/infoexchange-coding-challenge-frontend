import React, { Component } from 'react';
import AuthorForm from './AuthorForm';
import BookForm from './BookForm';
import BookList from './BookList';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends Component{

  

  render() {
    return (
        <Router>
        <div>
            <p>Please choose a repository from the list below.</p>
            <ul>
            {/* <Link exact to="/about">About</Link> */}

                <li><Link to="/AuthorForm">Author Form</Link></li>
                <li><Link to="/BookForm">Book Form</Link></li>
                <li><Link to="/BookList">Book List</Link></li>
            </ul>

        <hr/>
        <Switch>
            <Route exact path = "/AuthorForm" component={AuthorForm} />
            <Route exact path = "/BookForm" component={BookForm} />
            <Route exact path = "/BookList" component={BookList} />
        </Switch>
        </div>
        </Router>
    );
}
}



export default App;
