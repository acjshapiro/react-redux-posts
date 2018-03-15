import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/posts';
import { Container, Header, Card, Button } from 'semantic-ui-react';
import PostForm from './PostForm';

class Posts extends React.Component {
    

    posts = () => {
        let { posts } = this.props;
        let visible = posts;

        return this.props.posts.map( post =>
            <Card key={post.id} >
               
               <Card.Content>
                <Card.Header>
                    {post.title}
                    </Card.Header>
                    <Card.Meta>
                        {post.author}
                    </Card.Meta>
                    <Card.Description>
                        {post.body}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/posts/${post.id}`}>
                        View Post 
                    </Link>
                </Card.Content>
            </Card>
         )
    }

    render() {
        
        return(
            <Container>
                <Header as="h3" textAlign="center"> POSTS</Header>
                
                <PostForm closeForm={this.toggleForm} />

                    <Card.Group itemsPerRow={4}>
                        {this.posts() }
                    </Card.Group>
            </Container>        
        )
    }

}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(Posts);