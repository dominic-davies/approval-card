import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Single component with 3 instances of CommentDetail
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="hello world" avatar={faker.image.avatar()} />
            </ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Yesterday at 6:45PM" content="hello world again" avatar={faker.image.avatar()} />
                <CommentDetail author="Jane" timeAgo="Today at 9:45PM" content="hello world one more time" avatar={faker.image.avatar()} />

        </div>
    );
    
};

ReactDOM.render(<App />, document.querySelector('#root'))