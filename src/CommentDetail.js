import React from 'react';

const CommentDetail = () => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img src={faker.image.avatar()} alt="avatar"/>
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
    <div className="comment">
        <a href="/" className="avatar">
            <img src={faker.image.avatar()} alt="avatar"/>
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
    <div className="comment">
        <a href="/" className="avatar">
            <img src={faker.image.avatar()} alt="avatar"/>
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
    )
}