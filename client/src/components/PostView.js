import React from 'react';
import { connect } from 'react-redux';
import { Header, Container, Table} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PostView = ({ post = {} }) => (
    <Container>
    <Link to="/posts">See All Posts</Link>
    <Header as="h3" textAlign="center">{post.title}</Header>
    
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Author</Table.Cell>
          <Table.Cell>{post.author}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Post</Table.Cell>
          <Table.Cell>{post.body}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
    return { post: state.posts.find( a => a.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(PostView);