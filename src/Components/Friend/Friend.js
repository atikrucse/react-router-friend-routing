import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const friendStyle = {
        border: '1px solid gold',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    const  history = useHistory();
    const handleClick = (friendId) =>{
        const url = `/friend/${friendId}`;
        history.push(url);
    }

    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            {/* <Link to={`/friend/${id}`}><button>Show detail</button></Link> */}
            <button onClick={() => handleClick(id)}>Show detail</button>
        </div>
    );
};

export default Friend;