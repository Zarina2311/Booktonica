import React, { Component } from "react";
import { addComment } from "../helpers/booktonica-api-fetcher";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class CommentForm extends Component {
  render() {
    const onSubmit = event => {
      event.preventDefault();

      addComment({
        book_id: this.props.bookId,
        comment: event.target.text.value
      }).then(() => this.props.afterSubmit());

      event.target.reset();
    };

    return (
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="commentText">Add comment here</Label>
          <Input type="textarea" name="text" />
        </FormGroup>
        <Button color="info">Add Comment</Button>
      </Form>
    );
  }
}

export default CommentForm;
