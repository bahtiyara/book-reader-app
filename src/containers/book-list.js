import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className='list-group-item'>{book.title}</li>
            )
        });
    }

    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    // when action creator(in this case, selectBook) is called, 
    // the result (which is the action) will be passed to all reducers.
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// anything returned from the first parentheses will become the props
// of anything in the second parentheses