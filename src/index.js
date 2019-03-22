import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// Single component
const App = () => {
    return (
        <div className="ui container comments">
            
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="hello world" />
            <CommentDetail author="Alex" timeAgo="Yesterday at 6:45PM" content="hello world again" />
            <CommentDetail author="Jane" timeAgo="Today at 9:45PM" content="hello world one more time" />
        </div>
    );
    
};

ReactDOM.render(<App />, document.querySelector('#root'))