import React, { Component } from 'react';
import axios from 'axios';
// import BookForm from './BookForm';
class BookDetails extends Component {

    constructor(props){
        super(props)

        this.state = {
            posts:[],
            author:[]
        }
    }
    componentDidMount(){
        console.log(this.props)
        const { match: {params}} =  this.props
        axios.get(`http://localhost:8000/api/book/${params.postId}/`)
        .then(response => {
            this.setState({
               posts: response.data,
               author: response.data.author
            })

        
            // console.log(params)
        })
    }

    render() {
        // console.log(this.state)
        const {posts,author} = this.state
        // const {author} = this.state.posts
        // console.log(author)
        // const author = posts.author
        // console.log(author)
        // const {authorName} = posts.author
        return (
            <div>
                <h1>Book Details</h1>
                <div>
                    <p><b>Name of the Book : </b>{posts.name}</p>
                    <p><b>ISBN : </b>{posts.isbn}</p>
                    <p><b>Author of the Book : </b>{author.first_name} {author.last_name}</p>
                    
                </div>
                
                
            </div>
        )
    }
}

export default BookDetails

// ReactDOM.render(AuthorList />, document.getElementById)