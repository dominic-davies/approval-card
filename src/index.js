import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src="/" alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Stephen
                    </a>
                    <div className="metada">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dignissimos dicta velit dolorem non perferendis!</div>
                </div>
            </div>
        </div>
    );
    
};

ReactDOM.render(<App />, document.querySelector('#root'))