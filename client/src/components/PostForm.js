import React from 'react';
import { connect } from 'react-redux'
import { updatePost, addPost } from '../actions/posts'
import { Form } from 'semantic-ui-react';

class PostForm extends React.Component {
  initialState = { 
    title: '', 
    author: '', 
    body: ''
  }

  state = {...this.initialState}

  componentWillMount() {
    if (this.props.id) 
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { title, value } = e.target
    this.setState({ [title]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = {...this.state}
    const { dispatch } = this.props
    const func = this.props.id ? updatePost : addPost
    dispatch(func(post))
    
  }

  render() {
    const { title, author, body } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          title="title"
          required
          defaultValue={title}
          onChange={this.handleChange}
          label="Title"
        />
        <Form.Input
          name="author"
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Input
          name="body"
          defaultValue={body}
          onChange={this.handleChange}
          label="Body"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm);