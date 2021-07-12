import React, { Component } from 'react';
import axios from 'axios';

class AuthorForm extends Component {

    constructor(props){
        super(props)

        this.state = {
            firstName : '',
            lastName : ''
        }


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
            "first_name": this.state.firstName[0],
            "last_name": this.state.lastName[0]
        }
        axios.post('http://localhost:8000/api/author/', payload)
        .then(response => {
            console.log(response)
            // this.setState({
            //    posts: response.data 
            // })
            // console.log(response.data)
        })
    }
    
    

    render() {
        const {firstName,lastName} = this.state
        return (
            <div>
                <h1>AUTHOR FORM</h1>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input 
                        type = 'text'
                        name = 'firstName'
                        value= {firstName}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                    <label>Last Name</label>
                        <input 
                        type = 'text'
                        name = 'lastName'
                        value= {lastName}
                        onChange={this.handleChange}
                        ></input>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default AuthorForm