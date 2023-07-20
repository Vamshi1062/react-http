import axios from 'axios'
import React, { Component } from 'react'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(respose=>{
            console.log(respose)
            this.setState({
                posts:respose.data
            })
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                errorMsg:'error while retrieving the data'
            })
        })
    }
    render() {
        const{posts,errorMsg}=this.state
        return (
            <div>
                List of Posts
                {
                    posts.length?posts.map(
                        post=><div key={post.id}>{post.title}</div>
                    ):null
                }
                {
                    errorMsg?<div>{errorMsg}</div>:null
                }
            </div>
        )
    }
}

export default PostList


//flow starts with constructor  ,state property called posts 
//which is an empty property
//control flows to render method .text list of post is displayed actual list is not rendered because the array is empty at the moment
//control flows to component did mount we make a get request to api endpoint
//once data is retrived update the state posts property
//when we change state component will re-render and this time array is not empty and
// hence the list of titles are renderd in the browser

//how to dispaly the error message when the api fails 