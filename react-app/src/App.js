import React, { Component } from "react";
import "./App.css";
import { getAllBooks, getComments } from "./helpers/booktonica-api-fetcher";
import BookCardList from "./components/BookCardList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      comments: []
    };
  }

  componentDidMount() {
    getAllBooks().then(books => this.setState({ books: books }));
    this.loadComments();
  }

  loadComments() {
    getComments().then(comments => this.setState({ comments: comments }));
  }

  render() {
    return (
      <div className="App">
        <BookCardList
          books={this.state.books}
          comments={this.state.comments}
          loadComments={this.loadComments.bind(this)}
        />
      </div>
    );
  }
}

export default App;
